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
        <h4>Join Us on the Journey</h4>
        <h1 className='gradient__text'>The possibilies are beyond our imagination</h1>
        <p>Are you ready to be a part of the QuantumMind revolution? Explore our career opportunities, collaborate with us, or stay updated on our latest breakthroughs. Together, we're shaping a future where AI transcends boundaries.</p>
        <h4>Sign up today to get started</h4>
      </div>
    </div>
  )
}

export default Possibility
