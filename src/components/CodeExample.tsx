import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Code2 } from "lucide-react";

const codeSnippet = `import { AgentSandbox } from '@agent-sandbox/sdk';

const sandbox = new AgentSandbox({
  timeout: 30000,
  memoryLimit: '512MB',
  tools: ['file', 'http', 'database']
});

async function main() {
  const agent = await sandbox.createAgent({
    name: 'My First Agent',
    model: 'gpt-4',
    instructions: '你是一个友好的AI助手'
  });

  const response = await agent.run('你好，请介绍一下你自己');
  console.log(response);
  
  await sandbox.cleanup();
}

main();`;

export default function CodeExample() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-body font-medium mb-4">
            快速开始
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            三行代码，快速集成
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            简洁的 API 设计，让你在几分钟内就能运行第一个 AI Agent
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-green-500/20 rounded-2xl blur-xl opacity-50" />

          <div className="relative bg-surface rounded-2xl border border-text-secondary/10 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-text-secondary/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-text-secondary text-sm font-body">
                  <Code2 className="w-4 h-4" />
                  <span>example.ts</span>
                </div>
              </div>

              <motion.button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors text-text-secondary hover:text-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-body">已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm font-body">复制代码</span>
                  </>
                )}
              </motion.button>
            </div>

            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                {codeSnippet.split("\n").map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="flex"
                  >
                    <span className="select-none text-text-secondary/50 w-12 text-right pr-4">
                      {index + 1}
                    </span>
                    <code className="text-text-primary">{line}</code>
                  </motion.div>
                ))}
              </pre>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-body">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              TypeScript
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-surface/80 border border-text-secondary/20 hover:border-primary/50 transition-colors"
            >
              <span className="font-body text-text-primary">查看完整文档</span>
              <svg
                className="w-4 h-4 text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-surface/80 border border-text-secondary/20 hover:border-secondary/50 transition-colors"
            >
              <span className="font-body text-text-primary">npm install</span>
              <code className="font-mono text-sm text-secondary">@agent-sandbox/sdk</code>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
