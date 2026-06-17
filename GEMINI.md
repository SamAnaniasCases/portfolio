# Interactive Portfolio Website - Project Source of Truth

This document serves as the central source of truth for the Interactive Portfolio project. It outlines the architectural decisions, coding standards, design system tokens, and development roadmap.

---

## 1. Project Overview
A premium, modern, highly interactive, and professional portfolio website. It showcases skills, experience, projects, and blog posts using high-performance animations, serving as a personal branding hub.

## 2. Tech Stack Decisions
* **Frontend Framework:** Next.js 15 (App Router, React 19)
* **Programming Language:** TypeScript (strict mode enabled)
* **Styling:** Vanilla CSS Modules with root variables (zero-runtime overhead)
* **Animation Library:** Framer Motion (dynamic micro-interactions & layout animations)
* **Icons Library:** Phosphor Icons (100% free, flexible styles including Duotone, Thin, and Bold React components)
* **Typography & Fonts:** Inter (Google Fonts - body text), Array (Fontshare - H1 & display stats), Hoover (Fontshare - sub-headings)
* **Database & Services:** Supabase (PostgreSQL with Row-Level Security)
* **Authentication:** Supabase Auth (OAuth GitHub/LinkedIn & Email OTP)
* **Content Source (CMS):** Local MDX files (for project pages and blog posts)
* **Testing Suite:** Vitest (unit/integration testing) + Playwright (E2E visual/action testing)

---

## 3. Coding Standards
* **DRY Principle:** Duplicate logic (fetching, form parsing, animations) must be abstracted into centralized hooks (`src/hooks/`), utilities (`src/utils/`), or services (`src/lib/`).
* **TypeScript Rules:**
  * Use strict type checking. Avoid `any` at all costs.
  * Define shared domain models (e.g., `Project`, `BlogPost`, `Visitor`) inside `src/types/index.ts`.
  * Explicitly define return types for all helper functions and service APIs.
  * Handle edge cases (null, undefined, loading, error) at boundaries.
* **Styling Rules:**
  * Write modular styles using standard CSS Modules (`[name].module.css`).
  * Never hardcode spacing, colors, or fonts; use the design system CSS custom variables.
* **Performance & Accessibility:**
  * Implement dynamic imports (`next/dynamic`) for components containing large animation libraries (like Framer Motion) to keep initial bundle sizes low.
  * Ensure all images use `next/image` for layout shift prevention and modern formatting (WebP/AVIF).
  * Maintain WCAG AA compliance (proper aria labels, contrast ratios, and complete keyboard focus navigation).

---

## 4. Folder Structure Rules
All files must be organized within a feature-based structure to ensure high maintainability and clean separation of concerns:

```
src/
├── app/                  # Pages, Layouts, API Routes, Global Styles
│   ├── (auth)/           # Group: Login, OAuth Callback
│   ├── (dashboard)/      # Group: Admin Analytics and Project Manager Panel
│   ├── blog/             # Blog index & individual posts ([slug])
│   ├── projects/         # Project index & details ([id])
│   ├── api/              # Serverless API routes (e.g., feedback, logs)
│   ├── layout.tsx        # Main application shell wrapper
│   ├── page.tsx          # Interactive home page
│   └── globals.css       # Design system variable declaration
├── components/           # Reusable UI Controls (Presentational UI)
│   ├── ui/               # Atom components (button, input, badge, card)
│   ├── layout/           # Shared navigation (navbar, footer, sidebar)
│   └── feedback/         # Modals, loading skeletons, system toasts
├── features/             # Domain Features (Business logic & Feature sub-views)
│   ├── blog/             # MDX parsers, blog lists, blog hooks
│   ├── projects/         # Interactive grids, filters, portfolio details
│   ├── contact/          # Server Action contact handlers, form validation
│   └── analytics/        # Visitor loggers, chart renderers
├── hooks/                # Reusable React custom hooks (e.g. useTheme, useIntersection)
├── lib/                  # Core client configurations (supabase.ts, sentry.ts)
├── types/                # Central TypeScript declarations (index.ts)
└── utils/                # Pure mathematical or layout helpers (date.ts, classNames.ts)
```

---

## 5. Design System Tokens
All layout designs must use these CSS variables defined in [globals.css](file:///c:/Users/OJT/portfolio/src/app/globals.css):

### Color System
* **Primary (Deep Dark Purple):** `#22092C` (rgb(34, 9, 44))
* **Primary Dark Red:** `#872341` (rgb(135, 35, 65))
* **Primary Crimson:** `#BE3144` (rgb(190, 49, 68))
* **Primary Accent Coral:** `#F05941` (rgb(240, 89, 65))
* **Secondary Contrast Violet:** `#7F27FF` (rgb(127, 39, 255))

```css
/* Custom Properties mapping */
:root {
  /* Light Theme Specific */
  --bg-primary: #FAF8FC;
  --bg-surface: #FFFFFF;
  --bg-border: #E6DFEB;
  --text-primary: #22092C;
  --text-secondary: #5E4E68;
  --text-muted: #8F8198;
  --secondary-glow: rgba(240, 89, 65, 0.1);
  --btn-primary-hover: #D63A50;
  --btn-primary-active: #A32637;

  /* Global Functional Colors */
  --success: #0E9F6E;
  --success-bg: #E3FBE3;
  --warning: #D03801;
  --warning-bg: #FDF2E9;
  --error: #E02424;
  --error-bg: #FDF2F2;
  --focus-ring: 0 0 0 3px rgba(240, 89, 65, 0.4);
}

[data-theme="dark"] {
  /* Dark Theme Specific */
  --bg-primary: #0B040F; /* Sleek Dark Violet-Black */
  --bg-surface: #180D21; /* Soft Violet Surface Card */
  --bg-border: #2C1A36;
  --text-primary: #F3F0F5;
  --text-secondary: #D4CDDB;
  --text-muted: #8F8198;
  --secondary-glow: rgba(240, 89, 65, 0.25);
  --btn-primary-hover: #E04D36;
  --btn-primary-active: #BE3144;
}
```

### Responsive & Spacing Layout
* **Breakpoints:**
  * Mobile: `< 640px`
  * Tablet: `640px - 1023px` (`--bp-md: 768px`)
  * Laptop: `1024px - 1439px` (`--bp-lg: 1024px`)
  * Desktop: `>= 1440px` (`--bp-xl: 1280px`)
* **Spacing Scale (4px Base Grid):**
  * `--space-xs`: `0.25rem` (4px)
  * `--space-sm`: `0.5rem` (8px)
  * `--space-md`: `1rem` (16px)
  * `--space-lg`: `1.5rem` (24px)
  * `--space-xl`: `2rem` (32px)
  * `--space-2xl`: `3rem` (48px)
* **Typography & Fonts:**
  * `--font-sans`: `Inter` (Google Fonts, body text and interactive controls)
  * `--font-display`: `'Array'` (Fontshare dot-matrix display, H1 and stats stats numbers)
  * `--font-heading`: `'Hoover'` (Fontshare monolinear slab-serif, sub-headings H2-H6)
* **Typography Scale (Major Third):**
  * `--text-xs`: `0.8rem`
  * `--text-sm`: `0.875rem`
  * `--text-base`: `1rem`
  * `--text-lg`: `1.25rem`
  * `--text-xl`: `1.563rem`
  * `--text-2xl`: `1.953rem`
  * `--text-3xl`: `2.441rem`
  * `--text-4xl`: `3.052rem`
* **Border Radius:**
  * `--radius-sm`: `6px` (buttons, tags)
  * `--radius-md`: `12px` (cards, dialogs)
  * `--radius-lg`: `20px` (sections, modules)

---

## 6. Development Roadmap
1. **Phase 1 — Foundation:** Next.js project initialization with TypeScript, configuration of design tokens in `globals.css`, global navigation wrappers (navbar, footer, theme toggler), and responsive mock views for Hero, About, Skills, Projects, and Contact form.
2. **Phase 2 — Interactive Experience:** Integrated scroll-driven animations using Framer Motion, canvas/SVG micro-animations for backgrounds, responsive interactive timeline, and a category-filterable animated project grid.
3. **Phase 3 — Professional Features:** Parser setup for local blog MDX content, database deployment on Supabase, and Server Action implementation to record contact submissions and log visitor traffic safely.
4. **Phase 4 — Advanced Features:** NextAuth-secured dashboard to view analytics logs, project manager dashboard to write project records directly into Postgres, and custom AI chatbot assistant.

---

## 7. Change Log
* **2026-06-17:** Refined global scrollbar styling, aligning track, thumb, hover, and active states with Light & Dark themes.
* **2026-06-16:** Initial portfolio project architecture design system, roadmap, and TypeScript structure planning finalized.

---

## Appendix: Antigravity IDE Project Rules & Skills

This project is configured with the `agent-skills` package under `.gemini/skills/`.

### Active Skills

To utilize any of the skills in this project, you can instruct the Antigravity agent in your prompts to follow the relevant skill, or reference them using the `@` syntax (e.g., `@.gemini/skills/test-driven-development/SKILL.md`).

### Essential Workflow Skills:
- **Spec-Driven Development:** [.gemini/skills/spec-driven-development/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/spec-driven-development/SKILL.md)
- **Planning & Task Breakdown:** [.gemini/skills/planning-and-task-breakdown/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/planning-and-task-breakdown/SKILL.md)
- **Incremental Implementation:** [.gemini/skills/incremental-implementation/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/incremental-implementation/SKILL.md)
- **Test-Driven Development:** [.gemini/skills/test-driven-development/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/test-driven-development/SKILL.md)
- **Code Review & Quality:** [.gemini/skills/code-review-and-quality/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/code-review-and-quality/SKILL.md)
- **Impeccable Design:** [.gemini/skills/impeccable/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/SKILL.md) (UX/UI design guidance, steering commands, and anti-patterns)

### Complete Skills Directory:

#### 🧭 Meta & Discovery
- **Discover Skills:** [.gemini/skills/using-agent-skills/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/using-agent-skills/SKILL.md)

#### 📝 Define Phase
- **Interview Me:** [.gemini/skills/interview-me/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/interview-me/SKILL.md)
- **Idea Refinement:** [.gemini/skills/idea-refine/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/idea-refine/SKILL.md)
- **Spec-Driven Development:** [.gemini/skills/spec-driven-development/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/spec-driven-development/SKILL.md)

#### 🗺️ Plan Phase
- **Planning & Task Breakdown:** [.gemini/skills/planning-and-task-breakdown/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/planning-and-task-breakdown/SKILL.md)

#### 💻 Build Phase
- **Incremental Implementation:** [.gemini/skills/incremental-implementation/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/incremental-implementation/SKILL.md)
- **Test-Driven Development:** [.gemini/skills/test-driven-development/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/test-driven-development/SKILL.md)
- **Context Engineering:** [.gemini/skills/context-engineering/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/context-engineering/SKILL.md)
- **Source-Driven Development:** [.gemini/skills/source-driven-development/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/source-driven-development/SKILL.md)
- **Doubt-Driven Development:** [.gemini/skills/doubt-driven-development/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/doubt-driven-development/SKILL.md)
- **Frontend UI Engineering:** [.gemini/skills/frontend-ui-engineering/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/frontend-ui-engineering/SKILL.md)
- **API & Interface Design:** [.gemini/skills/api-and-interface-design/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/api-and-interface-design/SKILL.md)

#### 🎨 Design & Polish
- **Impeccable Design:** [.gemini/skills/impeccable/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/SKILL.md)
  - **init:** [.gemini/skills/impeccable/reference/init.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/init.md)
  - **craft:** [.gemini/skills/impeccable/reference/craft.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/craft.md)
  - **shape:** [.gemini/skills/impeccable/reference/shape.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/shape.md)
  - **critique:** [.gemini/skills/impeccable/reference/critique.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/critique.md)
  - **audit:** [.gemini/skills/impeccable/reference/audit.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/audit.md)
  - **polish:** [.gemini/skills/impeccable/reference/polish.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/polish.md)
  - **bolder:** [.gemini/skills/impeccable/reference/bolder.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/bolder.md)
  - **quieter:** [.gemini/skills/impeccable/reference/quieter.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/quieter.md)
  - **distill:** [.gemini/skills/impeccable/reference/distill.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/distill.md)
  - **harden:** [.gemini/skills/impeccable/reference/harden.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/harden.md)
  - **onboard:** [.gemini/skills/impeccable/reference/onboard.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/onboard.md)
  - **animate:** [.gemini/skills/impeccable/reference/animate.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/animate.md)
  - **colorize:** [.gemini/skills/impeccable/reference/colorize.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/colorize.md)
  - **typeset:** [.gemini/skills/impeccable/reference/typeset.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/typeset.md)
  - **layout:** [.gemini/skills/impeccable/reference/layout.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/layout.md)
  - **delight:** [.gemini/skills/impeccable/reference/delight.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/delight.md)
  - **overdrive:** [.gemini/skills/impeccable/reference/overdrive.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/overdrive.md)
  - **clarify:** [.gemini/skills/impeccable/reference/clarify.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/clarify.md)
  - **adapt:** [.gemini/skills/impeccable/reference/adapt.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/adapt.md)
  - **optimize:** [.gemini/skills/impeccable/reference/optimize.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/optimize.md)
  - **live:** [.gemini/skills/impeccable/reference/live.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/live.md)
  - **document:** [.gemini/skills/impeccable/reference/document.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/document.md)
  - **extract:** [.gemini/skills/impeccable/reference/extract.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/extract.md)
  - **brand:** [.gemini/skills/impeccable/reference/brand.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/brand.md)
  - **product:** [.gemini/skills/impeccable/reference/product.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/product.md)
  - **codex:** [.gemini/skills/impeccable/reference/codex.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/codex.md)
  - **interaction-design:** [.gemini/skills/impeccable/reference/interaction-design.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/interaction-design.md)

#### 🧪 Verify Phase
- **Browser Testing with DevTools:** [.gemini/skills/browser-testing-with-devtools/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/browser-testing-with-devtools/SKILL.md)
- **Debugging & Error Recovery:** [.gemini/skills/debugging-and-error-recovery/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/debugging-and-error-recovery/SKILL.md)

#### 🔍 Review Phase
- **Code Review & Quality:** [.gemini/skills/code-review-and-quality/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/code-review-and-quality/SKILL.md)
- **Code Simplification:** [.gemini/skills/code-simplification/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/code-simplification/SKILL.md)
- **Security & Hardening:** [.gemini/skills/security-and-hardening/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/security-and-hardening/SKILL.md)
- **Performance Optimization:** [.gemini/skills/performance-optimization/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/performance-optimization/SKILL.md)

#### 🚀 Ship Phase
- **Git Workflow & Versioning:** [.gemini/skills/git-workflow-and-versioning/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/git-workflow-and-versioning/SKILL.md)
- **CI/CD & Automation:** [.gemini/skills/ci-cd-and-automation/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/ci-cd-and-automation/SKILL.md)
- **Deprecation & Migration:** [.gemini/skills/deprecation-and-migration/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/deprecation-and-migration/SKILL.md)
- **Documentation & ADRs:** [.gemini/skills/documentation-and-adrs/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/documentation-and-adrs/SKILL.md)
- **Observability & Telemetry:** [.gemini/skills/observability-and-instrumentation/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/observability-and-instrumentation/SKILL.md)
- **Shipping & Launch:** [.gemini/skills/shipping-and-launch/SKILL.md](file:///c:/Users/OJT/portfolio/.gemini/skills/shipping-and-launch/SKILL.md)

### Specialist Personas:
- **Code Reviewer Persona:** [.gemini/agents/code-reviewer.md](file:///c:/Users/OJT/portfolio/.gemini/agents/code-reviewer.md)
- **Test Engineer Persona:** [.gemini/agents/test-engineer.md](file:///c:/Users/OJT/portfolio/.gemini/agents/test-engineer.md)
- **Security Auditor Persona:** [.gemini/agents/security-auditor.md](file:///c:/Users/OJT/portfolio/.gemini/agents/security-auditor.md)
- **Web Performance Auditor Persona:** [.gemini/agents/web-performance-auditor.md](file:///c:/Users/OJT/portfolio/.gemini/agents/web-performance-auditor.md)

### Reference Checklists:
- **Testing Patterns:** [.gemini/references/testing-patterns.md](file:///c:/Users/OJT/portfolio/.gemini/references/testing-patterns.md)
- **Security Checklist:** [.gemini/references/security-checklist.md](file:///c:/Users/OJT/portfolio/.gemini/references/security-checklist.md)
- **Performance Checklist:** [.gemini/references/performance-checklist.md](file:///c:/Users/OJT/portfolio/.gemini/references/performance-checklist.md)
- **Accessibility Checklist:** [.gemini/references/accessibility-checklist.md](file:///c:/Users/OJT/portfolio/.gemini/references/accessibility-checklist.md)
- **Orchestration Patterns:** [.gemini/references/orchestration-patterns.md](file:///c:/Users/OJT/portfolio/.gemini/references/orchestration-patterns.md)
