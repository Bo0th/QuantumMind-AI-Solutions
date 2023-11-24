import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section_margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilites are beyond your imagination</h1>
        <p><a href="#blog">Explore The Library</a></p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Quantum AI Integration' text='Our team of experts is pioneering the integration of quantum computing with AI algorithms, ushering in a new era of computation. This fusion not only enhances processing speed but also enables us to solve complex problems that were once deemed impossible.'/>
        <Feature title='Explainable AI' text='Transparency is key. QuantumMind is committed to developing AI models that not only provide accurate predictions but also offer clear insights into their decision-making processes. Our explainable AI technology ensures that users can trust and understand the outcomes.'/>
        <Feature title='Adaptive Learning Networks' text='Traditional machine learning models are static. QuantumMind is revolutionizing AI with adaptive learning networks that evolve and improve over time. Our systems learn from experience, adapting to changing environments and continuously optimizing performance.'/>
        <Feature title='Cognitive Intelligence Synthesis'text='Imagine an AI that not only processes data but understands it. Our Cognitive Intelligence Synthesis (CIS) technology mimics human-like cognitive processes, allowing our AI systems to interpret, reason, and derive context from information. This marks a significant leap towards creating AI that comprehends the world like we do.'/>
      </div>
    </div>
  )
}

export default WhatGPT3
