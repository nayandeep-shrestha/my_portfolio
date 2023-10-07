import React, { useState } from 'react'
import './home.css'
import { TypeAnimation } from 'react-type-animation';
import ME from '../../assets/me.png'
import CV from '../../assets/cv.pdf'
import Socials from './Socials'

const Home = () => {
  const [showSocial, setShowSocial] = useState('true')
  const toggleSocial = () => {
    if (window.scrollY >= 200) {
        setShowSocial(false);
    }
    else {
        setShowSocial(true);
    }
};
window.addEventListener('scroll', toggleSocial);
  return (<>
    <section id="home">
      <div className='home-container container'>
        <div className='home-content'>
          <h3>Hello, my name is </h3>
          <h1>Nayandeep Shrestha</h1>
          <h2>
            <TypeAnimation
              sequence={[
                500,
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000

              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.75em', display: 'inline-block', fontFamily: 'Outline', color: 'white', letterSpacing: '2px' }}
              repeat={Infinity}
            />
            <span class="cursor typing">&nbsp;</span>
          </h2>
          <p>
            I am a web developer with a passion for coding and a knack for transforming ideas into responsive, dynamic websites.
          </p>
          {/* <p>I thrive on the challenges of building exceptional web solutions.</p> */}
          <a href="#contact" className='btn'>Let's Chat</a>
          <a href={CV} className='btn-secondary' download>Download CV</a>
        </div>
        <div className='home-me'>
          <img src={ME} alt="me" className='home-me-img' />
        </div>
      </div>
      {/* {
        showSocial? <Socials/> : <></>
      } */}
    </section>
  </>
  )
}

export default Home
