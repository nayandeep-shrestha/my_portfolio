import React from 'react'
import './navbar.css'
import { useState } from 'react'
import MainLogo from '../../assets/mainLogo.png';
import { CgMenu } from "react-icons/cg"

const NavBar = () => {
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
  const showMenu = () => {
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <header className={colorChange ? 'nav fixed-top nav-fixed' : 'nav fixed-top'}>
      <div className="nav-container container">
        <div className="nav-logo">
          <a href="#home"
            onClick={() => setActive('#home')}
            className={active === '#home' ? 'active' : ''}>
            <img src={MainLogo} alt="" />
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
        </div>
        <button className="nav-ham" type="button" onClick={showMenu}>
            <CgMenu size={25} />
        </button>
        <div id="mobile-nav" className="offcanvas-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="#about"
                onClick={() => setActive('#about')}
                className={active === '#about' ? 'active nav-under' : 'nav-under'}>
                <span className='nav-text'>About</span>
              </a>
            </li>
            <li className="list-group-item dropdown">
              <a href="#skills"
                onClick={() => setActive('#skills')}
                className={active === '#skills' ? 'active nav-under' : 'nav-under'}>
                <span className='nav-text'>Skills</span>
              </a>

            </li>
            <li className="list-group-item">
              <a href="#portfolio"
                onClick={() => setActive('#portfolio')}
                className={active === '#portfolio' ? 'active nav-under' : 'nav-under'}>
                <span className='nav-text'>Portfolio</span>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#contact"
                onClick={() => setActive('#contact')}
                className={active === '#contact' ? 'active nav-under' : 'nav-under'}>
                <span className='nav-text'>Contact</span>
              </a>
            </li>
          </ul>
        </div>

      </div>



    </header>
  )
}

export default NavBar