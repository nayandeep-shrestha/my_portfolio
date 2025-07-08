import './social.css'
import {BsGithub, BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header-social'>
        <a href="https://github.com/nayandeep-shrestha" target="_blank" rel="noreferrer" className='social-icon'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/nayandeep-shrestha-a9a08a23a/" target="_blank" rel="noreferrer" className='social-icon'><BsLinkedin/></a>
        <a href="https://twitter.com/_nayandeep_" target="_blank" rel="noreferrer" className='social-icon'><BsTwitter/></a>
        <a href="https://www.instagram.com/nayandeep_shrestha/" target="_blank" rel="noreferrer" className='social-icon'><BsInstagram/></a>
    </div>
  )
}

export default Socials