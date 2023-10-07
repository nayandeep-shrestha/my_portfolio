import React from 'react'
import './footer.css'
import {BsGithub, BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-content">
            <a href='https://github.com/nayandeep-shrestha' target="_blank" rel="noreferrer">
                <div>Designed & Built by Nayandeep Shrestha</div>
            </a>
        </div>
        <div className="footer-social">
            <a href="https://github.com/nayandeep-shrestha" target="_blank" rel="noreferrer" className='social-icon'><BsGithub className='footer-socialIcon'/></a>
            <a href="https://www.linkedin.com/in/nayandeep-shrestha-a9a08a23a/" target="_blank" rel="noreferrer" className='social-icon'><BsLinkedin className='footer-socialIcon'/></a>
            <a href="https://twitter.com/_nayandeep_" target="_blank" rel="noreferrer" className='social-icon'><BsTwitter className='footer-socialIcon'/></a>
            <a href="https://www.instagram.com/nayandeep_shrestha/" target="_blank" rel="noreferrer" className='social-icon'><BsInstagram className='footer-socialIcon'/></a> 
        </div>
    </footer>
  )
}

export default Footer