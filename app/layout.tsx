import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MaintenanceGate } from "@/components/maintenance-gate";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Milestone Agency | Digital Marketing & Web Growth", template: "%s | Milestone Agency" },
  description: "A modern digital growth agency for SEO, paid ads, social media, web development, content, branding and marketing automation.",
  applicationName: siteName,
  icons: { icon: "/logo.svg", shortcut: "/logo.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: "Milestone Agency | Digital Marketing & Web Growth",
    description: "Strategy, creativity and digital systems built around your business goals.",
    url: "/"
  },
  twitter: { card: "summary_large_image", title: "Milestone Agency | Digital Marketing & Web Growth", description: "Strategy, creativity and digital systems built around your business goals." },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#101114" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Organization", name: siteName, url: siteUrl, description: "Digital marketing, web development and creative services." };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <SiteHeader />
        <main>{children}</main>
        <MaintenanceGate />
        <SiteFooter />
      </body>
    </html>
  );
}
