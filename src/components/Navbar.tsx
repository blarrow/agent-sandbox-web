import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "功能特性", href: "#features" },
  { label: "架构", href: "#architecture" },
  { label: "快速开始", href: "#code" },
  { label: "文档", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-text-primary">
              Agent<span className="text-gradient">Sandbox</span>
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="font-body text-text-secondary hover:text-primary transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              className="px-5 py-2 rounded-lg font-body font-medium text-text-secondary hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              登录
            </motion.button>
            <motion.button
              className="px-5 py-2 rounded-lg font-body font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 217, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              立即开始
            </motion.button>
          </div>

          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden glass"
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 font-body text-text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2">
            <button className="w-full py-2 rounded-lg font-body text-text-secondary border border-text-secondary/30">
              登录
            </button>
            <button className="w-full py-2 rounded-lg font-body font-medium bg-gradient-to-r from-primary to-secondary text-white">
              立即开始
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
