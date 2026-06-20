import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

const BOOT_KEY = 'crt-boot-seen'

type LineKind = 'prompt' | 'output' | 'success' | 'dim'

interface BootLine {
  text: string
  kind: LineKind
  delay?: number
}

const BOOT_SCRIPT: BootLine[] = [
  { text: '> booting talo.dev...', kind: 'prompt' },
  { text: '> checking dependencies... ok', kind: 'success', delay: 200 },
  { text: '> git status', kind: 'prompt', delay: 300 },
  { text: '  On branch main', kind: 'dim', delay: 120 },
  { text: '  nothing to commit, working tree clean', kind: 'dim', delay: 80 },
  { text: '> npm run portfolio', kind: 'prompt', delay: 400 },
  { text: '', kind: 'dim', delay: 200 },
  { text: '  VITE v5.x  ready in 312 ms', kind: 'output', delay: 150 },
  { text: '  ➜  Local:   http://localhost:5173/', kind: 'output', delay: 100 },
  { text: '  ➜  loading routes...', kind: 'output', delay: 250 },
  { text: '     ✓ /          (hero)', kind: 'success', delay: 120 },
  { text: '     ✓ /projeler  (bento)', kind: 'success', delay: 100 },
  { text: '     ✓ /legal/*   (markdown)', kind: 'success', delay: 100 },
  { text: '', kind: 'dim', delay: 200 },
  { text: '[████████████████████] 100%', kind: 'success', delay: 300 },
  { text: '> welcome, visitor.', kind: 'prompt', delay: 400 },
]

function lineClass(kind: LineKind): string {
  switch (kind) {
    case 'prompt':
      return 'text-accent phosphor-text'
    case 'success':
      return 'text-accent phosphor-text'
    case 'output':
      return 'text-muted'
    case 'dim':
      return 'text-muted/70'
  }
}

interface BootSequenceProps {
  onComplete: () => void
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const prefersReduced = useReducedMotion() ?? false
  const skippedRef = useRef(false)
  const [visible, setVisible] = useState(true)
  const [lines, setLines] = useState<BootLine[]>([])
  const [showCursor, setShowCursor] = useState(true)

  const finish = useCallback(() => {
    if (skippedRef.current) return
    skippedRef.current = true
    sessionStorage.setItem(BOOT_KEY, '1')
    setShowCursor(false)
    setVisible(false)
    window.setTimeout(onComplete, 400)
  }, [onComplete])

  useEffect(() => {
    if (prefersReduced) {
      finish()
      return
    }

    if (sessionStorage.getItem(BOOT_KEY) === '1') {
      skippedRef.current = true
      onComplete()
      return
    }

    let index = 0
    let timeoutId: number

    const revealNext = () => {
      if (skippedRef.current) return

      if (index >= BOOT_SCRIPT.length) {
        timeoutId = window.setTimeout(finish, 600)
        return
      }

      const line = BOOT_SCRIPT[index]
      index += 1
      setLines((prev) => [...prev, line])

      const wait = line.delay ?? 180
      timeoutId = window.setTimeout(revealNext, wait)
    }

    timeoutId = window.setTimeout(revealNext, 400)

    return () => window.clearTimeout(timeoutId)
  }, [finish, onComplete, prefersReduced])

  useEffect(() => {
    if (!visible) return

    const skip = () => finish()
    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)

    return () => {
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
  }, [finish, visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="crt-boot absolute inset-0 z-30 flex flex-col bg-bg p-4 font-mono text-sm leading-relaxed md:p-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="status"
          aria-live="polite"
          aria-label="System boot sequence"
        >
          <div className="mb-4 text-accent-secondary phosphor-text">talo@dev:~$</div>
          <div className="flex-1 space-y-0.5 overflow-hidden">
            {lines.map((line, i) =>
              line.text ? (
                <motion.div
                  key={`${line.text}-${i}`}
                  className={lineClass(line.kind)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  {line.text}
                </motion.div>
              ) : (
                <div key={`blank-${i}`} className="h-3" />
              ),
            )}
            {showCursor && (
              <div className="text-accent phosphor-text">
                <span className="crt-cursor">█</span>
              </div>
            )}
          </div>
          <p className="mt-4 text-xs text-muted/50">press any key to skip</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function useBootComplete(): [boolean, () => void] {
  const prefersReduced = useReducedMotion() ?? false
  const [bootComplete, setBootComplete] = useState(() => {
    if (typeof window === 'undefined') return true
    if (prefersReduced) return true
    return sessionStorage.getItem(BOOT_KEY) === '1'
  })

  const completeBoot = useCallback(() => setBootComplete(true), [])

  return [bootComplete, completeBoot]
}
