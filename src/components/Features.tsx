"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Terminal,
  Globe,
  Plug,
  Activity,
  Lock,
  Cpu,
  FileCode,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Isolated Environments",
    description:
      "Each agent runs in a fully isolated container with its own filesystem, network, and process space. Zero cross-contamination.",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Terminal,
    title: "Code Execution",
    description:
      "Execute arbitrary code in any language with pre-installed runtimes. Python, Node.js, Go, Rust — all ready to go.",
    color: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: Globe,
    title: "Web Browsing",
    description:
      "Headless browser built-in. Your agents can navigate, scrape, and interact with any website securely.",
    color: "from-emerald-500 to-teal-500",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "RESTful API and SDKs for Python, TypeScript, and Go. Integrate sandbox capabilities into your stack in minutes.",
    color: "from-orange-500 to-amber-500",
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Stream stdout/stderr, monitor resource usage, and get instant alerts. Full observability into every sandbox.",
    color: "from-rose-500 to-red-500",
    glow: "group-hover:shadow-rose-500/20",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant. Network policies, secret management, and audit logging. Built for production workloads.",
    color: "from-indigo-500 to-blue-500",
    glow: "group-hover:shadow-indigo-500/20",
  },
  {
    icon: Cpu,
    title: "Auto-scaling",
    description:
      "Spin up thousands of sandboxes simultaneously. Our infrastructure scales with your agent fleet automatically.",
    color: "from-cyan-500 to-blue-500",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: FileCode,
    title: "Persistent Storage",
    description:
      "Mount volumes, cache dependencies, and persist state across sandbox sessions. Your agents pick up right where they left off.",
    color: "from-violet-500 to-purple-500",
    glow: "group-hover:shadow-violet-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">
            Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything your agents{" "}
            <span className="text-gradient">need to thrive</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            A complete runtime platform designed from the ground up for AI agent
            workloads.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group glass-card rounded-2xl p-6 hover:shadow-xl ${feature.glow} transition-all duration-300`}
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
