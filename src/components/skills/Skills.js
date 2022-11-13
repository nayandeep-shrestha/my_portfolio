import React,{useState,useEffect} from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
// import UI_UX from './UI_UX'
// import Other from './Other'


const Skills = () => {
  const [list, setList] = useState(false);
  const toggle= () => {
    setList(prev => !prev)
  }
    

  return (
    <section id="skills">
        <div className="skills-head">
          <h2>Skills</h2>
          <span>My techinal level</span>
        </div>
        <div className="skills-container grid">
            <Frontend list={list} toggle={toggle} />
            <Backend list={list} toggle={toggle}/>
            {/* <UI_UX />
            <Other />           */}
        </div>
    </section>
  )
}

export default Skills