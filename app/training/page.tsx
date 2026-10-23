import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, BrainCircuit, BarChart3, Code2, SearchCheck } from "lucide-react";

export const metadata: Metadata = { title: "Digital Skills Training", description: "Explore practical training topics in SEO, paid advertising, analytics, web fundamentals and AI-enabled workflows." };

const modules = [
  { icon: SearchCheck, title: "SEO & AI search fundamentals", text: "Understand site structure, search intent, on-page SEO, technical checks and content quality." },
  { icon: BarChart3, title: "Paid ads & measurement", text: "Learn campaign structure, audience and keyword choices, conversion tracking and reporting basics." },
  { icon: BookOpen, title: "Content & social media", text: "Plan useful content, build a calendar, improve briefs and repurpose ideas across channels." },
  { icon: Code2, title: "Website foundations", text: "Learn how websites work, core HTML/CSS concepts, responsive design and performance basics." },
  { icon: BrainCircuit, title: "AI & workflow productivity", text: "Explore responsible AI-assisted research, repeatable workflows, QA and human review." }
];

export default function TrainingPage() {
  return <>
    <section className="inner-hero"><div className="container inner-hero-grid"><div><span className="eyebrow"><span className="pulse-dot" /> LEARN BY DOING</span><h1>Build skills you<br /><span className="text-gradient">can put to work.</span></h1><p>Practical, plain-language learning for teams and individuals who want to understand digital marketing and modern web tools—not just collect another certificate.</p><div className="hero-actions"><Link href="/contact" className="button button-lime">Ask about a workshop <ArrowUpRight size={17}/></Link></div></div><div className="training-visual"><div className="training-orbit"><span className="training-center"><BrainCircuit size={30}/></span><span className="training-node node-one"><SearchCheck size={18}/></span><span className="training-node node-two"><Code2 size={18}/></span><span className="training-node node-three"><BarChart3 size={18}/></span><span className="training-node node-four"><BookOpen size={18}/></span></div><span className="training-visual-caption">LEARN → APPLY → REVIEW</span></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">POSSIBLE LEARNING TRACKS</span><h2>Useful topics.<br /><span className="text-muted">Real-world context.</span></h2></div><p className="process-intro">Workshop content, delivery format and learning outcomes should be agreed to match the participants&apos; starting point.</p></div><div className="training-modules">{modules.map((module, i) => { const Icon = module.icon; return <article key={module.title} className="training-module"><span className="training-module-number">0{i + 1}</span><span className="training-module-icon"><Icon size={22}/></span><div><h3>{module.title}</h3><p>{module.text}</p></div><ArrowUpRight size={17}/></article>; })}</div></div></section>
    <section className="section training-approach"><div className="container training-approach-grid"><div><span className="eyebrow eyebrow-light">OUR LEARNING APPROACH</span><h2>Simple enough to follow.<br /><span className="text-gradient">Useful enough to apply.</span></h2><p>We aim to break complex topics into understandable concepts, guided practice and a checklist participants can keep using after the session.</p></div><div className="training-steps"><div><b>01</b><span><strong>Set the level</strong><small>Align with current knowledge and goals.</small></span></div><div><b>02</b><span><strong>Learn the framework</strong><small>Explain concepts with practical examples.</small></span></div><div><b>03</b><span><strong>Apply and review</strong><small>Practice, discuss and identify next steps.</small></span></div></div></div></section>
  </>;
}
