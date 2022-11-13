import React from 'react'
import './portfolio.css'
import Project1 from '../../assets/project1.png'
import {BsArrowRightShort} from 'react-icons/bs'

const Portfolio= () => {
  return (
    <section id="portfolio">
      <div className='portfolio-head'>
        <span>My recent work</span>
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-content">
          <img src={Project1} alt='' className='portfolio-img' />
          <div className="portfolio-data">
            <h3 className="portfolio-title">Wordpress website</h3>
            <p className="portfolio-desc"></p>
            <a href="#" className="btn btn-flex">
              Demo
              <BsArrowRightShort/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio