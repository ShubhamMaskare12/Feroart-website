import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Press from './components/Press'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Projects />
        <Services />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
