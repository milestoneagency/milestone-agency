import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact & Free Consultation", description: "Tell Milestone Agency about your SEO, paid ads, social media, website or marketing automation goals." };

export default function ContactPage() {
  return <>
    <section className="inner-hero contact-hero"><div className="container"><span className="eyebrow"><span className="pulse-dot" /> START A CONVERSATION</span><h1>Tell us what you&apos;re<br /><span className="text-gradient">working towards.</span></h1><p>You don&apos;t need a perfect brief. Give us the context, what feels stuck and what a better outcome would look like.</p></div><div className="contact-hero-orbit"/></section>
    <section className="section contact-main-section"><div className="container contact-layout"><div className="contact-info"><span className="eyebrow">LET&apos;S TALK ABOUT THE GOAL</span><h2>A useful first step<br /><span className="text-muted">starts here.</span></h2><p>Share a few details and we can work out what information is needed to scope the next step.</p><div className="contact-info-list"><div><span><Mail size={18}/></span><div><b>Email</b><a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a><small>Replace this sample address before launch.</small></div></div><div><span><Clock3 size={18}/></span><div><b>What happens next?</b><small>We review your message and reply using the contact details you provide.</small></div></div><div><span><ShieldCheck size={18}/></span><div><b>Your details</b><small>Use the form only for project enquiries. Connect the final privacy policy and data handling process before launch.</small></div></div></div><div className="contact-direct"><MessageCircle size={18}/><span>Prefer email?</span><Link href="mailto:hello@yourdomain.com">Write to us <ArrowUpRight size={14}/></Link></div></div><div className="contact-form-panel"><div className="contact-form-heading"><span className="eyebrow">PROJECT ENQUIRY</span><span className="contact-form-step">01 — 01</span></div><h2>What can we help you with?</h2><p>Usually takes about two minutes.</p><ContactForm /></div></div></section>
  </>;
}
