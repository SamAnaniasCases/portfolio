"use client";

import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span>Ananias</span>
          </div>
          <ul className={styles.links}>
            <li>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
                aria-label="GitHub Profile"
              >
                <GithubLogo size={20} weight="regular" />
              </a>
            </li>
            <li>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
                aria-label="LinkedIn Profile"
              >
                <LinkedinLogo size={20} weight="regular" />
              </a>
            </li>
            <li>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
                aria-label="Twitter Profile"
              >
                <TwitterLogo size={20} weight="regular" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} Ananias. All rights reserved.</p>
          <p>Designed with vanilla style tokens.</p>
        </div>
      </div>
    </footer>
  );
}
