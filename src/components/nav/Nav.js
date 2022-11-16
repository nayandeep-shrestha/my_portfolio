import React from 'react'
import './nav.css'
import {RiHome4Line} from 'react-icons/ri'
import {FiUser} from 'react-icons/fi'
import {FiBook} from 'react-icons/fi'
import {FaAward} from 'react-icons/fa'
import {TbMessageCircle} from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState("#header")
  return (
    <nav>
        <a href="#header" 
           onClick={() => setActive('#header')}
           className={active === '#header' ? 'active': ''}>
          <RiHome4Line/></a>
        <a href="#about" 
           onClick={() => setActive('#about')}
           className={active === '#about' ? 'active' : ''}>
          <FiUser/>
        </a>
        <a href="#skills"
          onClick={() => setActive('#skills')}
          className={active === '#skills' ? 'active' : ''}>
          <FiBook/>
        </a>
        <a href="#portfolio"
          onClick={() => setActive('#portfolio')}
          className={active === '#portfolio' ? 'active' : ''}>
          <FaAward/>
        </a>
        <a href="#contact"
          onClick={() => setActive('#contact')}
          className={active === '#contact' ? 'active' : ''}>
          <TbMessageCircle/>
        </a>
    </nav>
  )
}

export default Nav

