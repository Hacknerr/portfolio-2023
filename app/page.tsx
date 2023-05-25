import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
      <>
          <head>
              <title>André Gärtner | Portfolio</title>
              <link rel="icon" href="favicon.ico" />
              <meta name='viewport' content='width=device-width, initial-scale=1' />
          </head>

          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />

      </>
  )
}
