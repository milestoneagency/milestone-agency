"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong. Please try again.");
      setStatus("success");
      setMessage("Thanks — your enquiry has been sent. We’ll get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your message. Please email us directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>YOUR NAME<input name="name" type="text" autoComplete="name" placeholder="Your full name" minLength={2} maxLength={80} required /></label>
        <label>WORK EMAIL<input name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={160} required /></label>
      </div>
      <div className="form-row">
        <label>COMPANY / WEBSITE <span className="optional">OPTIONAL</span><input name="website" type="text" placeholder="yourwebsite.com" maxLength={180} /></label>
        <label>WHAT DO YOU NEED?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>SEO & AI search</option><option>Google / Meta Ads</option><option>Social media marketing</option><option>Website design & development</option><option>Branding & creative</option><option>Analytics & automation</option><option>Not sure yet</option></select></label>
      </div>
      <label>YOUR GOAL<textarea name="message" placeholder="Tell us a little about your business and what you want to improve…" rows={4} minLength={10} maxLength={4000} required /></label>
      <label className="honeypot" aria-hidden="true">Leave this empty<input name="companyFax" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-bottom"><p>By submitting, you agree that we can contact you about this enquiry.</p><button className="button button-lime" type="submit" disabled={status === "sending"}>{status === "sending" ? <><LoaderCircle className="spin" size={17} /> Sending…</> : <>Send enquiry <ArrowUpRight size={17} /></>}</button></div>
      {message && <p className={`form-message ${status}`} role="status">{status === "success" && <CheckCircle2 size={17} />}{message}</p>}
    </form>
  );
}
