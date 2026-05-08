import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Zap } from "lucide-react";

const footerLinks = {
  产品: [
    { label: "功能特性", href: "#features" },
    { label: "定价方案", href: "#" },
    { label: "更新日志", href: "#" },
    { label: "路线图", href: "#" },
  ],
  资源: [
    { label: "文档中心", href: "#" },
    { label: "API 参考", href: "#" },
    { label: "示例代码", href: "#" },
    { label: "社区论坛", href: "#" },
  ],
  关于: [
    { label: "关于我们", href: "#" },
    { label: "加入团队", href: "#" },
    { label: "联系我们", href: "#" },
    { label: "博客", href: "#" },
  ],
  法律: [
    { label: "服务条款", href: "#" },
    { label: "隐私政策", href: "#" },
    { label: "Cookie 政策", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-text-secondary/10">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-text-primary">
                Agent<span className="text-gradient">Sandbox</span>
              </span>
            </a>
            <p className="font-body text-text-secondary text-sm mb-6 max-w-xs">
              为 AI Agent 开发者打造的安全、强大的沙箱测试平台。让开发更高效，让部署更安心。
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-heading font-semibold text-text-primary mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-text-secondary/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-text-secondary">
            © 2026 Agent Sandbox. 保留所有权利。
          </p>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              所有系统正常运行
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
