import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="text-indigo-600 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: '快速部署',
      description: '我们的系统可以在几分钟内完成部署，让您的业务快速上线。'
    },
    {
      icon: '🔒',
      title: '安全可靠',
      description: '采用先进的安全技术，保护您的数据和业务信息安全。'
    },
    {
      icon: '📈',
      title: '数据分析',
      description: '提供详细的数据分析工具，帮助您做出更明智的业务决策。'
    },
    {
      icon: '💡',
      title: '智能服务',
      description: '基于AI技术的智能服务，为您的业务提供个性化解决方案。'
    },
    {
      icon: '🔧',
      title: '技术支持',
      description: '专业的技术团队24/7为您提供支持，解决各种技术问题。'
    },
    {
      icon: '🌍',
      title: '全球覆盖',
      description: '服务覆盖全球多个地区，为您的业务拓展提供支持。'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的核心功能</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            提供全方位的服务和功能，满足您的业务需求，助力企业快速发展
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;