import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { articles, siteName, siteUrl } from "@/lib/site";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.excerpt, alternates: { canonical: `/blog/${article.slug}` }, openGraph: { type: "article", title: article.title, description: article.excerpt, url: `/blog/${article.slug}`, publishedTime: `${article.date}T00:00:00Z` } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt, datePublished: article.date, dateModified: article.date, author: { "@type": "Organization", name: siteName }, publisher: { "@type": "Organization", name: siteName }, mainEntityOfPage: `${siteUrl}/blog/${article.slug}` };
  return <>
    <section className="article-hero"><div className="container article-hero-inner"><div className="breadcrumbs"><Link href="/">Home</Link><span>›</span><Link href="/blog">Insights</Link><span>›</span><span>{article.category}</span></div><div className="article-meta"><span>{article.category}</span><span><Clock3 size={14}/> {article.readTime}</span></div><h1>{article.title}</h1><p>{article.excerpt}</p><span className="article-edition">MILESTONE GROWTH NOTES · EDITION {String(articles.findIndex(a => a.slug === article.slug) + 1).padStart(2, "0")}</span></div></section>
    <section className="section article-section"><div className="container article-layout"><aside className="article-aside"><Link href="/blog" className="text-link"><ArrowLeft size={15}/> All guides</Link><div className="article-aside-note"><span className="eyebrow">KEEP IN MIND</span><p>Every business is different. Validate recommendations against your own site, data and objectives.</p></div><div className="article-aside-cta"><b>Need a hand with this?</b><Link href="/contact">Discuss your website <ArrowUpRight size={14}/></Link></div></aside><article className="article-body"><p className="article-intro">A practical checklist can help you avoid preventable issues and spend time on the work that matters. Start with these areas, document what you find, and revisit them as your site changes.</p>{article.paragraphs.map((part, i) => <section key={part.heading}><span className="article-section-no">0{i + 1}</span><h2>{part.heading}</h2><p>{part.body}</p></section>)}<div className="article-ending"><span className="eyebrow">NEXT STEP</span><h2>Turn the checklist into a plan.</h2><p>Prioritise the two or three changes most likely to improve your customer experience or measurement first.</p><Link href="/contact" className="button button-dark">Talk through your priorities <ArrowUpRight size={16}/></Link></div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}/></article></div></section>
    <section className="section article-related"><div className="container"><div className="section-head"><div><span className="eyebrow">KEEP LEARNING</span><h2>More useful notes.</h2></div><Link href="/blog" className="text-link">All articles <ArrowUpRight size={15}/></Link></div><div className="related-articles">{articles.filter((item) => item.slug !== article.slug).slice(0, 2).map((item) => <Link key={item.slug} href={`/blog/${item.slug}`}><span>{item.category}</span><h3>{item.title}</h3><ArrowUpRight size={17}/></Link>)}</div></div></section>
  </>;
}
