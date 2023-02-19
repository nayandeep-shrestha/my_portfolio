import React from 'react'
import './home.css'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Home = () => {
  return (
    <section id="header">
        <div className='header-container'>
          <div className='header-content'>
            <h3>Hello, my name is </h3>
            <h1>Nayandeep Shrestha</h1>
            <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius tempore? Alias vero fugiat illo? Officiis impedit ratione ad laborum minima perferendis!
    I am a Frontend Developer        
    </p>
            <a href="#contact" className='btn'>Let's Chat</a> 
          </div>
          <div className='header-me'>
            <div className='header-me-img'>
              <img src={ME} alt="me" />
            </div>
          </div>
      </div>
        <Socials/>
    </section>
  )
}

export default Home
