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
Scaffold the portfolio in the root workspace using **Next.js 15 (App Router, React 19)**, **TypeScript**, **CSS Modules** for isolated styling, **Framer Motion** for animations, and **Supabase** (PostgreSQL) for remote database storage and user authentication.

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

---

## Consequences
* **Prerender Boundaries:** Interactivity (like forms or clicks) must be isolated into `"use client"` components to prevent Next.js static prerendering errors.
* **Style Discipline:** All layout paddings, margins, and typography sizes must bind to the `--space-` and `--text-` CSS variables defined in `globals.css`.
* **Type Safety:** Data structures (Projects, Messages, BlogPosts) must map to TypeScript interfaces inside `src/types/index.ts` to ensure consistency.
* **Zero DB Dev Ops:** Supabase handles PostgreSQL hosting, OAuth authentication endpoints, and Row-Level Security (RLS) policies automatically.
