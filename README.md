# Dynamic & Interactive Portfolio Website

Welcome to the Dynamic & Interactive Portfolio Website project! This repository contains the architecture, planning, and templates for building a highly customizable, modern portfolio website using React, Next.js, Framer Motion, and Supabase.

## Project Setup & Installation

### 1. Prerequisites
Ensure you have the following installed on your local system:
* **Node.js** (v18.x or later recommended)
* **npm** (v10.x or later) or **pnpm**
* A **Supabase** database instance (Cloud or Local)

### 2. Local Setup
1. Clone the repository to your machine:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   Create a `.env.local` file in the root of the project and supply your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anonymous-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```

### 3. Running the Development Server
To launch the hot-reloading development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Running Verification and Tests
* **Run Linting Rules:**
  ```bash
  npm run lint
  ```
* **Run Unit & Integration Tests (Vitest):**
  ```bash
  npm run test
  ```
* **Run End-to-End Tests (Playwright):**
  ```bash
  npx playwright test
  ```
* **Production Build Verification:**
  ```bash
  npm run build
  ```

---

## Workspace Architecture

This codebase is organized around a **feature-based architecture**. Instead of grouping files by technical type (e.g., all components in one folder, all hooks in another), code relating to a specific domain resides inside `src/features/[featureName]/`.

### Directory Tree Overview
```
src/
├── app/                  # Next.js App Router folders and layout/styling rules
├── components/           # Reusable presentational atoms (e.g. Buttons, Modals)
├── features/             # Business units (e.g., blog parsing, project filters)
├── hooks/                # Global custom hooks (e.g. useTheme, useIntersection)
├── lib/                  # Centralized API clients (e.g. supabase Client)
├── types/                # Strict TypeScript declaration types
└── utils/                # Pure formatting and array helpers
```

---

## Styling & Theme System

This project uses standard **CSS Modules** for component-level styling combined with global CSS variables defined in `src/app/globals.css`. 

### Changing Theme Modes
To switch themes in custom logic, toggle the `data-theme` attribute on the HTML root element:
```typescript
document.documentElement.setAttribute('data-theme', 'dark'); // For dark mode
document.documentElement.setAttribute('data-theme', 'light'); // For light mode
```

---

## Agent Skills Configuration
This workspace includes custom AI agent execution workflows located in the `.gemini/skills/` folder. For details on how to direct AI coders to use these production-grade templates, consult the [GEMINI.md](file:///c:/Users/OJT/portfolio/GEMINI.md) rule book.
