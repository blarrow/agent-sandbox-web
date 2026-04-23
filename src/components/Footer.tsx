import React from 'react';
import { Mail, Phone, MapPin, Share2, MessageSquare, Camera, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Share2, href: '#', name: 'Facebook' },
    { icon: MessageSquare, href: '#', name: 'Twitter' },
    { icon: Camera, href: '#', name: 'Instagram' },
    { icon: Users, href: '#', name: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@example.com' },
    { icon: Phone, text: '+86 123 4567 8910' },
    { icon: MapPin, text: '北京市朝阳区某某大厦1001室' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold">Logo</span>
            </div>
            <p className="text-gray-400 mb-6">
              我们致力于提供优质的服务，满足客户的各种需求。
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">服务项目</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">网站设计</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">移动应用开发</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">品牌设计</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">数字营销</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">技术咨询</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Logo. 保留所有权利。
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">使用条款</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;