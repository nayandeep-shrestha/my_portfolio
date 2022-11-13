import React from 'react'
import './skills.css'
import {HiOutlineSwatch} from 'react-icons/hi2'
import {TfiAngleDown} from 'react-icons/tfi'

const UI_UX = () => {
  return (
    <div className="skills-content skills-close">
            <div className="skills-header">
              <HiOutlineSwatch className='skills-icon'/>
              <div>
                <h3 className="skills-title">Designer</h3>
                <span className="skills-subtitle">experience..</span>
              </div>
              <TfiAngleDown className='skills-arrow'/>
            </div>
            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">Photoshop</h3>
                  <span className="skills-number">70%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percent skills-photo"></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">Figma</h3>
                  <span className="skills-number">45%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percent skills-figma"></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">Canva</h3>
                  <span className="skills-number">70%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percent skills-canva"></span>
                </div>
              </div>
            </div>
            </div>
  )
}

export default UI_UX