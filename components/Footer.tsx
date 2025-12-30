import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#gradient2)"/>
                <path d="M16 8L20 14H12L16 8Z" fill="white"/>
                <path d="M10 18L16 24L22 18H10Z" fill="white"/>
                <defs>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1"/>
                    <stop offset="1" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>Agent Sandbox</span>
            </div>
            <p>构建下一代AI代理应用的平台</p>
          </div>
          <div className={styles.footerSection}>
            <h4>产品</h4>
            <ul>
              <li><a href="#features">功能</a></li>
              <li><a href="#examples">示例</a></li>
              <li><a href="#docs">文档</a></li>
              <li><a href="#">定价</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>资源</h4>
            <ul>
              <li><a href="#">博客</a></li>
              <li><a href="#">教程</a></li>
              <li><a href="#">API文档</a></li>
              <li><a href="#">社区</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>公司</h4>
            <ul>
              <li><a href="#">关于我们</a></li>
              <li><a href="#">联系我们</a></li>
              <li><a href="#">隐私政策</a></li>
              <li><a href="#">服务条款</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Agent Sandbox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
