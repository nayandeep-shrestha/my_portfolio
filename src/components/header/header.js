import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header id="header">
        <div className='header-container'>
          <div className='header-content'>
            <h3>Hi! I Am, </h3>
            <h1>Nayandeep Shrestha</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius tempore? Alias vero fugiat illo? Officiis impedit ratione ad laborum minima perferendis!
            </p>
            <a href="#contact" className='btn'>Let's Chat</a> 
          </div>
          <div className='header-me'>
            <div className='header-me-img'>
              <img src={ME} alt="me" />
            </div>
        </div>
        <Socials/>
      </div>
    </header>
  )
}

export default Header