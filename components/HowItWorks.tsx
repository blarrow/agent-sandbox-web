import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Create Your Agent',
    description: 'Define your agent with our intuitive interface or use our Python SDK. Choose your model, set up prompts, and configure behavior.',
  },
  {
    number: '02',
    title: 'Test & Iterate',
    description: 'Use our sandbox environment to test your agent safely. Debug, optimize, and refine until it works perfectly.',
  },
  {
    number: '03',
    title: 'Deploy & Scale',
    description: 'Deploy to production with one click. Our infrastructure automatically scales to handle your traffic.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.subtitle}>
            Get started in three simple steps
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.connectorLine}></div>
                  <div className={styles.connectorArrow}>→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
