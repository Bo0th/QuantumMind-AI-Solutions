import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/QMAIS_logo2.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>
      <div className='gpt3__footer-button'>
        <p>Get access now</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>1550 Silicon Valley, Drench Way, America</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Blog</p>
          <p>Social Media</p>
          <p>FAQs</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Press Kit</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>1550 Silicon Valley, Drench Way, America</p>
          <p>555-164-223</p>
          <p>QuantumMind@emailme.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 QuantumMind AI Solutions. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
