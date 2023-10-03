import React from 'react'
import './navbar.css'
import { useState } from 'react'
import MainLogo from '../../assets/mainLogo.png'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <header className={colorChange? 'nav fixed-top nav-fixed': 'nav fixed-top'}>
      <div className="nav-container container">
        <div className="nav-logo">
          <a href="#home"
            onClick={() => setActive('#home')}
            className={active === '#home' ? 'active' : ''}>
            <img src={MainLogo} alt="" width="20px" height="20px" />
            {/* <span className='nav-text'>Nayan<sub><RxDotFilled/></sub></span> */}
          </a>
        </div>
        <div className="nav-menus">
          <a href="#about"
            onClick={() => setActive('#about')}
            className={active === '#about' ? 'active nav-under' : 'nav-under'}>
            <span className='nav-text'>About</span>
          </a>
          <a href="#skills"
            onClick={() => setActive('#skills')}
            className={active === '#skills' ? 'active nav-under' : 'nav-under'}>
            <span className='nav-text'>Skills</span>
          </a>
          <a href="#portfolio"
            onClick={() => setActive('#portfolio')}
            className={active === '#portfolio' ? 'active nav-under' : 'nav-under'}>
            <span className='nav-text'>Portfolio</span>
          </a>
          <a href="#contact"
            onClick={() => setActive('#contact')}
            className={active === '#contact' ? 'active nav-under' : 'nav-under'}>
            <span className='nav-text'>Contact</span>
          </a>
          {/* <div className="nav-toggle"><BiSun/></div> */}
        </div>
      </div>
    </header>
  )
}

export default Navbar