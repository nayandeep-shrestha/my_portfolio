import React from 'react'
import './skills.css'
import {BiCodeCurly} from 'react-icons/bi'
import {TfiAngleDown} from 'react-icons/tfi'

const Frontend = (props) => {
    
  return (
    <div onClick={() => props.setList('frontend')}
         className={props.list === 'frontend' ? 'skills-open': 'skills-close'} >
      <div className="skills-header">
        <BiCodeCurly className='skills-icon'/>
        <div>
          <h3 className="skills-title">Frontend Developer</h3>
          <span className="skills-subtitle">experience..</span>
        </div>
        <TfiAngleDown className='skills-arrow'/>
      </div>
      <div className="skills-list grid">
        <div className="skills-data">
          <div className="skills-titles">
            <h3 className="skills-name">HTML</h3>
            <span className="skills-number">90%</span>
          </div>
          <div className="skills-bar">
            <span className="skills-percent skills-html"></span>
          </div>
        </div>
        <div className="skills-data">
          <div className="skills-titles">
            <h3 className="skills-name">CSS</h3>
            <span className="skills-number">60%</span>
          </div>
          <div className="skills-bar">
            <span className="skills-percent skills-css"></span>
          </div>
        </div>
        <div className="skills-data">
          <div className="skills-titles">
            <h3 className="skills-name">Javascript</h3>
            <span className="skills-number">70%</span>
          </div>
          <div className="skills-bar">
            <span className="skills-percent skills-js"></span>
          </div>
        </div>
        <div className="skills-data">
          <div className="skills-titles">
            <h3 className="skills-name">React</h3>
            <span className="skills-number">60%</span>
          </div>
          <div className="skills-bar">
            <span className="skills-percent skills-react"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend