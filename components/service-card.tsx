import Link from "next/link";
import { ArrowUpRight, BarChart3, Code2, Mail, Palette, PenTool, Search, Share2, Target, Workflow } from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  search: Search, target: Target, share: Share2, code: Code2, pen: PenTool, palette: Palette, mail: Mail, chart: BarChart3, workflow: Workflow
};

export function ServiceCard({ service, compact = false }: { service: { slug: string; number: string; icon: string; title: string; short: string }; compact?: boolean }) {
  const Icon = iconMap[service.icon] || Workflow;
  return (
    <Link className={`service-card ${compact ? "service-card-compact" : ""}`} href={`/services/${service.slug}`}>
      <div className="service-card-head"><span className="service-icon"><Icon size={21} strokeWidth={1.8} /></span><span className="service-number">{service.number}</span></div>
      <h3>{service.title}</h3><p>{service.short}</p>
      <span className="card-link">Explore service <ArrowUpRight size={16} /></span>
    </Link>
  );
}
