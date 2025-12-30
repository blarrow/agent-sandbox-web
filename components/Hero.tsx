'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const codeWindowRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(`.${styles.stat}`)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span>🚀 新一代AI代理平台</span>
            </div>
            <h1 className={styles.heroTitle}>
              构建、测试和部署
              <span className={styles.gradientText}> AI代理</span>
              的完美环境
            </h1>
            <p className={styles.heroDescription}>
              Agent Sandbox 提供了一个安全、隔离的环境，让您可以轻松开发、测试和迭代AI代理应用。
              无需担心环境配置，专注于您的创意。
            </p>
            <div className={styles.heroActions}>
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.querySelector('#contact')
                  if (target) {
                    const offset = 80
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
                  }
                }}
              >
                立即开始
              </a>
              <a 
                href="#how-it-works" 
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.querySelector('#how-it-works')
                  if (target) {
                    const offset = 80
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
                  }
                }}
              >
                了解更多
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10K+</div>
                <div className={styles.statLabel}>活跃用户</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50K+</div>
                <div className={styles.statLabel}>代理部署</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>99.9%</div>
                <div className={styles.statLabel}>运行时间</div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.codeWindow} ref={codeWindowRef}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.codeTitle}>agent_sandbox.py</div>
              </div>
              <div className={styles.codeContent}>
                <pre><code><span className={styles.keyword}>from</span> agent_sandbox <span className={styles.keyword}>import</span> Agent, Sandbox

<span className={styles.comment}># 创建代理</span>
agent = Agent(
    name=<span className={styles.string}>"my_agent"</span>,
    capabilities=[<span className={styles.string}>"web_search"</span>, <span className={styles.string}>"code_execution"</span>]
)

<span className={styles.comment}># 在沙箱中运行</span>
sandbox = Sandbox()
result = sandbox.run(agent, task=<span className={styles.string}>"分析数据并生成报告"</span>)

<span className={styles.function}>print</span>(result)</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
