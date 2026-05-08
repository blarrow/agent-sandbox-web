import { motion } from "framer-motion";
import { Shield, Activity, Puzzle, Cloud } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "安全隔离",
    description: "进程级沙箱隔离，保护你的生产环境。独立的执行空间确保代码在受控环境中运行，杜绝意外风险。",
    gradient: "from-primary/20 to-primary/5",
    borderColor: "hover:border-primary/50",
  },
  {
    icon: Activity,
    title: "实时调试",
    description: "完整的执行追踪和日志系统。实时监控 AI Agent 的每一步决策，快速定位和解决问题。",
    gradient: "from-secondary/20 to-secondary/5",
    borderColor: "hover:border-secondary/50",
  },
  {
    icon: Puzzle,
    title: "工具集成",
    description: "支持 50+ 常用工具和 API。从文件系统到网络请求，无缝对接各种外部服务。",
    gradient: "from-green-500/20 to-green-500/5",
    borderColor: "hover:border-green-500/50",
  },
  {
    icon: Cloud,
    title: "灵活部署",
    description: "支持云端和本地部署。根据你的需求选择最合适的部署方式，轻松扩展。",
    gradient: "from-purple-500/20 to-purple-500/5",
    borderColor: "hover:border-purple-500/50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-medium mb-4">
            核心功能
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            为何选择 Agent Sandbox
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            我们提供一套完整的工具链，让 AI Agent 开发变得简单、安全、可靠
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`relative group p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-text-secondary/10 ${feature.borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-primary/5`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>

                <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                  {feature.title}
                </h3>

                <p className="font-body text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
