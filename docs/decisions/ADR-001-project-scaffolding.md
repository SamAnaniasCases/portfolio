# ADR-001: Next.js, TypeScript, and Supabase for Interactive Portfolio

## Status
Accepted

## Date
2026-06-17

## Context
We need to establish the foundational architecture for a personal portfolio website. The key requirements are:
* **Visual Excellence & Interactivity:** Fluid animations and responsive rendering across devices.
* **Performance & SEO:** High search engine discoverability and fast page load metrics (Core Web Vitals).
* **Extensibility:** The system must scale to support forms, local blog posts, visitor tracking logs, and a secure admin/project management portal.
* **Maintainability:** Standardized typescript structures, clean separation of concerns, and vanilla styling constraints.

---

## Decision
Scaffold the portfolio in the root workspace using **Next.js 15 (App Router, React 19)**, **TypeScript**, **CSS Modules** for isolated styling, **Framer Motion** for animations, **Supabase** (PostgreSQL) for remote database storage/auth, and **Phosphor Icons** as the graphic system.

For typography, we establish a "Cyber-Tech Terminal" theme using **Inter** (Google Fonts) for body copy, paired with **Array** (Fontshare) for display/stats, and **Hoover** (Fontshare) for sub-headings.

---

## Alternatives Considered

### 1. Single Page Application (Vite + React SPA)
* **Pros:** Fast build speed, simpler server configuration, lightweight.
* **Cons:** Client-side rendering is suboptimal for SEO indexing. Requires managing a separate Node/Express backend or serverless functions to handle secure database writing (contact forms, analytics logs).
* **Rejected:** Next.js provides hybrid SSR/Static generation out of the box alongside Serverless API routes and Actions, simplifying the full-stack architecture.

### 2. Tailwind CSS
* **Pros:** Rapid layout design using utility classes.
* **Cons:** Generates cluttered HTML class lists, can conflict with vanilla styling goals, and deviates from the project guideline prioritizing Vanilla CSS Modules.
* **Rejected:** CSS Modules with root design variables in `globals.css` provide maximum control, zero styling runtime overhead, and a clean separation of concerns.

### 3. MongoDB (NoSQL)
* **Pros:** Dynamic schemas, fast JSON document insertions.
* **Cons:** Lack of relational consistency, making structured tables (Projects ↔ Skills ↔ Experience) harder to query without manual joins.
* **Rejected:** Relational Postgres via Supabase is safer and allows powerful aggregation queries for the admin analytics dashboard.

### 4. Lucide Icons
* **Pros:** Standard, lightweight, highly optimized for React.
* **Cons:** Limited weights and style variety (only regular outline).
* **Rejected:** Phosphor Icons provides 6 weights (including Duotone, Thin, and Bold) that align better with a premium, custom visual theme.

### 5. Unified Google Fonts (e.g., Outfit Only)
* **Pros:** Native Next.js font hosting, simple.
* **Cons:** Standard geometric sans-serif fonts lack the distinct retro-digital and mechanical character we want.
* **Rejected:** Pairing Inter with Fontshare's Array (dot-matrix) and Hoover (monolinear blocky slab) yields an incredibly unique developer-centric aesthetic.

---

## Consequences
* **Prerender Boundaries:** Interactivity (like forms or clicks) must be isolated into `"use client"` components. This includes components importing Phosphor Icons, as they use React Context under the hood.
* **Style Discipline:** All layout paddings, margins, and typography sizes must bind to the `--space-` and `--text-` CSS variables defined in `globals.css`.
* **Type Safety:** Data structures (Projects, Messages, BlogPosts) must map to TypeScript interfaces inside `src/types/index.ts` to ensure consistency.
* **Zero DB Dev Ops:** Supabase handles PostgreSQL hosting, OAuth authentication endpoints, and Row-Level Security (RLS) policies automatically.
