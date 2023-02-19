import { useState, useEffect } from 'react';
import Loader from './components/loader/Loader'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },1000)
  }, [])

  return (
    <div>
      {loading? 
        <Loader/> :
        <>
          <Home/>
          <Nav/>
          <About/>
          <Skills/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </>
      }
    </div>
  );
}

export default App;
