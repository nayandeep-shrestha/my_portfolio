import { useState, useEffect } from 'react';
import Loader from './components/loader/Loader'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Header from './components/header/Header'
import Skills from './components/skills/Skills'

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, [])

  return (
    <>
      {loading? 
        <Loader/> :
        <body>
          <Header/>
          <Nav/>
          <About/>
          <Skills/>
          <Portfolio/>
          <Contact/>
        </body> 
      }
    </>
  );
}

export default App;
