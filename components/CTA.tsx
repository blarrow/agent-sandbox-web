'use client'

import { FormEvent, useState } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    alert(`感谢您的关注！我们将通过 ${email} 与您联系。`)
    setEmail('')
  }

  return (
    <section id="contact" className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>准备开始了吗？</h2>
          <p>立即注册，免费体验Agent Sandbox的强大功能</p>
          <form className={styles.ctaForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">免费开始</button>
          </form>
          <p className={styles.ctaNote}>无需信用卡，立即开始使用</p>
        </div>
      </div>
    </section>
  )
}
