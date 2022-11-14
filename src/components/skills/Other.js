import React from 'react'
import './skills.css'
import {MdMoreVert} from 'react-icons/md'
import {TfiAngleDown} from 'react-icons/tfi'

const Other = (props) => {
  return (
    <div onClick={() => props.setList('other')}
         className={props.list === 'other' ? 'skills-open': 'skills-close'}>
      <div className="skills-header">
        <MdMoreVert className='skills-icon'/>
        <div>
          <h3 className="skills-title">Other</h3>
          <span className="skills-subtitle">experience..</span>
        </div>
        <TfiAngleDown className='skills-arrow'/>
      </div>
      <div className="skills-list">
        <div className="skills-data">
          <div className="skills-titles">
            <h3 className="skills-name">Wordpress</h3>
            <span className="skills-number">80%</span>
          </div>
          <div className="skills-bar">
            <span className="skills-percent skills-photo"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Other