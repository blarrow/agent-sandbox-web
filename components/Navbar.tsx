'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
              <path d="M16 8L20 14H12L16 8Z" fill="white"/>
              <path d="M10 18L16 24L22 18H10Z" fill="white"/>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1"/>
                  <stop offset="1" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>
            <span>Agent Sandbox</span>
          </div>
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            <li><a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>功能</a></li>
            <li><a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>工作原理</a></li>
            <li><a href="#examples" onClick={(e) => handleSmoothScroll(e, '#examples')}>示例</a></li>
            <li><a href="#docs" onClick={(e) => handleSmoothScroll(e, '#docs')}>文档</a></li>
            <li><a href="#contact" className={styles.btnPrimary} onClick={(e) => handleSmoothScroll(e, '#contact')}>开始使用</a></li>
          </ul>
          <button 
            className={styles.mobileMenuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
