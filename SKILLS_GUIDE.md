# Agent Skills Directory & Prompting Guide

This guide lists all **25 engineering and design skills** available in this workspace. Each skill is mapped to its file, its purpose, when it should be used, and a prompting template you can copy-paste to instruct the AI agent to follow it.

---

## 🧭 Meta & Discovery

### Discover Skills
* **Path:** [using-agent-skills](file:///c:/Users/OJT/portfolio/.gemini/skills/using-agent-skills/SKILL.md)
* **What it is:** Governing flowchart and guidelines for picking and routing development tasks.
* **When to use:** At the start of a session or when you are unsure which skill/workflow applies to a task.
* **Prompt Example:**
  > *"Analyze my current task and route it using `@.gemini/skills/using-agent-skills/SKILL.md`."*

---

## 📝 Define Phase (Clarify What to Build)

### Interview Me
* **Path:** [interview-me](file:///c:/Users/OJT/portfolio/.gemini/skills/interview-me/SKILL.md)
* **What it is:** A one-question-at-a-time interview designed to clarify and extract exact user requirements.
* **When to use:** The task description is brief, ambiguous, or lacks design/technical constraints.
* **Prompt Example:**
  > *"Grill me on my feature idea using the `@.gemini/skills/interview-me/SKILL.md` process."*

### Idea Refinement
* **Path:** [idea-refine](file:///c:/Users/OJT/portfolio/.gemini/skills/idea-refine/SKILL.md)
* **What it is:** A workflow for divergent (brainstorming variants) and convergent (selecting constraints) refinement of ideas.
* **When to use:** You have a rough concept and want to explore architectural options or design directions.
* **Prompt Example:**
  > *"Let's explore alternatives and refine this architecture using `@.gemini/skills/idea-refine/SKILL.md`."*

### Spec-Driven Development
* **Path:** [spec-driven-development](file:///c:/Users/OJT/portfolio/.gemini/skills/spec-driven-development/SKILL.md)
* **What it is:** The process of creating a formal Product Requirements Document (PRD) or spec before editing code.
* **When to use:** Starting a new feature, a new project, or making significant changes to an existing service.
* **Prompt Example:**
  > *"Write a complete specification for this checkout system following `@.gemini/skills/spec-driven-development/SKILL.md`."*

---

## 🗺️ Plan Phase (Break It Down)

### Planning & Task Breakdown
* **Path:** [planning-and-task-breakdown](file:///c:/Users/OJT/portfolio/.gemini/skills/planning-and-task-breakdown/SKILL.md)
* **What it is:** Decomposing specifications into small, dependency-ordered tasks with clear acceptance criteria.
* **When to use:** You have a design spec and are ready to create a checklist to guide execution.
* **Prompt Example:**
  > *"Break down my approved spec into tasks and generate a `task.md` checklist using `@.gemini/skills/planning-and-task-breakdown/SKILL.md`."*

---

## 💻 Build Phase (Write the Code)

### Incremental Implementation
* **Path:** [incremental-implementation](file:///c:/Users/OJT/portfolio/.gemini/skills/incremental-implementation/SKILL.md)
* **What it is:** Implementing features in safe, atomic vertical slices, committing each step, and using safe defaults.
* **When to use:** Fulfilling tasks on your checklist that span multiple files or components.
* **Prompt Example:**
  > *"Implement the checkout logic in thin vertical slices following `@.gemini/skills/incremental-implementation/SKILL.md`."*

### Test-Driven Development
* **Path:** [test-driven-development](file:///c:/Users/OJT/portfolio/.gemini/skills/test-driven-development/SKILL.md)
* **What it is:** Red-Green-Refactor loop, test pyramid design, and the Beyonce Rule ("if you liked it, you should have put a test on it").
* **When to use:** Writing or refactoring business logic, utility helpers, endpoints, and fixing bugs.
* **Prompt Example:**
  > *"Fix the session timeout bug using the TDD workflow in `@.gemini/skills/test-driven-development/SKILL.md`."*

### Context Engineering
* **Path:** [context-engineering](file:///c:/Users/OJT/portfolio/.gemini/skills/context-engineering/SKILL.md)
* **What it is:** Best practices for supplying rules, context, and directory references efficiently to keep prompt context clean.
* **When to use:** Starting a new task, setting up a subagent, or experiencing a decrease in code quality.
* **Prompt Example:**
  > *"Review my current workspace context and optimize it following `@.gemini/skills/context-engineering/SKILL.md`."*

### Source-Driven Development
* **Path:** [source-driven-development](file:///c:/Users/OJT/portfolio/.gemini/skills/source-driven-development/SKILL.md)
* **What it is:** Resolving framework patterns and API calls by citing official documentation, preventing hallucinated libraries.
* **When to use:** Writing code for unfamiliar libraries, external APIs, or frameworks (e.g. Next.js, Astro, Tailwind).
* **Prompt Example:**
  > *"Implement this integration. Verify and cite the official docs following `@.gemini/skills/source-driven-development/SKILL.md`."*

### Doubt-Driven Development
* **Path:** [doubt-driven-development](file:///c:/Users/OJT/portfolio/.gemini/skills/doubt-driven-development/SKILL.md)
* **What it is:** Adversarial verification of decisions (Claim → Extract → Doubt → Reconcile → Stop).
* **When to use:** Working in high-stakes environments, refactoring critical core code, or handling complex logic.
* **Prompt Example:**
  > *"Review this database migration using the doubt-driven development method in `@.gemini/skills/doubt-driven-development/SKILL.md`."*

### Frontend UI Engineering
* **Path:** [frontend-ui-engineering](file:///c:/Users/OJT/portfolio/.gemini/skills/frontend-ui-engineering/SKILL.md)
* **What it is:** Guidelines for component structure, clean visual styles, responsive design, and WCAG AA accessibility.
* **When to use:** Creating user interfaces, custom widgets, layouts, and web views.
* **Prompt Example:**
  > *"Implement the responsive styling for this modal following `@.gemini/skills/frontend-ui-engineering/SKILL.md`."*

### API & Interface Design
* **Path:** [api-and-interface-design](file:///c:/Users/OJT/portfolio/.gemini/skills/api-and-interface-design/SKILL.md)
* **What it is:** Contract-first API design, Hyrum's Law mitigation, backward compatibility, and error semantics.
* **When to use:** Designing public interfaces, module endpoints, exports, or data schemas.
* **Prompt Example:**
  > *"Design the interfaces for the payment service contract using `@.gemini/skills/api-and-interface-design/SKILL.md`."*

---

## 🎨 Design & Polish (Aesthetics & UX)

### Impeccable Design
* **Path:** [impeccable](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/SKILL.md)
* **What it is:** Standard design steering vocabulary (commands like `/polish`, `/bolder`, `/distill`, `/animate`) and frontend anti-pattern filters (no cards-in-cards, no default fonts).
* **When to use:** Styling components, reviewing visual layouts, auditing UI contrast, and refining user experience.
* **Prompt Example:**
  > *"Critique and polish this dashboard UI using the rules in `@.gemini/skills/impeccable/SKILL.md`."*

#### 🎨 Impeccable Design Reference Guides:
You can reference these specific sub-guides in your prompts when focusing on particular styling elements:
* **[init.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/init.md)** — Initialize project-specific design targets (writes `PRODUCT.md` and `DESIGN.md`).
  * *Prompt Example:* `"Set up design goals for this app using `@.gemini/skills/impeccable/reference/init.md`."*
* **[craft.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/craft.md)** — The full end-to-end design craft process.
  * *Prompt Example:* `"Develop a new settings page from scratch following `@.gemini/skills/impeccable/reference/craft.md`."*
* **[shape.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/shape.md)** — Outlining layout structures and visual hierarchies before coding.
  * *Prompt Example:* `"Plan the landing page structure using `@.gemini/skills/impeccable/reference/shape.md`."*
* **[critique.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/critique.md)** — Visual design reviews and critiques.
  * *Prompt Example:* `"Run a design critique on this form using `@.gemini/skills/impeccable/reference/critique.md`."*
* **[audit.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/audit.md)** — Visual alignment and technical design system compliance audits.
  * *Prompt Example:* `"Audit this layout for design consistency following `@.gemini/skills/impeccable/reference/audit.md`."*
* **[polish.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/polish.md)** — Final visual polish pass (border radius harmony, subtle shadows, perfect margins).
  * *Prompt Example:* `"Apply a final visual polish pass to this widget using `@.gemini/skills/impeccable/reference/polish.md`."*
* **[bolder.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/bolder.md)** — Amplifying boring, generic designs with strong accents and layouts.
  * *Prompt Example:* `"Make this header layout bolder following `@.gemini/skills/impeccable/reference/bolder.md`."*
* **[quieter.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/quieter.md)** — Softening harsh contrasts and reducing visual clutter.
  * *Prompt Example:* `"Tone down the styling of this alert using `@.gemini/skills/impeccable/reference/quieter.md`."*
* **[distill.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/distill.md)** — Stripping layout elements down to their essential, clean purpose.
  * *Prompt Example:* `"Simplify this complex container layout using `@.gemini/skills/impeccable/reference/distill.md`."*
* **[harden.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/harden.md)** — Handling boundary text flows, error states, and responsive edge cases.
  * *Prompt Example:* `"Add text-overflow safety to this profile card using `@.gemini/skills/impeccable/reference/harden.md`."*
* **[onboard.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/onboard.md)** — Designing clear user onboarding flows and empty states.
  * *Prompt Example:* `"Design an empty-state screen for this list using `@.gemini/skills/impeccable/reference/onboard.md`."*
* **[animate.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/animate.md)** — Designing purposeful UI motion and transitions (no bounce curves).
  * *Prompt Example:* `"Add a fade-in animation to this modal following `@.gemini/skills/impeccable/reference/animate.md`."*
* **[colorize.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/colorize.md)** — Color schemes, contrast constraints, and HSL/OKLCH themes.
  * *Prompt Example:* `"Adjust the color contrast here following `@.gemini/skills/impeccable/reference/colorize.md`."*
* **[typeset.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/typeset.md)** — Font pairings, typesetting, font size rhythm, and line heights.
  * *Prompt Example:* `"Fix the font hierarchy here following `@.gemini/skills/impeccable/reference/typeset.md`."*
* **[layout.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/layout.md)** — Spacing systems, grid layouts, and padding rules.
  * *Prompt Example:* `"Align these sections using `@.gemini/skills/impeccable/reference/layout.md`."*
* **[delight.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/delight.md)** — Micro-interactions, feedback states, and premium details.
  * *Prompt Example:* `"Add delightful feedback details here using `@.gemini/skills/impeccable/reference/delight.md`."*
* **[overdrive.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/overdrive.md)** — Implementing advanced graphic designs and visual layouts.
  * *Prompt Example:* `"Create an experimental visual hero using `@.gemini/skills/impeccable/reference/overdrive.md`."*
* **[clarify.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/clarify.md)** — Simplifying and polishing UX copywriting and visual labels.
  * *Prompt Example:* `"Polish the error message copies using `@.gemini/skills/impeccable/reference/clarify.md`."*
* **[adapt.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/adapt.md)** — Mobile scaling, touch points size, and device adaptability.
  * *Prompt Example:* `"Make this table responsive using `@.gemini/skills/impeccable/reference/adapt.md`."*
* **[optimize.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/optimize.md)** — Performance guidelines, image weights, and assets scaling.
  * *Prompt Example:* `"Reduce render delays on this gallery using `@.gemini/skills/impeccable/reference/optimize.md`."*
* **[live.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/live.md)** — Iterating on styling elements in a live browser variant mode.
  * *Prompt Example:* `"Configure live variant testing using `@.gemini/skills/impeccable/reference/live.md`."*
* **[document.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/document.md)** — Generating `DESIGN.md` documentation for existing styling frameworks.
  * *Prompt Example:* `"Generate a DESIGN.md template for this repo using `@.gemini/skills/impeccable/reference/document.md`."*
* **[extract.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/extract.md)** — Extracting common CSS rules and layout structures into re-usable classes.
  * *Prompt Example:* `"Isolate these button styles into reusable tokens using `@.gemini/skills/impeccable/reference/extract.md`."*
* **[brand.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/brand.md)** — Guidelines for brand-focused marketing views and sales copy.
  * *Prompt Example:* `"Audit the landing page design using `@.gemini/skills/impeccable/reference/brand.md`."*
* **[product.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/product.md)** — Application control boards, dashboard layouts, and clear input styling.
  * *Prompt Example:* `"Polish this forms page following `@.gemini/skills/impeccable/reference/product.md`."*
* **[codex.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/codex.md)** — Codex CLI integration parameters.
  * *Prompt Example:* `"Check CLI command outputs against `@.gemini/skills/impeccable/reference/codex.md`."*
* **[interaction-design.md](file:///c:/Users/OJT/portfolio/.gemini/skills/impeccable/reference/interaction-design.md)** — Hover states, focus outlines, button active scales, and inputs click indicators.
  * *Prompt Example:* `"Polish button interaction states following `@.gemini/skills/impeccable/reference/interaction-design.md`."*olio/.gemini/skills/impeccable/reference).)*

---

## 🧪 Verify Phase (Prove It Works)

### Browser Testing with DevTools
* **Path:** [browser-testing-with-devtools](file:///c:/Users/OJT/portfolio/.gemini/skills/browser-testing-with-devtools/SKILL.md)
* **What it is:** Using Chrome DevTools and browser automation to verify runtime layout, logs, networks, and profiling.
* **When to use:** Verifying layouts, testing UI interactions, and profiling render performance.
* **Prompt Example:**
  > *"Test the booking flow in the browser and inspect runtime logs following `@.gemini/skills/browser-testing-with-devtools/SKILL.md`."*

### Debugging & Error Recovery
* **Path:** [debugging-and-error-recovery](file:///c:/Users/OJT/portfolio/.gemini/skills/debugging-and-error-recovery/SKILL.md)
* **What it is:** Five-step debugging triage (Reproduce → Localize → Reduce → Fix → Guard).
* **When to use:** Fixing test suite failures, addressing console/network exceptions, or recovering from build failures.
* **Prompt Example:**
  > *"Triage and repair this build error following the `@.gemini/skills/debugging-and-error-recovery/SKILL.md` workflow."*

---

## 🔍 Review Phase (Quality Gates)

### Code Review & Quality
* **Path:** [code-review-and-quality](file:///c:/Users/OJT/portfolio/.gemini/skills/code-review-and-quality/SKILL.md)
* **What it is:** A five-axis review system (Correctness, Complexity, Consistency, Telemetry, and Security).
* **When to use:** Before merging any PR, staging a release, or requesting feedback.
* **Prompt Example:**
  > *"Perform a full five-axis code review on my recent changes using `@.gemini/skills/code-review-and-quality/SKILL.md`."*

### Code Simplification
* **Path:** [code-simplification](file:///c:/Users/OJT/portfolio/.gemini/skills/code-simplification/SKILL.md)
* **What it is:** Chesterton's Fence ("don't delete it unless you know why it's there") and guidelines for reducing complexity.
* **When to use:** Code functions correctly but is difficult to maintain, read, or contains redundant checks.
* **Prompt Example:**
  > *"Refactor and simplify this logic following `@.gemini/skills/code-simplification/SKILL.md`."*

### Security & Hardening
* **Path:** [security-and-hardening](file:///c:/Users/OJT/portfolio/.gemini/skills/security-and-hardening/SKILL.md)
* **What it is:** OWASP Top 10 mitigation, inputs validation, CORS headers, secrets auditing, and three-tier boundary checks.
* **When to use:** Handling authentication, user-supplied input forms, databases, or API integrations.
* **Prompt Example:**
  > *"Hardon and secure this form handler using `@.gemini/skills/security-and-hardening/SKILL.md`."*

### Performance Optimization
* **Path:** [performance-optimization](file:///c:/Users/OJT/portfolio/.gemini/skills/performance-optimization/SKILL.md)
* **What it is:** Profiling visual render passes, Core Web Vitals, assets compression, and bundle size reduction.
* **When to use:** Optimizing page load speeds, reducing script evaluation delays, or correcting layout shifts.
* **Prompt Example:**
  > *"Optimize the loading times of the image gallery using `@.gemini/skills/performance-optimization/SKILL.md`."*

---

## 🚀 Ship Phase (Deploy with Confidence)

### Git Workflow & Versioning
* **Path:** [git-workflow-and-versioning](file:///c:/Users/OJT/portfolio/.gemini/skills/git-workflow-and-versioning/SKILL.md)
* **What it is:** Guidelines for trunk-based development, writing atomic commits, and tracking small diffs.
* **When to use:** Committing changes, creating branches, or preparing merges.
* **Prompt Example:**
  > *"Commit my current staged changes using the rules in `@.gemini/skills/git-workflow-and-versioning/SKILL.md`."*

### CI/CD & Automation
* **Path:** [ci-cd-and-automation](file:///c:/Users/OJT/portfolio/.gemini/skills/ci-cd-and-automation/SKILL.md)
* **What it is:** Shift-left testing workflows, pipeline integration, and automated verification loops.
* **When to use:** Setting up build workflows, GitHub Actions, or deployment pipelines.
* **Prompt Example:**
  > *"Configure the GitHub actions pipeline following `@.gemini/skills/ci-cd-and-automation/SKILL.md`."*

### Deprecation & Migration
* **Path:** [deprecation-and-migration](file:///c:/Users/OJT/portfolio/.gemini/skills/deprecation-and-migration/SKILL.md)
* **What it is:** Compulsory vs advisory deprecations, safe migration wrappers, and removal of zombie code.
* **When to use:** Sunsetting old components, moving users to a new API, or removing legacy dependencies.
* **Prompt Example:**
  > *"Deprecate the old database connector safely following `@.gemini/skills/deprecation-and-migration/SKILL.md`."*

### Documentation & ADRs
* **Path:** [documentation-and-adrs](file:///c:/Users/OJT/portfolio/.gemini/skills/documentation-and-adrs/SKILL.md)
* **What it is:** Standards for inline code comments and writing Architecture Decision Records (ADRs) explaining *why*.
* **When to use:** Introducing new system architectures, changing libraries, or documenting key designs.
* **Prompt Example:**
  > *"Document our state management decisions in an ADR using `@.gemini/skills/documentation-and-adrs/SKILL.md`."*

### Observability & Instrumentation
* **Path:** [observability-and-instrumentation](file:///c:/Users/OJT/portfolio/.gemini/skills/observability-and-instrumentation/SKILL.md)
* **What it is:** Guidelines for structured logging, OpenTelemetry tracing, RED metrics, and symptom-based alerts.
* **When to use:** Shipping anything to production, adding telemetry logs, or setting up health monitors.
* **Prompt Example:**
  > *"Add structured logs to the checkout API following `@.gemini/skills/observability-and-instrumentation/SKILL.md`."*

### Shipping & Launch
* **Path:** [shipping-and-launch](file:///c:/Users/OJT/portfolio/.gemini/skills/shipping-and-launch/SKILL.md)
* **What it is:** Comprehensive pre-launch check matrices, feature flags controls, staged rollouts, and rollback procedures.
* **When to use:** Preparing a release build, turning on a production server flag, or going live.
* **Prompt Example:**
  > *"Run through the release checklist and verify go-live readiness using `@.gemini/skills/shipping-and-launch/SKILL.md`."*

---

## 👥 Specialist Personas

Use these specialist personas when you want to instruct the agent to review your codebase or PR through a specific professional lens:

### Code Reviewer
* **Path:** [code-reviewer](file:///c:/Users/OJT/portfolio/.gemini/agents/code-reviewer.md)
* **What it does:** Simulates a Senior Staff Engineer conducting a rigorous five-axis review.
* **Prompt Example:**
  > *"Analyze this pull request from the perspective of the `@.gemini/agents/code-reviewer.md` persona."*

### Test Engineer
* **Path:** [test-engineer](file:///c:/Users/OJT/portfolio/.gemini/agents/test-engineer.md)
* **What it does:** Focuses on test coverage, test logic completeness, and boundary case testing.
* **Prompt Example:**
  > *"Examine my checkout service tests and suggest improvements using the `@.gemini/agents/test-engineer.md` persona."*

### Security Auditor
* **Path:** [security-auditor](file:///c:/Users/OJT/portfolio/.gemini/agents/security-auditor.md)
* **What it does:** Performs threat modeling, vulnerability detection (OWASP), and boundary checks.
* **Prompt Example:**
  > *"Perform a threat modeling security audit on this auth module using `@.gemini/agents/security-auditor.md`."*

### Web Performance Auditor
* **Path:** [web-performance-auditor](file:///c:/Users/OJT/portfolio/.gemini/agents/web-performance-auditor.md)
* **What it does:** Evaluates Core Web Vitals, paint metrics, visual layout shifts, and asset weight.
* **Prompt Example:**
  > *"Run a performance audit on this landing page layout using `@.gemini/agents/web-performance-auditor.md`."*

---

## 📋 Reference Checklists

These reference checklists are loaded alongside workflows to verify technical standards:

* **[testing-patterns.md](file:///c:/Users/OJT/portfolio/.gemini/references/testing-patterns.md)** — Guide on mocking libraries, writing unit/API/E2E test patterns, and avoiding bad test structures.
* **[security-checklist.md](file:///c:/Users/OJT/portfolio/.gemini/references/security-checklist.md)** — Step-by-step checks for input sanitization, safe headers, SQL/NoSQL injection prevention, and authorization.
* **[performance-checklist.md](file:///c:/Users/OJT/portfolio/.gemini/references/performance-checklist.md)** — Checklist for optimizing Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and backend response times.
* **[accessibility-checklist.md](file:///c:/Users/OJT/portfolio/.gemini/references/accessibility-checklist.md)** — Focuses on visual contrast, screen readers aria-tags, keyboard accessibility, and element focus management.
* **[orchestration-patterns.md](file:///c:/Users/OJT/portfolio/.gemini/references/orchestration-patterns.md)** — Formats and patterns for organizing multi-agent operations.

