import React from 'react'
import './skills.css'
import {FiServer} from 'react-icons/fi'
import {TfiAngleDown} from 'react-icons/tfi'

const Backend = (props) => {
   
  return (
    <div onClick={() => props.setList('backend')} 
        className={props.list === 'backend'? 'skills-open': 'skills-close'}>
      <div className="skills-header">
        <FiServer className='skills-icon'/>
        <div>
          <h3 className="skills-title">Backend Developer</h3>
          <span className="skills-subtitle">experience..</span>
        </div>
        <TfiAngleDown className='skills-arrow'/>
      </div>
      <div className="skills-list grid">
        <div className="skills-data">
          <div className="skills-titles">
            <h3 className="skills-name">Node JS</h3>
            <span className="skills-number">65%</span>
          </div>
          <div className="skills-bar">
            <span className="skills-percent skills-node"></span>
          </div>
        </div>
        <div className="skills-data">
          <div className="skills-titles">
            <h3 className="skills-name">Express</h3>
            <span className="skills-number">60%</span>
          </div>
          <div className="skills-bar">
            <span className="skills-percent skills-express"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend