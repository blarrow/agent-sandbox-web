"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FlaskConical,
  Building2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const useCases = [
  {
    icon: Code2,
    title: "Developer Tools",
    description:
      "Build AI-powered coding assistants, code review bots, and automated testing pipelines. Give your tools a safe place to run untrusted code.",
    tags: ["Code Generation", "Testing", "CI/CD"],
    color: "blue",
  },
  {
    icon: FlaskConical,
    title: "AI Research",
    description:
      "Run experiments at scale with reproducible, isolated environments. Perfect for benchmarking agents, testing prompts, and evaluating model behavior.",
    tags: ["Benchmarks", "Evaluation", "Experiments"],
    color: "purple",
  },
  {
    icon: Building2,
    title: "Enterprise Automation",
    description:
      "Deploy autonomous agents that handle data processing, report generation, and workflow automation — all within enterprise security boundaries.",
    tags: ["Workflows", "Data Processing", "Compliance"],
    color: "emerald",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Create interactive coding environments for students and AI tutoring systems. Safe, isolated, and instantly provisioned.",
    tags: ["E-Learning", "Tutoring", "Practice"],
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; tagBg: string; tagText: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    tagBg: "bg-blue-500/10",
    tagText: "text-blue-300",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
    tagBg: "bg-purple-500/10",
    tagText: "text-purple-300",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-300",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
    tagBg: "bg-amber-500/10",
    tagText: "text-amber-300",
  },
};

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-emerald-600/5 rounded-full blur-3xl" />
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
          <span className="text-sm font-medium text-emerald-400 tracking-wider uppercase">
            Use Cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for{" "}
            <span className="text-gradient">every agent workflow</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            From solo developers to enterprise teams, Agent Sandbox powers diverse AI
            agent use cases.
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const colors = colorMap[useCase.color];
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5`}
                >
                  <useCase.icon className={`w-5 h-5 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {useCase.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {useCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${colors.tagBg} ${colors.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.text} group-hover:gap-2.5 transition-all`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
