import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Unleashing the Future of Artificial Intelligence
        </h1>
        <p>Welcome to QuantumMind AI Solutions, where innovation meets intelligence. We are at the forefront of revolutionizing the AI landscape, pushing the boundaries of what's possible to create a smarter, more connected world. Sign up now to start using our state of the art AI.</p>
        <div className='gpt3__header-content__input'>          
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Let's get started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='People'/>
          <p>1,654 signed up in last 24 hours</p>
        </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='Ai'/>
        </div>
      
    </div>
  )
}

export default Header
