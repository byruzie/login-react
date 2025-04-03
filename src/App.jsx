import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/login-react' element={
          <PageWrapper>
            <SignIn />
          </PageWrapper>
          } />
        <Route path='/login-react/signup' element={
          <PageWrapper>
            <SignUp />
          </PageWrapper>
          } />
      </Routes>
    </AnimatePresence>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ x: 3000 }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      { children }
    </motion.div>
  )
}

function App() {
  return (
    <>
      <AnimatedRoutes />
    </>
  )
}

export default App
