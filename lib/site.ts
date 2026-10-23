export const siteName = "Milestone Agency";
export const siteTagline = "Strategy. Creativity. Measurable growth.";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");

export const services = [
  {
    slug: "search-engine-optimization",
    number: "01",
    icon: "search",
    title: "Search Engine Optimization",
    short: "Technical SEO, on-page improvements and content built around the way people search.",
    details: ["Technical SEO audits", "Keyword and intent research", "On-page SEO", "Local SEO & Google Business Profile", "E-commerce SEO", "AEO / AI search readiness"]
  },
  {
    slug: "paid-ads",
    number: "02",
    icon: "target",
    title: "Google & Meta Ads",
    short: "Campaigns that focus on qualified enquiries, clear measurement and smart budget use.",
    details: ["Google Search & Performance Max", "Meta Ads for Facebook and Instagram", "Audience and keyword research", "Landing-page recommendations", "Conversion tracking plan", "Campaign reporting"]
  },
  {
    slug: "social-media-marketing",
    number: "03",
    icon: "share",
    title: "Social Media Marketing",
    short: "A consistent social presence with platform-aware content and community management.",
    details: ["Content calendars", "Creative direction and captions", "Reels and short-form concepts", "Profile optimisation", "Community management", "Monthly performance reviews"]
  },
  {
    slug: "web-design-development",
    number: "04",
    icon: "code",
    title: "Web Design & Development",
    short: "Responsive websites that load quickly, communicate clearly and guide visitors to act.",
    details: ["Mobile-first UI/UX", "Business and service websites", "Landing pages", "E-commerce builds", "Accessibility and performance basics", "Maintenance and iteration"]
  },
  {
    slug: "content-marketing",
    number: "05",
    icon: "pen",
    title: "Content Marketing",
    short: "Useful content designed to answer real customer questions and support organic visibility.",
    details: ["SEO blog strategy", "Service and landing-page copy", "Content refreshes", "Topic clusters", "Creative briefs", "Editorial calendars"]
  },
  {
    slug: "branding-creative",
    number: "06",
    icon: "palette",
    title: "Branding & Creative",
    short: "A recognisable visual system across your website, social channels and campaigns.",
    details: ["Logo and visual direction", "Brand colours and typography", "Social media templates", "Ad creatives", "Presentation and marketing assets", "Creative consistency guidelines"]
  },
  {
    slug: "email-whatsapp-marketing",
    number: "07",
    icon: "mail",
    title: "Email & WhatsApp Marketing",
    short: "Helpful customer journeys for follow-ups, retention and repeat business.",
    details: ["Newsletter planning", "Lead follow-up journeys", "Abandoned enquiry workflows", "Customer segmentation", "WhatsApp campaign planning", "Consent-aware messaging"]
  },
  {
    slug: "analytics-automation",
    number: "08",
    icon: "chart",
    title: "Analytics, AI & Automation",
    short: "Clear reporting and practical automation to reduce repetitive work and improve decisions.",
    details: ["GA4 and Search Console setup planning", "Conversion measurement", "Looker Studio dashboards", "CRM workflow automation", "AI-assisted workflow design", "Reporting and insight reviews"]
  }
];

export const articles = [
  {
    slug: "seo-checklist-for-a-new-business-website",
    category: "SEO BASICS",
    readTime: "6 min read",
    title: "A practical SEO checklist for a new business website",
    excerpt: "The first technical, content and measurement checks to complete before you focus on rankings.",
    date: "2026-10-22",
    paragraphs: [
      { heading: "Start with access and indexing", body: "Set up Google Search Console and an analytics property, verify the right domain, and confirm that important pages can be crawled. Check your robots.txt and sitemap, and make sure test or private pages are not accidentally indexable." },
      { heading: "Give every page a clear purpose", body: "Map each important service to a useful page. Write a specific title and description, use one clear H1, add descriptive internal links, and answer the questions customers actually ask. Avoid creating near-duplicate pages just to target tiny keyword variations." },
      { heading: "Check mobile experience and speed", body: "Review pages on a real phone as well as a desktop. Compress oversized images, avoid unnecessary scripts, make buttons easy to tap, and test Core Web Vitals. A visually attractive redesign can still harm search performance if URLs, content, internal links or rendering change unexpectedly." },
      { heading: "Measure enquiries, not only visits", body: "Set up conversion events for meaningful actions such as form submissions, phone clicks and qualified booking requests. Use a simple monthly report that connects traffic changes with leads and business outcomes." }
    ]
  },
  {
    slug: "what-to-check-after-a-website-redesign",
    category: "TECHNICAL SEO",
    readTime: "5 min read",
    title: "What should you check after a website redesign?",
    excerpt: "A quick post-launch checklist to catch broken URLs, missing content and measurement issues.",
    date: "2026-10-22",
    paragraphs: [
      { heading: "Compare old and new URLs", body: "Create a crawl of the old website before a redesign and compare it with the new site. If URLs have changed, map each valuable old URL to the closest relevant new page with a permanent redirect. Avoid sending every removed page to the homepage." },
      { heading: "Inspect page content and metadata", body: "Confirm that titles, meta descriptions, headings, canonical tags, image alt text and internal links were carried over where appropriate. Check that important service copy was not shortened or hidden behind interactions that search engines cannot easily access." },
      { heading: "Verify technical signals", body: "Inspect robots directives, XML sitemap, status codes, canonical URLs and structured data. Use Search Console to watch indexing and crawl errors. Rankings can fluctuate after major changes, but a sharp drop should be investigated rather than assumed to be normal." },
      { heading: "Test analytics and leads", body: "Send test enquiries on mobile and desktop. Check thank-you states, confirmation emails, phone links, analytics events and any CRM connection. A website may look correct while its lead capture or reporting is broken." }
    ]
  },
  {
    slug: "seo-vs-paid-ads-where-to-start",
    category: "GROWTH STRATEGY",
    readTime: "4 min read",
    title: "SEO vs paid ads: where should a small business start?",
    excerpt: "Choose a starting point based on urgency, budget, customer intent and your ability to follow up.",
    date: "2026-10-22",
    paragraphs: [
      { heading: "When paid ads can help", body: "Paid search can put a relevant offer in front of people who are actively looking, provided the landing page, budget and conversion tracking are ready. Test with a defined budget and success metric; do not scale just because impressions or clicks increase." },
      { heading: "What SEO is good at", body: "SEO helps build discoverability across service pages, local results and useful content. It usually takes consistent work and cannot promise a specific ranking date. The work also improves site structure and helps customers understand the offer." },
      { heading: "Make the decision measurable", body: "Start with the business goal: calls, quote requests, bookings or online sales. Make sure somebody can respond to the leads. Track lead quality and cost alongside traffic, and use the results to decide what deserves more investment." }
    ]
  }
];
