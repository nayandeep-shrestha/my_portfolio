import React from 'react'
import './about.css'
import CV from '../../assets/cv.pdf'
import {TbAward} from 'react-icons/tb'
import {MdOutlineLibraryBooks} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h2 style={{textAlign: 'center'}}>About Me</h2>
      <div className='about-container'>        
        <div className='about-me'>
          
        </div>       

      <div className='about-content'>
          <div className='about-cards'>
            <div className='about-card'>
              <TbAward className='about-icon'/>
              <h4>Experience</h4>
              <small>....</small>
            </div>
            <div className='about-card'>
              <MdOutlineLibraryBooks className='about-icon'/>
              <h4>Projects</h4>
              <small>....</small>
            </div>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a href={CV} className='btn' download>Download CV</a>
        </div>
      </div>
    </section>
    
  )
}

export default About