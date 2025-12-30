'use client'

import { useEffect, useRef } from 'react'
import styles from './Features.module.css'

const features = [
  {
    icon: '🔒',
    title: '安全隔离',
    description: '每个代理运行在完全隔离的沙箱环境中，确保安全性和稳定性。'
  },
  {
    icon: '⚡',
    title: '快速部署',
    description: '一键部署，无需复杂配置。支持多种编程语言和框架。'
  },
  {
    icon: '📊',
    title: '实时监控',
    description: '实时查看代理运行状态、性能指标和日志输出。'
  },
  {
    icon: '🔄',
    title: '版本控制',
    description: '内置版本管理系统，轻松回滚和迭代您的代理。'
  },
  {
    icon: '🌐',
    title: 'API集成',
    description: '丰富的API接口，轻松集成到您的应用中。'
  },
  {
    icon: '🤝',
    title: '协作开发',
    description: '支持团队协作，共享和复用代理组件。'
  }
]

export default function Features() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">强大功能</h2>
          <p className="section-description">为AI代理开发提供完整的工具链</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
