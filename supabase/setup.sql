-- Run in Supabase SQL Editor. Tables use RLS; only users with app_metadata.role = 'admin' can read/manage content.
create extension if not exists pgcrypto;

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  website text,
  service text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text default '',
  content text default '',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text,
  slug text not null unique,
  description text default '',
  summary text default '',
  content text default '',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id integer primary key default 1 check (id = 1),
  maintenance_mode boolean not null default false,
  updated_at timestamptz not null default now()
);
insert into public.site_settings (id, maintenance_mode) values (1, false) on conflict (id) do nothing;

alter table public.inquiries enable row level security;
alter table public.blogs enable row level security;
alter table public.services enable row level security;
alter table public.site_settings enable row level security;

-- Helper condition is based on app_metadata, which users cannot edit themselves.
create policy "Admins manage inquiries" on public.inquiries for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "Admins manage blogs" on public.blogs for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "Admins manage services" on public.services for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "Admins manage site settings" on public.site_settings for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
create policy "Visitors can read maintenance setting" on public.site_settings for select to anon, authenticated using (true);

-- No anonymous insert/read policies on inquiries: inserts happen only through the server API using service role.
