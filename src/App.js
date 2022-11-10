// import './App.css';
import { useState, useEffect } from 'react';
import Loader from './components/loader/Loader'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Project from './components/project/Project'
import Header from './components/header/Header'


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, [])

  return (
    <div>
      {loading? 
        <Loader/> :
        <body>
          <Header/>
          <Nav/>
          <About/>
          <Project/>
          <Contact/>
        </body> 
      }
    </div>
  );
}

export default App;
