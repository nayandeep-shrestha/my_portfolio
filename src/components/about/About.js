import React from 'react'
import './about.css'
import ME from '../../assets/texture 2.png'

const About = () => {
  return (
    <section id="about">
      <h2 style={{textAlign: 'center'}}>About Me</h2>

      <div className='about-container'>
        <div className='about-content'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        
        <div className='about-img'>
          <img src={ME} />
        </div>
      </div>
    </section>
  )
}

export default About