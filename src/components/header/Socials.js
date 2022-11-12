import React from 'react'
import './social.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header-social'>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><BsTwitter/></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default Socials