import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-sm border border-border bg-bg px-2 py-0.5 text-xs text-accent-secondary">
      {children}
    </span>
  )
}
