"use client";

import styles from "./page.module.css";
import ContactForm from "@/features/contact/ContactForm";
import { 
  Briefcase, 
  Code, 
  ThumbsUp, 
  Certificate, 
  ArrowUpRight, 
  MapPin, 
  EnvelopeSimple, 
  ShareNetwork,
  ArrowRight
} from "@phosphor-icons/react";

export default function Home() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React 19", "Next.js 15", "TypeScript", "HTML5/CSS3", "Framer Motion", "Vanilla CSS"]
    },
    {
      category: "Backend & Services",
      skills: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "REST APIs", "GraphQL"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git/GitHub", "Docker", "Vercel", "Vitest", "Playwright", "Chrome DevTools"]
    }
  ];

  const projectsData = [
    {
      title: "TaskFlow Platform",
      description: "A secure, feature-rich collaborative project management platform featuring drag-and-drop boards, real-time sync, and detailed timeline charts.",
      tags: ["Next.js", "TypeScript", "Supabase", "CSS Modules"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Interactive Analytics",
      description: "A premium dashboard offering interactive data visualization, tracking page views, event logs, and user flows with high-fidelity chart interfaces.",
      tags: ["React", "Framer Motion", "Recharts", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "DevBlog CMS",
      description: "A fast, SEO-optimized blog system built with local MDX integration, featuring category tagging, full-text search, and reader feedback forms.",
      tags: ["Next.js 15", "MDX", "Vanilla CSS", "Vitest"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className={styles.container}>
      {/* 1. Hero Section */}
      <section id="hero" className={styles.hero}>
        <span className={styles.heroTag}>Available for work</span>
        <h1 className={styles.heroTitle}>
          Hi, I&apos;m a Software Architect & <span className={styles.heroTitleHighlight}>UI/UX Engineer</span> creating premium web experiences.
        </h1>
        <p className={styles.heroDesc}>
          I build high-performance, accessible full-stack applications using Next.js, TypeScript, and Supabase. Focused on modern layout aesthetics and fluid micro-interactions.
        </p>
        <div className={styles.ctas}>
          <a href="#projects">
            <button className={styles.btnPrimary}>
              View Projects
              <ArrowRight size={16} weight="bold" />
            </button>
          </a>
          <a href="#contact">
            <button className={styles.btnSecondary}>Contact Me</button>
          </a>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>About Me</h2>
          <p>My background and statistics</p>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p>
              I am a passionate developer focused on building clean, modular frontends and robust, secure backends. I value the DRY principle, strict type safety, and fast loading performance.
            </p>
            <p>
              My design system uses a strict mobile-first grid, HSL-tailored colors, and rich typography. Every component is crafted with attention to responsive detail, keyboard navigation, and interactive states.
            </p>
          </div>
          <div className={styles.aboutCards}>
            <div className={styles.aboutCard}>
              <Briefcase size={28} weight="duotone" color="var(--btn-primary-hover)" />
              <div className={styles.cardNum}>5+</div>
              <div className={styles.cardLabel}>Years Experience</div>
            </div>
            <div className={styles.aboutCard}>
              <Code size={28} weight="duotone" color="var(--btn-primary-hover)" />
              <div className={styles.cardNum}>30+</div>
              <div className={styles.cardLabel}>Projects Delivered</div>
            </div>
            <div className={styles.aboutCard}>
              <ThumbsUp size={28} weight="duotone" color="var(--btn-primary-hover)" />
              <div className={styles.cardNum}>100%</div>
              <div className={styles.cardLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.aboutCard}>
              <Certificate size={28} weight="duotone" color="var(--btn-primary-hover)" />
              <div className={styles.cardNum}>15+</div>
              <div className={styles.cardLabel}>Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skills Section */}
      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Skills & Technologies</h2>
          <p>My tech stack competencies</p>
        </div>
        <div className={styles.skillsGrid}>
          {skillsData.map((group, index) => (
            <div key={index} className={styles.skillsCategory}>
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              <div className={styles.skillsList}>
                {group.skills.map((skill, sIndex) => (
                  <span key={sIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Featured Projects</h2>
          <p>Some of my recent engineering work</p>
        </div>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImageMock}>
                {project.title} Preview
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.liveUrl} 
                  className={styles.projectLink}
                  aria-label={`View live website for ${project.title}`}
                >
                  View Live
                  <ArrowUpRight size={16} weight="bold" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className={styles.section} style={{ borderBottom: "none" }}>
        <div className={styles.sectionHeader}>
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for collaborations or inquiries</p>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
                <MapPin size={18} weight="duotone" color="var(--btn-primary-hover)" />
                <span className={styles.infoLabel}>Location</span>
              </div>
              <span className={styles.infoValue}>Remote / Global</span>
            </div>
            <div className={styles.infoItem}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
                <EnvelopeSimple size={18} weight="duotone" color="var(--btn-primary-hover)" />
                <span className={styles.infoLabel}>Email</span>
              </div>
              <span className={styles.infoValue}>hello@creativedev.com</span>
            </div>
            <div className={styles.infoItem}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
                <ShareNetwork size={18} weight="duotone" color="var(--btn-primary-hover)" />
                <span className={styles.infoLabel}>Socials</span>
              </div>
              <span className={styles.infoValue}>GitHub / LinkedIn</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
