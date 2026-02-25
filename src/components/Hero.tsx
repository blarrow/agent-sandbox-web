"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Terminal, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Now in Public Beta</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          <span className="block">Secure Sandboxes for</span>
          <span className="block text-gradient mt-2">AI Agents</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Give your AI agents isolated environments to execute code, browse the web,
          and interact with tools — safely and at scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2"
          >
            Start Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="group px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "<50ms", label: "Boot Time" },
            { value: "10K+", label: "Developers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden glow-blue">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-1.5 ml-4 text-xs text-gray-500">
                <Terminal className="w-3 h-3" />
                agent-sandbox
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                <Shield className="w-3 h-3" />
                Isolated
              </div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm text-left space-y-2">
              <div className="flex gap-2">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-300">
                  agent-sandbox create --runtime python3.12
                </span>
              </div>
              <div className="text-gray-500 pl-4">
                Creating isolated sandbox environment...
              </div>
              <div className="text-blue-400 pl-4">
                Sandbox <span className="text-purple-400">sb-7x9k2m</span> ready in{" "}
                <span className="text-emerald-400">42ms</span>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-300">
                  agent-sandbox exec sb-7x9k2m &quot;pip install requests &amp;&amp; python
                  agent.py&quot;
                </span>
              </div>
              <div className="text-gray-500 pl-4">
                Executing in sandbox sb-7x9k2m...
              </div>
              <div className="text-emerald-400 pl-4">
                Agent task completed successfully. Results saved.
              </div>
              <div className="flex gap-2 mt-2">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-300 animate-pulse">|</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
