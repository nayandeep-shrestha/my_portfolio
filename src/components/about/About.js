import React from 'react'
import './about.css'
import CV from '../../assets/cv.pdf'
import DP from '../../assets/about.png'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <div className='about-container container'>
        <div className='about-me'>
          <img src={DP} alt="DP" className='about-img' />
        </div>
        <div className='about-content'>
          {/* <div className='about-cards'>
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
          </div> */}
          <h3>LOOKING FOR A WEB DEVELOPER ?  </h3>
          <h1>Hi, I'm Nayandeep</h1>
          <p>
            I'm a dedicated web developer with a specialization in creating outstanding digital experiences. Currently, I'm actively seeking new job opportunities. I bring both real-world project experience and a portfolio of personal projects, showcasing my expertise in both frontend and full-stack development.
          </p>
          <div class="my-info">
            <div class="single-info"><span>Name:</span>
              <p>Nayandeep Shrestha</p>
            </div>
            <div class="single-info"><span>From:</span>
              <p>Kathmandu, Nepal</p>
            </div>
            <div class="single-info"><span>Email:</span>
              <p><a href="mailto:shresnayan@gmail.com">shresnayan@gmail.com</a></p>
            </div>
            <div class="single-info"><span>Phone:</span>
              <p><a href="tel:+977 9861236946">+977 9861236946</a></p>
            </div>
          </div>
          <ul class="follow-social">
            <li>
              <h5>Follow me on </h5>
            </li>
            <li>
              <a href="https://github.com/nayandeep-shrestha" target="_blank" rel="noreferrer" className='follow-icons'><BsGithub /></a>
            </li>
            <li>
              <a href="https://twitter.com/_nayandeep_" target="_blank" rel="noreferrer" className='follow-icons'><BsTwitter /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nayandeep-shrestha-a9a08a23a/" target="_blank" rel="noreferrer" className='follow-icons'><BsLinkedin /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/nayandeep_shrestha/" target="_blank" rel="noreferrer" className='follow-icons'><BsInstagram /></a>
            </li>
          </ul>
          <div className="about-btn">
            <a href="#contact" className='btn'>Let's Chat</a>
            <a href={CV} className='btn-var' download>Download CV</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About