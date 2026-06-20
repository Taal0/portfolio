import { Suspense, lazy, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { PageLoader } from './components/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const CV = lazy(() => import('./pages/CV'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

function lazyPage(element: ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: lazyPage(<Home />) },
      { path: 'projeler', element: lazyPage(<Projects />) },
      { path: 'cv', element: lazyPage(<CV />) },
      { path: 'legal/:doc', element: lazyPage(<Legal />) },
      { path: '*', element: lazyPage(<NotFound />) },
    ],
  },
])
