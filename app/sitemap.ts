import type { MetadataRoute } from "next";
import { articles, services, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/pricing", "/blog", "/training", "/contact", "/privacy", "/terms"];
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route || "/"}`, lastModified: now, changeFrequency: route === "/blog" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7 })),
    ...services.map((service) => ({ url: `${siteUrl}/services/${service.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...articles.map((article) => ({ url: `${siteUrl}/blog/${article.slug}`, lastModified: new Date(article.date), changeFrequency: "yearly" as const, priority: 0.6 }))
  ];
}
