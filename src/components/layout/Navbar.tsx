"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // Safely check theme on mount (prevents SSR mismatch)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    // Set theme attribute synchronously to prevent theme flickering on render
    document.documentElement.setAttribute("data-theme", initialTheme);

    // Call state update asynchronously to avoid synchronous effect warnings
    const timeoutId = setTimeout(() => {
      setTheme(initialTheme);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Ananias</span>
        <span className={styles.logoDot} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><a href="#hero" className={styles.navLink}>Home</a></li>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#skills" className={styles.navLink}>Skills</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
        <div className={styles.actions}>
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
          >
            {theme === "light" ? (
              <Sun size={18} weight="bold" />
            ) : (
              <Moon size={18} weight="fill" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
