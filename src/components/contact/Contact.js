import React from 'react'
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"
import './contact.css'

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
        <form className='contact-form'>
          <div id="name" className='form'>
            <label id="name-label" for="name">Name</label>
              <input type="text" 
                     name="name"
                     class="form-control"
                     placeholder="Your Name"
                     required/>
          </div> 
          <div id="subject" className='form'>
            <label id="subject-label" for="subject">Subject</label>
              <input type="text" 
                     name="subject"
                     class="form-control"
                     placeholder=""
                     required/>
          </div>
          <div id="phone" className='form'>
            <label id="phone-label" for="phone">Phone</label>
              <input type="text" 
                     name="phone"
                     class="form-control"
                     placeholder="Your phone no."/>
          </div>
          <div id="message" className='form'>
            <label id="message-label" for="message">Message</label>
              <textarea class="textarea"
                        name="message"
                        placeholder="Type here your message......."></textarea>
          </div>
          <div id='service' className='form'>
            <label>Services</label>
          </div>
          <button type="submit" id="send" className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact