import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-col">
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark"><span /><span /><span /><span /></span>
            <span className="brand-copy"><strong>milestone<span>.</span></strong><small>GROWTH AGENCY</small></span>
          </Link>
          <p>Digital experiences and marketing systems that help ambitious businesses move forward.</p>
          <a className="footer-email" href="mailto:hello@yourdomain.com"><Mail size={16} /> shuklasidharth2@gmail.com</a>
          <span className="footer-location"><MapPin size={16} /> India · Working worldwide</span>
        </div>
        <div className="footer-col"><h3>Explore</h3><Link href="/about">About us</Link><Link href="/portfolio">Selected work</Link><Link href="/blog">Insights & guides</Link><Link href="/training">Training</Link></div>
        <div className="footer-col"><h3>What we do</h3>{services.slice(0, 5).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}<Link href="/services">All services <ArrowUpRight size={13} /></Link></div>
        <div className="footer-cta"><span className="eyebrow eyebrow-light">HAVE A PROJECT IN MIND?</span><h3>Let&apos;s make your next move count.</h3><Link className="button button-lime" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link><div className="footer-orbit" aria-hidden="true" /></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Milestone Agency. All rights reserved.</span><div><Link href="/privacy">Privacy policy</Link><span className="footer-dot" /><Link href="/terms">Terms</Link></div><span className="footer-credit">Built for what&apos;s next <span>↗</span></span></div>
    </footer>
  );
}
