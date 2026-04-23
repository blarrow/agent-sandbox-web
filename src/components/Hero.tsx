import React from 'react';
import HeroCanvas from './HeroCanvas';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* 3D粒子效果 */}
      <HeroCanvas />
      
      {/* 内容 */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          探索无限可能
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          我们致力于为您提供创新的解决方案，帮助您实现业务目标，开启数字化转型之旅
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105">
            开始探索
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-900 transition-colors transform hover:scale-105">
            了解更多
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;