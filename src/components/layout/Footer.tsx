import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span>CreativeDev</span>
          </div>
          <ul className={styles.links}>
            <li>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} CreativeDev. All rights reserved.</p>
          <p>Designed with vanilla style tokens.</p>
        </div>
      </div>
    </footer>
  );
}
