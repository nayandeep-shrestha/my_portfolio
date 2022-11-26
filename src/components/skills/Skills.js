import React,{useState} from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import UI_UX from './UI_UX'
import Other from './Other'


const Skills = () => {
  const [list, setList] = useState('frontend');

  return (
    <section id="skills">
        <div className="skills-head">
          <h2>Skills</h2>
          <span>My techinal level</span>
        </div>
        <div className="skills-container grid">
            <div>
              <Frontend list={list} setList={setList} />
              <Backend list={list} setList={setList} />
            </div>
            <div>
              <UI_UX list={list} setList={setList} />
              <Other list={list} setList={setList} />   
            </div>       
        </div>
    </section>
  )
}

export default Skills