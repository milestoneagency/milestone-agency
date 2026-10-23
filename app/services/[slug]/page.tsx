import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { services, siteName } from "@/lib/site";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service not found" };
  return { title: `${service.title}`, description: service.short, alternates: { canonical: `/services/${service.slug}` }, openGraph: { title: `${service.title} | ${siteName}`, description: service.short } };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const otherServices = services.filter((item) => item.slug !== slug).slice(0, 3);
  return <>
    <section className="inner-hero service-detail-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><ChevronRight size={14} /><Link href="/services">Services</Link><ChevronRight size={14} /><span>{service.title}</span></div><div className="service-detail-hero-grid"><div><span className="eyebrow"><span className="pulse-dot" /> SERVICE {service.number}</span><h1>{service.title.split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{service.title.split(" ").slice(-1).join("")}</span></h1><p>{service.short} We’ll work with your business goals, current setup and audience to build a focused plan that can be measured and improved.</p><div className="hero-actions"><Link href="/contact" className="button button-lime">Talk about this service <ArrowUpRight size={16} /></Link><Link href="/pricing" className="button button-ghost">How pricing works <ArrowRight size={16} /></Link></div></div><div className="detail-highlight"><span className="detail-highlight-icon"><Sparkles size={22} /></span><span className="eyebrow eyebrow-light">FOCUSED ON THE OUTCOME</span><h2>Useful work.<br />Clear next steps.</h2><p>We align the activity with your audience, business priorities and available resources.</p></div></div></div></section>
    <section className="section"><div className="container detail-content-grid"><div><span className="eyebrow">WHAT&apos;S INCLUDED</span><h2>A plan made for<br /><span className="text-muted">your real priorities.</span></h2><p>Every project is scoped to suit the business, so the exact deliverables are agreed before work begins. A typical engagement may include:</p></div><div className="deliverables-grid">{service.details.map((detail) => <div key={detail} className="deliverable"><CheckCircle2 size={19} /><span>{detail}</span></div>)}</div></div></section>
    <section className="section light-panel"><div className="container"><div className="section-head"><div><span className="eyebrow">HOW WE APPROACH IT</span><h2>Strategy before<br /><span className="text-muted">busywork.</span></h2></div><p className="process-intro">The exact delivery changes by service, but the principles stay consistent: define success, implement carefully, measure and improve.</p></div><div className="process-grid"><article className="process-card"><span className="process-num">01 / REVIEW</span><h3>Understand the baseline</h3><p>Review the current website, campaigns, content or reporting and identify the biggest gaps.</p></article><article className="process-card"><span className="process-num">02 / PRIORITISE</span><h3>Choose the right work</h3><p>Separate quick fixes from longer-term improvements and agree on what comes first.</p></article><article className="process-card"><span className="process-num">03 / IMPLEMENT</span><h3>Ship with care</h3><p>Complete the agreed work with quality checks and communication about dependencies.</p></article><article className="process-card"><span className="process-num">04 / REVIEW</span><h3>Learn and adapt</h3><p>Use evidence to evaluate the work and decide what needs another iteration.</p></article></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">EXPLORE MORE</span><h2>Connected services,<br /><span className="text-muted">better together.</span></h2></div><Link href="/services" className="text-link">All services <ArrowUpRight size={16} /></Link></div><div className="services-grid related-services">{otherServices.map((item) => <Link className="related-service" key={item.slug} href={`/services/${item.slug}`}><span>{item.number}</span><h3>{item.title}</h3><p>{item.short}</p><ArrowUpRight size={17} /></Link>)}</div></div></section>
    <section className="closing-cta"><div className="container closing-inner"><div className="closing-stamp"><Sparkles size={22} /><span>NEXT<br />MILESTONE</span></div><div><span className="eyebrow eyebrow-light">LET&apos;S MAKE A PLAN</span><h2>Make {service.title.toLowerCase()} work for your business.</h2><p>Tell us where you are now and what you want to improve.</p></div><Link href="/contact" className="button button-lime">Start a conversation <ArrowUpRight size={17} /></Link><div className="closing-arc" aria-hidden="true" /></div></section>
  </>;
}
