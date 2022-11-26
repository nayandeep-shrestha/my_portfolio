import React, { useRef } from 'react';
import './form.css'
import Modal from 'react-modal'
import emailjs from 'emailjs-com';
import { VscChromeClose } from 'react-icons/vsc'

Modal.setAppElement('#root');

const Form = () => {
  const [modalOpen, setOpen] = React.useState(false);
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

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
    <div>
      <button onClick={openModal} className="btn">Send a Message </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className='contact-form-popup'
        overlayClassName='contact-form-overlay'
      >
        <VscChromeClose onClick={closeModal} className='contact-form-icon' />
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <div id="name" className='form'>
            <input type="text"
              name="name"
              className="form-control"
              required />
            <span></span>
            <label id="name-label" htmlFor="name" className='label'>Name</label>
          </div>
          <div id="email" className='form'>
            <input type="text"
              name="email"
              className="form-control"
              required />
            <span></span>
            <label id="email-label" htmlFor="email" className='label'>Email</label>
          </div>
          <div id="subject" className='form'>
            <input type="text"
              name="subject"
              className="form-control"
              required />
            <span></span>
            <label id="subject-label" htmlFor="subject" className='label'>Subject</label>
          </div>
          <div id="message" className='form'>
            <textarea name="message"
              className="form-control"
              required />
            <span></span>
            <label id="message-label" htmlFor="message" className='label'>Message</label>
          </div>
          <button type="submit" className='btn'>Send Message</button>
        </form>
      </Modal>
    </div>
  )
}

export default Form