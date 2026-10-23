import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description: "Explore SEO, paid advertising, social media, website development, content, branding, marketing automation and analytics services."
};

export default function ServicesPage() {
  return <>
    <section className="inner-hero"><div className="container inner-hero-grid"><div><span className="eyebrow"><span className="pulse-dot" /> OUR SERVICES</span><h1>One partner.<br /><span className="text-gradient">Every digital layer.</span></h1><p>Choose the service you need today, then connect the pieces as your business grows. Clear scope, useful reporting and work tied to a real goal.</p><div className="hero-actions"><Link href="/contact" className="button button-lime">Find your starting point <ArrowUpRight size={17} /></Link></div></div><div className="inner-hero-card"><span className="inner-card-kicker">THE GROWTH MIX</span><div className="service-wheel"><div className="wheel-core">YOUR<br />GOAL</div><span>SEO</span><span>ADS</span><span>WEB</span><span>CONTENT</span><span>DATA</span><span>CREATIVE</span></div><p>Different channels. One connected strategy.</p></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">FIND YOUR FIT</span><h2>Built around the<br /><span className="text-muted">job to be done.</span></h2></div><p className="process-intro">Every engagement begins by understanding the starting point, not by selling a fixed checklist.</p></div><div className="services-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section>
    <section className="section short-dark"><div className="container short-dark-inner"><div><span className="eyebrow eyebrow-light">NOT SURE WHERE TO START?</span><h2>Let&apos;s put the priorities in order.</h2><p>We can review your goals, current marketing and website, then suggest a practical first step.</p></div><Link href="/contact" className="button button-lime">Request a consultation <ArrowUpRight size={16} /></Link></div></section>
    <section className="section"><div className="container reassurance-grid"><div><span className="eyebrow">WHAT YOU CAN EXPECT</span><h2>Clear work.<br /><span className="text-muted">Clear communication.</span></h2></div><div className="reassurance-points"><p><CheckCircle2 size={18} /> A scope tied to your business goals</p><p><CheckCircle2 size={18} /> Agreed deliverables and ownership</p><p><CheckCircle2 size={18} /> Reporting explained in plain language</p><p><CheckCircle2 size={18} /> Priorities reviewed as the data changes</p></div></div></section>
  </>;
}
