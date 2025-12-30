'use client'

import { useEffect, useRef } from 'react'
import styles from './Examples.module.css'

const examples = [
  {
    title: '数据分析代理',
    tag: 'Python',
    description: '自动分析数据并生成可视化报告',
    code: 'agent.analyze(data).generate_report()'
  },
  {
    title: 'Web搜索代理',
    tag: 'JavaScript',
    description: '智能搜索并整理网络信息',
    code: 'agent.search(query).summarize()'
  },
  {
    title: '代码审查代理',
    tag: 'Multi',
    description: '自动审查代码质量和安全性',
    code: 'agent.review(code).suggest()'
  }
]

export default function Examples() {
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
    <section id="examples" className={styles.examples}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">使用示例</h2>
          <p className="section-description">看看其他开发者如何使用Agent Sandbox</p>
        </div>
        <div className={styles.examplesGrid}>
          {examples.map((example, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.exampleCard}
            >
              <div className={styles.exampleHeader}>
                <h3>{example.title}</h3>
                <span className={styles.exampleTag}>{example.tag}</span>
              </div>
              <p>{example.description}</p>
              <div className={styles.exampleCode}>
                <code>{example.code}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
