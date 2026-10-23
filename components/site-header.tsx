"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/training", label: "Training" },
  { href: "/admin", label: "Admin login" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topline"><div className="container topline-inner"><span>Digital growth, built around your business.</span><a href="mailto:hello@yourdomain.com">Let&apos;s talk <ArrowUpRight size={13} aria-hidden="true" /></a></div></div>
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Milestone Agency home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><span /><span /><span /><span /></span>
          <span className="brand-copy"><strong>milestone<span>.</span></strong><small>GROWTH AGENCY</small></span>
        </Link>
        <button className="mobile-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {nav.map((item) => <Link key={item.href} href={item.href} className={pathname.startsWith(item.href) ? "nav-active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Let&apos;s talk <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}
