// import './App.css';
import { useState, useEffect } from 'react';
import Loader from './components/loader/Loader'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'

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
          <Nav/>
          <About/>
          <Contact/>
        </body> 
      }
    </div>
  );
}

export default App;
