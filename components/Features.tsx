import styles from './Features.module.css'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Build and deploy agents in minutes, not days. Our optimized infrastructure ensures low latency and high performance.',
  },
  {
    icon: '🔧',
    title: 'Easy Integration',
    description: 'Connect with 50+ popular tools and services. Simple APIs and comprehensive documentation make integration effortless.',
  },
  {
    icon: '🛡️',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime SLA. Your agents and data are protected with industry-leading encryption.',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description: 'Monitor agent performance with detailed analytics and insights. Track usage, errors, and optimize your agents.',
  },
  {
    icon: '🚀',
    title: 'Scalable Infrastructure',
    description: 'From prototype to production, scale seamlessly. Handle millions of requests without worrying about infrastructure.',
  },
  {
    icon: '🎨',
    title: 'Customizable',
    description: 'Fully customizable agents with support for custom models, prompts, and workflows. Build exactly what you need.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Powerful Features</h2>
          <p className={styles.subtitle}>
            Everything you need to build, deploy, and scale AI agents
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
