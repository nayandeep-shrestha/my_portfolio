import React from 'react'
import './contact.css'
import Form from './Form'
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"

const Contact = () => {
    return (
    <section id="contact">
      <h2 style={{textAlign: 'center'}}>Get In Touch!</h2>
      <div className='contact-container'>
        <a href="mailto:shresnayan@gmail.com" target="_blank" rel="noreferrer">
          <div className='contact-card card1'>
            <MdOutlineEmail className='contact-icon'/>
            <p>shresnayan@gmail.com</p>
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+9779861236946!text=Hello,how may I help you" target="_blank" rel="noreferrer">
          <div className='contact-card card2'>
           <BsWhatsapp className='contact-icon'/>
           <p>+9779861236946</p>
          </div>
        </a>
        <a href="https://m.me/nayandeep.shrestha" target="_blank" rel="noreferrer">
          <div className='contact-card card3'>
           <RiMessengerLine className='contact-icon'/>
           <p>Nayandeep Shrestha</p>
          </div>
        </a>   
      </div>
      <Form/>
    </section>
  );
}

export default Contact;