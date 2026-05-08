import { motion } from "framer-motion";

const nodes = [
  {
    id: "input",
    label: "用户代码",
    x: 10,
    y: 50,
    color: "#00D9FF",
  },
  {
    id: "engine",
    label: "Sandbox Engine",
    x: 40,
    y: 50,
    color: "#FF6B35",
  },
  {
    id: "env",
    label: "执行环境",
    x: 70,
    y: 50,
    color: "#10B981",
  },
  {
    id: "output",
    label: "结果输出",
    x: 90,
    y: 50,
    color: "#8B5CF6",
  },
];

const subNodes = [
  { label: "代码解析", y: 25, color: "#00D9FF" },
  { label: "安全验证", y: 40, color: "#00D9FF" },
  { label: "资源限制", y: 60, color: "#FF6B35" },
  { label: "执行调度", y: 75, color: "#FF6B35" },
  { label: "进程隔离", y: 30, color: "#10B981" },
  { label: "内存管理", y: 50, color: "#10B981" },
  { label: "日志记录", y: 70, color: "#10B981" },
  { label: "结果序列化", y: 50, color: "#8B5CF6" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-body font-medium mb-4">
            系统架构
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            简洁而强大的架构
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            每一层都经过精心设计，确保性能、安全性和可扩展性的完美平衡
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-surface/50 rounded-3xl border border-text-secondary/10 p-8 lg:p-12 overflow-hidden"
        >
          <svg
            className="w-full h-auto"
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {nodes.map((node, index) => (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <rect
                  x={node.x * 10 - 60}
                  y={node.y - 30}
                  width="120"
                  height="60"
                  rx="12"
                  fill={node.color}
                  fillOpacity="0.1"
                  stroke={node.color}
                  strokeWidth="2"
                  filter="url(#glow)"
                />
                <text
                  x={node.x * 10}
                  y={node.y + 5}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="16"
                  fontFamily="Inter"
                  fontWeight="600"
                >
                  {node.label}
                </text>
              </motion.g>
            ))}

            {[0, 1, 2].map((i) => (
              <motion.path
                key={i}
                d={`M ${130 + i * 20} 200 Q ${250 + i * 50} ${180 + i * 20} ${370 + i * 30} 200`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8 4"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
              />
            ))}

            {subNodes.map((node, index) => (
              <motion.g
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <circle
                  cx={index < 4 ? 430 + (index % 4) * 30 : 600 + (index % 4) * 30}
                  cy={node.y + 80}
                  r="25"
                  fill={node.color}
                  fillOpacity="0.15"
                  stroke={node.color}
                  strokeWidth="1.5"
                />
                <text
                  x={index < 4 ? 430 + (index % 4) * 30 : 600 + (index % 4) * 30}
                  y={node.y + 85}
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="11"
                  fontFamily="Inter"
                >
                  {node.label}
                </text>
              </motion.g>
            ))}
          </svg>

          <motion.div
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { label: "请求处理", value: "< 10ms" },
              { label: "并发支持", value: "10K+" },
              { label: "沙箱启动", value: "< 50ms" },
              { label: "内存限制", value: "512MB" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-background/50"
              >
                <div className="font-heading font-bold text-2xl text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
