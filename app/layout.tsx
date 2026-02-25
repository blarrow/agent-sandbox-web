import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agent Sandbox - AI Agent Development Platform',
  description: 'Build, test, and deploy AI agents with ease. Agent Sandbox provides a powerful platform for AI agent development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
