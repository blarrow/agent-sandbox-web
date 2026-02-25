'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🤖</span>
          <span className={styles.logoText}>Agent Sandbox</span>
        </div>
        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#how-it-works" className={styles.navLink}>How It Works</a>
          <a href="#get-started" className={styles.navLink}>Get Started</a>
        </nav>
        <button className={styles.ctaButton}>Sign Up</button>
      </div>
    </header>
  )
}
