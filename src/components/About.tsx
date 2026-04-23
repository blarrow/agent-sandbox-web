import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, avatar, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-100 group-hover:border-indigo-300 transition-colors duration-300">
        <img 
          src={avatar} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-indigo-600 text-center mb-3 font-medium">{role}</p>
      <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

interface TechStackProps {
  name: string;
  icon: string;
  description: string;
}

const TechStack: React.FC<TechStackProps> = ({ name, icon, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="text-indigo-600 text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

const About: React.FC = () => {
  const teamMembers = [
    {
      name: '张三',
      role: '前端开发',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20developer%20portrait%2C%20asian%20male%2C%20casual%20business%20attire%2C%20friendly%20smile%2C%20clean%20background&image_size=square',
      description: '专注于React和前端技术，拥有5年开发经验。'
    },
    {
      name: '李四',
      role: '后端开发',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20developer%20portrait%2C%20asian%20female%2C%20casual%20business%20attire%2C%20confident%20expression%2C%20clean%20background&image_size=square',
      description: '精通Node.js和数据库设计，致力于构建高性能后端服务。'
    },
    {
      name: '王五',
      role: 'UI/UX设计师',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20designer%20portrait%2C%20asian%20male%2C%20creative%20attire%2C%20artistic%20expression%2C%20clean%20background&image_size=square',
      description: '专注于用户体验设计，创造美观且易用的界面。'
    }
  ];

  const techStacks = [
    {
      name: 'React',
      icon: '⚛️',
      description: '用于构建用户界面的JavaScript库'
    },
    {
      name: 'TypeScript',
      icon: '🔷',
      description: 'JavaScript的超集，添加了类型系统'
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      description: '实用优先的CSS框架'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      description: '基于Chrome V8引擎的JavaScript运行环境'
    },
    {
      name: 'Three.js',
      icon: '3️⃣',
      description: 'JavaScript 3D库'
    },
    {
      name: 'Vite',
      icon: '⚡',
      description: '现代前端构建工具'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 团队介绍 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的团队</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              由一群充满激情和专业技能的开发者组成，致力于打造优质的产品和服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                avatar={member.avatar}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的技术栈</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              使用现代技术栈，确保产品的性能、可靠性和可维护性
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((tech, index) => (
              <TechStack
                key={index}
                name={tech.name}
                icon={tech.icon}
                description={tech.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              如果您有任何问题或合作意向，欢迎随时联系我们
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
                    placeholder="您的邮箱"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
                  placeholder="消息主题"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  消息
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
                  placeholder="请输入您的消息"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  发送消息
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;