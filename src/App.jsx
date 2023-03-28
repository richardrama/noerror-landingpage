import React from 'react'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Home from './component/Home'
import NavBar from './component/NavBar'
import Projects from './component/Projects'
import Service from './component/Service'
import Testimonials from './component/Testimonials'

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