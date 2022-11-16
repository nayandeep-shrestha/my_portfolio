import { useState, useEffect } from 'react';
import Loader from './components/loader/Loader'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },500)
  }, [])

  return (
    <>
      {loading? 
        <Loader/> :
        <body>
          {/* <Navbar/> */}
          <Home/>
          <Nav/>
          <About/>
          <Skills/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </body> 
      }
    </>
  );
}

export default App;
