import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { BootSequence, useBootComplete } from './components/BootSequence'
import { CrtFrame } from './components/CrtFrame'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { PageTransition } from './components/PageTransition'

function AnimatedOutlet() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Outlet />
      </PageTransition>
    </AnimatePresence>
  )
}

export default function App() {
  const [bootComplete, completeBoot] = useBootComplete()

  return (
    <div className="crt-room flex min-h-dvh flex-col items-center justify-center bg-bg font-mono text-text">
      <CrtFrame bootOverlay={!bootComplete ? <BootSequence onComplete={completeBoot} /> : null}>
        <div className="flex min-h-[min(72dvh,720px)] flex-col">
          <NavBar />
          <main className="flex flex-1 flex-col px-4 py-4 md:px-6 md:py-5">
            <AnimatedOutlet />
          </main>
          <Footer />
        </div>
      </CrtFrame>
    </div>
  )
}
