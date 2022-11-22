import React, { useRef } from 'react';
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"
import './contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iwy8g6f', 'template_bq98dlb', form.current, '_YnmibzVGZqqefdou')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
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
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <div id="name" className='form'>
            <input type="text" 
                   name="name"
                   className="form-control"
                   required/>
            <span></span>
            <label id="name-label" htmlFor="name" className='label'>Name</label>
          </div> 
          <div id="email" className='form'>
            <input type="text" 
                   name="email"
                   className="form-control"
                   required/>
            <span></span>
            <label id="email-label" htmlFor="email" className='label'>Email</label>
          </div>
          <div id="subject" className='form'>
            <input type="text" 
                   name="subject"
                   className="form-control"
                   required/>
            <span></span>
            <label id="subject-label" htmlFor="subject" className='label'>Subject</label>
          </div>
          <div id="message" className='form'>
            <textarea name="message"
                      className="form-control"
                      required/>
            <span></span>
            <label id="message-label" htmlFor="message" className='label'>Message</label>
          </div>
        <button type="submit" className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact