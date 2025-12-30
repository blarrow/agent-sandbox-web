'use client'

import { useEffect, useRef } from 'react'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: 1,
    title: '创建代理',
    description: '使用我们的SDK或Web界面快速创建您的AI代理，定义其能力和行为。'
  },
  {
    number: 2,
    title: '测试运行',
    description: '在安全的沙箱环境中测试您的代理，实时查看运行结果和性能。'
  },
  {
    number: 3,
    title: '部署上线',
    description: '一键部署到生产环境，享受高可用性和自动扩展能力。'
  }
]

export default function HowItWorks() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">工作原理</h2>
          <p className="section-description">简单三步，开始您的AI代理之旅</p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className={styles.step}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
