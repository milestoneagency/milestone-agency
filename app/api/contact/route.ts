import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[\u0000-\u001F\u007F]/g, "").slice(0, maxLength);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  // Honeypot: bots often fill hidden fields. Return a neutral response to avoid helping them adapt.
  if (clean(body.companyFax, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 80);
  const email = clean(body.email, 160);
  const website = clean(body.website, 180);
  const service = clean(body.service, 100);
  const message = clean(body.message, 4000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name.length < 2 || !validEmail || service.length < 1 || message.length < 10) {
    return NextResponse.json({ error: "Please check your name, email, service and message." }, { status: 400 });
  }

  // Persist the enquiry privately so the admin dashboard can review it.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseUrl && serviceKey) {
    try {
      const supabase = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
      const { error } = await supabase.from("inquiries").insert({ name, email, website, service, message });
      if (error) { console.error("Inquiry persistence failed", error.message); return NextResponse.json({ error: "We could not save your enquiry right now. Please try again later." }, { status: 503 }); }
    } catch { return NextResponse.json({ error: "We could not save your enquiry right now. Please try again later." }, { status: 503 }); }
  } else {
    return NextResponse.json({ error: "The contact form is not connected yet. Please configure Supabase environment settings." }, { status: 503 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    // The enquiry is safely stored in Supabase; email notification can be configured later.
    return NextResponse.json({ ok: true, notification: "not_configured" });
  }

  const safeText = [
    `New website enquiry for Milestone Agency`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Website: ${website || "Not provided"}`,
    `Service: ${service}`,
    "",
    "Goal / message:",
    message
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `New enquiry: ${service} — ${name}`, text: safeText }),
      cache: "no-store"
    });
    if (!response.ok) {
      return NextResponse.json({ error: "The email provider could not deliver this enquiry. Please try again or email us directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not send your message right now. Please try again later." }, { status: 502 });
  }
}
