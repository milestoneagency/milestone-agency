import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { articles } from "@/lib/site";

export const metadata: Metadata = { title: "Insights & Guides", description: "Practical digital marketing, SEO, website performance and growth guides for business owners." };

export default function BlogPage() {
  return <>
    <section className="inner-hero"><div className="container inner-hero-grid"><div><span className="eyebrow"><span className="pulse-dot" /> THE GROWTH NOTES</span><h1>Learn something.<br /><span className="text-gradient">Make the next move.</span></h1><p>Practical guides for people building better websites and marketing systems. Straightforward explanations, useful checklists and no unnecessary jargon.</p></div><div className="blog-hero-note"><span className="blog-note-asterisk">✳</span><span>THOUGHTFUL<br />BY DESIGN</span><p>Useful ideas should be easy to put into practice.</p></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">LATEST GUIDES</span><h2>Build your digital<br /><span className="text-muted">know-how.</span></h2></div><p className="process-intro">Use these articles as starting points. Your exact next steps will depend on the website, audience and business goals.</p></div><div className="blog-list">{articles.map((article, i) => <article className="blog-row" key={article.slug}><div className={`blog-row-art blog-row-art-${i + 1}`}><span>{String(i + 1).padStart(2, "0")}</span><div className="blog-art-pattern"><i/><i/><i/><i/><i/></div></div><div className="blog-row-copy"><div className="insight-meta"><span>{article.category}</span><span><Clock3 size={13}/> {article.readTime.toUpperCase()}</span></div><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.excerpt}</p><Link className="insight-read" href={`/blog/${article.slug}`}>Read guide <ArrowUpRight size={15}/></Link></div><span className="blog-row-arrow"><ArrowUpRight size={19}/></span></article>)}</div></div></section>
  </>;
}
