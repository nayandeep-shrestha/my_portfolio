import React from 'react'
import './nav.css'
import {GrHomeRounded} from 'react-icons/gr'
import {FiUser} from 'react-icons/fi'
import {FiBook} from 'react-icons/fi'
import {TbMessageCircle} from 'react-icons/tb'

const Nav = () => {
  return (
    <nav>
        <a href="#"><GrHomeRounded/></a>
        <a href="#about"><FiUser/></a>
        <a href="#project"><FiBook/></a>
        <a href="#contact"><TbMessageCircle/></a>
    </nav>
  )
}

export default Nav