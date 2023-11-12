import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing With GPT-3 OpenAI
        </h1>
        <p>Yet bad any for traveling assitance indulgence unpleasein. Not thoughts all exercise blessing. Indulgence way everythin joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>          
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Let's get started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='People'/>
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='Ai'/>
        </div>
      
    </div>
  )
}

export default Header
