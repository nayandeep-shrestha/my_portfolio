import React from 'react'
import './navbar.css'
import { useState } from 'react'
import {FiUser} from 'react-icons/fi'
import {FiBook} from 'react-icons/fi'
import {FaAward} from 'react-icons/fa'
import {TbMessageCircle} from 'react-icons/tb'
import {BiSun} from 'react-icons/bi'
// import {BsMoonStarsFill} from 'react-icons/bs'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [show, setShow] = useState(false)
  let lastScrollY = window.scrollY
  const change = () => {
    if(window.scrollY > lastScrollY){
      setShow(true)
    }else{
      setShow(false)
    }
    lastScrollY = window.scrollY
  }
  window.addEventListener("scroll", change)
  return (
    <navbar className={show ? 'nav nav-hidden': 'nav'}>
      <div className="nav-logo">
        {/* <img src='/logo.png' alt="NS"/> */}
      </div>
      <div className="nav-menus">
        <a href="#about" 
           onClick={() => setActive('#about')}
           className={active === '#about' ? 'active nav-under' : 'nav-under'}>
          <FiUser/>
          <span className='nav-text'>About</span>
        </a>
        <a href="#skills"
          onClick={() => setActive('#skills')}
          className={active === '#skills' ? 'active nav-under' : 'nav-under'}>
          <FiBook/>
          <span className='nav-text'>Skills</span>
        </a>
        <a href="#portfolio"
          onClick={() => setActive('#portfolio')}
          className={active === '#portfolio' ? 'active nav-under' : 'nav-under'}>
          <FaAward/>
          <span className='nav-text'>Portfolio</span>
        </a>
        <a href="#contact"
          onClick={() => setActive('#contact')}
          className={active === '#contact' ? 'active nav-under' : 'nav-under'}>
          <TbMessageCircle/>
          <span className='nav-text'>Contact</span>
        </a>
        <div className="nav-toggle"><BiSun/></div>
      </div>
    </navbar>
  )
}

export default Navbar