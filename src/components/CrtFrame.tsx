import type { ReactNode } from 'react'

interface CrtFrameProps {
  children: ReactNode
  bootOverlay?: ReactNode
}

export function CrtFrame({ children, bootOverlay }: CrtFrameProps) {
  return (
    <div className="crt-monitor crt-flicker mx-auto w-full max-w-5xl px-2 py-4 md:px-4 md:py-6">
      <div className="crt-bezel">
        <div className="crt-bezel-brand" aria-hidden="true">
          <span className="crt-brand-text">TALO-CRT</span>
          <span className="crt-brand-model">MK-I</span>
        </div>

        <div className="crt-screen-outer">
          <div className="crt-screen">
            <div className="crt-screen-content">{children}</div>

            {bootOverlay}

            <div className="crt-vignette" aria-hidden="true" />
            <div className="crt-scanlines" aria-hidden="true" />
            <div className="crt-noise" aria-hidden="true" />
            <div className="crt-glass-curve" aria-hidden="true" />
          </div>
        </div>

        <div className="crt-bezel-footer" aria-hidden="true">
          <div className="crt-vents">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="crt-vent-slot" />
            ))}
          </div>
          <div className="crt-power-led" title="Power">
            <span className="crt-power-glow" />
          </div>
        </div>
      </div>
    </div>
  )
}
