import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilies are beyond our imagination</h1>
        <p>Need to find something to add here related to tech and change the rest of the info on this page as it is complete garbage</p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility
