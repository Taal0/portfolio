import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const BOOT_LINES = [
  '> npm run portfolio',
  '> checking dependencies... ok',
  '> git status — clean',
  '> vite ready in 312ms',
  '> routes loaded',
  '> status: online',
]

const STATUS_LINES = [
  'cpu: 12% | mem: 2.1gb | uptime: 99.9%',
  'last deploy: ok | tests: passing',
  'lang: typescript | runtime: node',
  'network: stable | latency: 24ms',
]

const STATIC_LINES = [...BOOT_LINES.slice(0, 4), ...STATUS_LINES.slice(0, 2)]

function TerminalOutput({
  lines,
  currentLine,
}: {
  lines: string[]
  currentLine: string
}) {
  return (
    <div className="space-y-1 text-muted">
      {lines.map((line, i) => (
        <div key={`${line}-${i}`} className={line.startsWith('>') ? 'text-accent phosphor-text' : ''}>
          {line}
        </div>
      ))}
      {currentLine && (
        <div className="text-accent phosphor-text">
          {currentLine}
          <span className="crt-cursor text-accent-secondary">█</span>
        </div>
      )}
    </div>
  )
}

export function TerminalSim() {
  const prefersReduced = useReducedMotion() ?? false

  if (prefersReduced) {
    return (
      <div
        className="h-full min-h-[280px] rounded-sm border border-border bg-bg p-4 font-mono text-sm leading-relaxed"
        aria-label="Terminal simulation"
      >
        <div className="mb-3 text-accent-secondary">~/portfolio $</div>
        <TerminalOutput lines={STATIC_LINES} currentLine="" />
      </div>
    )
  }

  return <AnimatedTerminal />
}

function AnimatedTerminal() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const phaseRef = useRef<'boot' | 'status'>('boot')
  const indexRef = useRef(0)
  const charRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const pool = phaseRef.current === 'boot' ? BOOT_LINES : STATUS_LINES

      if (indexRef.current >= pool.length) {
        if (phaseRef.current === 'boot') {
          phaseRef.current = 'status'
          indexRef.current = 0
          charRef.current = 0
          setCurrentLine('')
          return
        }
        setLines((prev) => {
          const next = [...prev, pool[indexRef.current - 1] ?? pool[pool.length - 1]]
          return next.slice(-12)
        })
        indexRef.current = 0
        charRef.current = 0
        setCurrentLine('')
        return
      }

      const target = pool[indexRef.current]
      charRef.current += 1
      setCurrentLine(target.slice(0, charRef.current))

      if (charRef.current >= target.length) {
        setLines((prev) => [...prev.slice(-11), target])
        setCurrentLine('')
        indexRef.current += 1
        charRef.current = 0
      }
    }, 45)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="h-full min-h-[280px] rounded-sm border border-border bg-bg p-4 font-mono text-sm leading-relaxed"
      aria-label="Terminal simulation"
    >
      <div className="mb-3 text-accent-secondary">~/portfolio $</div>
      <TerminalOutput lines={lines} currentLine={currentLine} />
    </div>
  )
}
