import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Healthcare',
    text: 'Transforming patient care with predictive diagnostics, personalized treatment plans, and optimized resource allocation.'
  },
  {
    title: 'Finance',
    text: 'Revolutionizing financial strategies with real-time risk analysis, fraud detection, and algorithmic trading solutions.'
  },
  {
    title: 'Autonomous Systems',
    text: 'Powering the future of autonomous vehicles, drones, and robotics with advanced perception and decision-making capabilities.'
  },
  {
    title: 'Adaptive Learning Platforms',
    text: "QuantumMind's Adaptive Learning Platforms utilize AI algorithms to understand each student's unique learning style, pace, and strengths. This enables the creation of personalized learning experiences, ensuring that students receive tailored content and support, ultimately fostering a more effective and engaging educational journey."
  },

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>QuantumMind AI Solutions: Transforming Industries, Empowering You</h1>
        <p>Join to start using AI today</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
