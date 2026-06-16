import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App