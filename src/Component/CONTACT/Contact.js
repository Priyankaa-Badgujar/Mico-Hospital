import React from 'react'
import './contact.css';
import contact from '../../assests/contact.jpg'

const Contact = () => {
  return (
    <div>
      <form className='contact-form'>
        <div className='doc-pat'>
        <div className='form-get'>
        <h1 className='head-get'>Get in touch</h1><br/>
        <input type='text' placeholder='Full Name'/><br/><br/>
        <input type='text' placeholder='Mobile'/><br/><br/>
        <input type='text' placeholder='Email'/><br/><br/>
        <input type='text' placeholder='Your Message'id='msg'/><br/><br/>
        <button className='btn-con'>submit</button>
        </div>
        <div>
          <img src={contact} className='pat-pat'/>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
