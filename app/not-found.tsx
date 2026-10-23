import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <section className="not-found"><div className="container"><span className="eyebrow">404 / WRONG TURN</span><h1>This page took<br/><span className="text-gradient">a different route.</span></h1><p>The page may have moved or the link may be incorrect. Let's get you back on track.</p><div className="hero-actions"><Link className="button button-dark" href="/"><ArrowLeft size={16}/> Back home</Link><Link className="button button-light" href="/contact">Contact us <ArrowUpRight size={16}/></Link></div></div></section>;
}
