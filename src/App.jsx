import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#08090d] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
