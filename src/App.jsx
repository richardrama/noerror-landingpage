import React from 'react'
import { NavBar, Home, About, Service, Projects, Testimonials, Contact, Footer } from './components'
import styles from './styles'

const App = () => {
  return (
    <div className={`bg-black flex flex-col items-center w-full font-poppins `}>
      <NavBar />
      <Home />
      <About />
      <Service />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App