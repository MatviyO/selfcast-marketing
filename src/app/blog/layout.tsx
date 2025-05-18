import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – Selfcast',
  description: 'Stay up to date with the latest casting insights, industry trends, and success stories from our global community.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 