# Milestone Agency — Digital Growth Website

A responsive multi-page digital marketing agency website starter inspired by the information architecture of the supplied reference (services, portfolio, pricing, insights, training and contact) but with original branding and layout.

## Stack

- Next.js 16 App Router + React 19
- TypeScript
- Responsive custom CSS (no heavy UI framework)
- Next metadata APIs, dynamic `sitemap.xml` and `robots.txt`
- JSON-LD Organization and Article structured data
- Contact form API route with server-side validation and a honeypot field
- Resend email API integration (requires environment variables)
- Baseline HTTP security headers

## Run locally (Windows)

1. Install **Node.js 20.9 or newer** from https://nodejs.org/.
2. Extract the ZIP and open this folder in VS Code.
3. Open Terminal → New Terminal, then run:

   ```bash
   npm install
   copy .env.example .env.local
   npm run dev
   ```

4. Open http://localhost:3000.
5. To create a production build, run `npm run build`, then `npm run start`.

## Before publishing — replace the sample values

1. **Brand:** `Milestone Agency` is an editable placeholder. Update it in `lib/site.ts`, `app/layout.tsx`, header/footer and any JSON-LD text if you settle on a different agency name.
2. **Domain:** set `NEXT_PUBLIC_SITE_URL` to your real HTTPS domain in the hosting environment. It controls canonical metadata, `sitemap.xml`, `robots.txt` and article schema.
3. **Contact details:** replace `hello@yourdomain.com` in `components/site-header.tsx`, `components/site-footer.tsx`, `app/contact/page.tsx` and `app/page.tsx` where applicable.
4. **Contact form delivery:** create a Resend account, verify a sender domain, then add `RESEND_API_KEY`, `LEADS_TO_EMAIL` and `LEADS_FROM_EMAIL` as deployment environment variables. `.env.example` is only a template. Never commit real API secrets.
5. **Portfolio:** the work cards are explicitly labelled concept examples. Replace them with approved projects, accurate descriptions and verified results—do not publish illustrative metrics as real case studies.
6. **Legal/privacy:** add a real privacy policy, cookie/analytics disclosure and business contact/address details appropriate to your operation. The footer legal links should be connected to the final policy pages before launch.
7. **Measurement:** configure Google Search Console, GA4 and conversion events only after consent/privacy requirements for your audience have been reviewed.

## Deployment and traffic scaling

A practical deployment path is Vercel for the Next.js app, or another provider that supports the Next.js Node.js runtime. Put static media behind a CDN, cache public assets, use an external managed database only if/when the site needs one, and keep third-party scripts to a minimum. Next.js alone does not guarantee capacity for arbitrary traffic; expected load, dynamic endpoints, email provider limits, caching, rate limiting and monitoring must be tested and configured for the chosen host.

For a high-traffic launch, add a durable rate limiter/WAF in front of `/api/contact`, bot protection if necessary, uptime and error monitoring, backups for any future database, and load tests based on realistic concurrent visitors. This starter intentionally does not pretend that in-memory rate limiting or the front-end alone is enough.

## Important notes

- `https://example.com` is only a development fallback for metadata; configure your production URL.
- The contact form returns a clear setup message until Resend environment variables are configured; it will not silently pretend a lead was delivered.
- No client logos, testimonials, rankings, performance scores or case study results have been fabricated.
- Keep dependencies updated and run a production build and accessibility/performance checks before launch.


## Supabase setup (Admin, enquiries, blog, services, maintenance)

1. Create a project at https://supabase.com and open **Project Settings → API**. Copy the Project URL and publishable/anon key into `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Copy the **service_role** key to `SUPABASE_SERVICE_ROLE_KEY` only for local/server deployment; never expose it in a `NEXT_PUBLIC_` variable or commit `.env.local`.
2. In Supabase **SQL Editor**, run the full script in `supabase/setup.sql`.
3. In **Authentication → Users**, create your own admin user. Open that user in the user details view and set `app_metadata` to `{"role":"admin"}` (not user-editable metadata). Disable public signups under Authentication settings. Sign in at `/admin`.
4. Configure the Resend values in `.env.local` to enable email notifications. Supabase saves enquiries independently; email delivery needs valid Resend credentials and a verified sender/domain.
5. Restart `npm.cmd run dev` after editing `.env.local`.

### Important notes
- The dashboard includes enquiry viewing, blog CRUD, service CRUD and a maintenance-mode switch. Existing public service/blog pages still use the starter content in `lib/site.ts` and the current static article files; connecting those public pages to the database is a separate content migration step. New admin entries are stored in Supabase.
- Admin table policies require `app_metadata.role = admin`. Never use the service-role key in browser code. The contact API is the only server-side place where that secret is used.
- Maintenance mode is a visitor-facing gate in the site UI, while admins can preview the site. Before production launch, add server-side middleware/proxy enforcement, monitoring, rate limiting and load testing; a client-side gate alone is not an access-control boundary.
- Replace `hello@yourdomain.com`, the site URL, brand details and all example project/case-study claims before publishing.

## Futuristic interactive services

The homepage services section uses Matter.js physics. Visitors can drag and throw service cards inside the bounded field; selecting a card opens its service page. The section respects `prefers-reduced-motion` and falls back to a normal responsive card grid when reduced motion is enabled.

### Install and run on Windows PowerShell

1. Open this project folder in VS Code (the folder that contains `package.json`).
2. Open **Terminal → New Terminal**.
3. Install dependencies, including Matter.js:

   ```powershell
   npm.cmd install
   ```

4. Create `.env.local` from `.env.example` if you have not already done so, and fill in your own Supabase settings.
5. Start the development server:

   ```powershell
   npm.cmd run dev
   ```

6. Open `http://localhost:3000`. The admin panel is at `http://localhost:3000/admin`.

If PowerShell says `package.json` cannot be found, the terminal is in the wrong folder. Run `cd D:\web1\milestone-agency` only if that is where you extracted this project; otherwise use the actual folder path that contains `package.json`.

To create a production build, run `npm.cmd run build` after installation. Keep `.env.local` private and never put a Supabase service-role key in a `NEXT_PUBLIC_` variable.
