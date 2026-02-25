import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="get-started" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Build Your AI Agent?</h2>
          <p className={styles.subtitle}>
            Join thousands of developers building the next generation of AI applications
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get Started Free</button>
            <button className={styles.secondaryButton}>Contact Sales</button>
          </div>
          <p className={styles.note}>
            No credit card required • Free tier available • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  )
}
