"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase-browser";
export function MaintenanceGate() {
 const [active,setActive]=useState(false); const [checking,setChecking]=useState(true); const [admin,setAdmin]=useState(false);
 useEffect(()=>{let live=true;try{const sb=getSupabase();Promise.all([sb.from("site_settings").select("maintenance_mode").eq("id",1).maybeSingle(),sb.auth.getSession()]).then(([setting,session])=>{if(!live)return;setActive(Boolean(setting.data?.maintenance_mode));setAdmin(session.data.session?.user?.app_metadata?.role==="admin");setChecking(false)}).catch(()=>setChecking(false));const {data:{subscription}}=sb.auth.onAuthStateChange((_e,s)=>setAdmin(s?.user?.app_metadata?.role==="admin"));return()=>{live=false;subscription.unsubscribe()}}catch{setChecking(false)}},[]);
 if(checking||!active||admin)return null;
 return <div className="maintenance-screen" role="status"><div><span className="eyebrow eyebrow-light">A QUICK PAUSE</span><h1>We&apos;re making<br/><span className="text-gradient">things better.</span></h1><p>Our website is temporarily under maintenance. Please check back soon, or contact us by email for urgent enquiries.</p><Link href="mailto:hello@yourdomain.com" className="button button-lime">Email the team</Link></div></div>;
}
