"use client";

import { motion } from "framer-motion";
import { Box, Rocket, Play, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Box,
    step: "01",
    title: "Create a Sandbox",
    description:
      "Spin up an isolated environment in milliseconds. Choose your runtime, set resource limits, and configure network policies.",
    code: `const sandbox = await AgentSandbox.create({
  runtime: "python3.12",
  memory: "512MB",
  timeout: "5m"
});`,
  },
  {
    icon: Rocket,
    step: "02",
    title: "Deploy Your Agent",
    description:
      "Upload your agent code or connect to a Git repository. Dependencies are automatically resolved and cached.",
    code: `await sandbox.upload("./agent.py");
await sandbox.install(["requests", "beautifulsoup4"]);`,
  },
  {
    icon: Play,
    step: "03",
    title: "Execute Tasks",
    description:
      "Run your agent with full filesystem, network, and browser access. Everything happens inside the secure sandbox.",
    code: `const result = await sandbox.exec(
  "python agent.py --task='research AI trends'"
);
console.log(result.output);`,
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Monitor & Iterate",
    description:
      "Stream real-time logs, track resource usage, and collect results. Iterate quickly with instant sandbox recycling.",
    code: `sandbox.onLog((log) => console.log(log));
const metrics = await sandbox.metrics();
await sandbox.snapshot("checkpoint-1");`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            From zero to sandbox{" "}
            <span className="text-gradient">in four steps</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Get your agents running in secure environments with just a few lines of
            code.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 tracking-wider">
                    STEP {step.step}
                  </span>
                  <h3 className="text-xl font-semibold mt-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Code Block */}
              <div className="bg-gray-950/80 rounded-xl border border-white/5 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-xs text-gray-600 font-mono">
                    index.ts
                  </span>
                </div>
                <pre className="p-4 text-xs sm:text-sm font-mono text-gray-300 overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
