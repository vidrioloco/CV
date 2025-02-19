import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {

  return (
    <div>  
      <Header />     
      <Main />
      <Projects />
      <Aboutme />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
