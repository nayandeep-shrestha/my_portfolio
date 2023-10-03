import React from 'react'
import './home.css'
import { TypeAnimation } from 'react-type-animation';
import ME from '../../assets/me.png'
import Socials from './Socials'

const Home = () => {
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
                'Web Developer',
                1000,
                'Web Designer',
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
        </div>
        <div className='home-me'>
          <div className='home-me-img'>
            {/* <img src={ME} alt="me" /> */}
          </div>
        </div>
      </div>
      <Socials />
    </section>
  </>
  )
}

export default Home
