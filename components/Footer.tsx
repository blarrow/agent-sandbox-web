import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🤖</span>
              <span className={styles.logoText}>Agent Sandbox</span>
            </div>
            <p className={styles.tagline}>
              Building the future of AI agent development
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Product</h4>
              <a href="#features" className={styles.link}>Features</a>
              <a href="#pricing" className={styles.link}>Pricing</a>
              <a href="#docs" className={styles.link}>Documentation</a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Company</h4>
              <a href="#about" className={styles.link}>About</a>
              <a href="#blog" className={styles.link}>Blog</a>
              <a href="#careers" className={styles.link}>Careers</a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Support</h4>
              <a href="#help" className={styles.link}>Help Center</a>
              <a href="#contact" className={styles.link}>Contact</a>
              <a href="#status" className={styles.link}>Status</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Agent Sandbox. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href="#twitter" className={styles.socialLink} aria-label="Twitter">Twitter</a>
            <a href="#github" className={styles.socialLink} aria-label="GitHub">GitHub</a>
            <a href="#linkedin" className={styles.socialLink} aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
