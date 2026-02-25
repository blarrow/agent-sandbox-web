import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Build AI Agents
            <span className={styles.gradient}> That Actually Work</span>
          </h1>
          <p className={styles.subtitle}>
            Agent Sandbox provides a powerful, intuitive platform for developing, 
            testing, and deploying AI agents. From prototyping to production, 
            we've got you covered.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get Started Free</button>
            <button className={styles.secondaryButton}>Watch Demo</button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Active Agents</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>Uptime</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Integrations</div>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className={styles.codeTitle}>agent.py</span>
            </div>
            <pre className={styles.code}>
{`from agent_sandbox import Agent

agent = Agent(
    name="Assistant",
    model="gpt-4"
)

@agent.task
def help_user(query):
    return agent.think(query)

agent.run()`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
