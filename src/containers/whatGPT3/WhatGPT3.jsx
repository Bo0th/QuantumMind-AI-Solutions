import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section_margin' id='wgpt3'>
     <Feature title='What is GPT-3' text='GPT-3, or the third iteration of the Generative Pre-trained Transformer, is a state-of-the-art language processing AI model developed by OpenAI. It belongs to the Transformer architecture family, which is a type of neural network architecture designed for natural language processing tasks.'/>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilites are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
      
        <Feature title='Chatbots' text='Chatbots use the capabilities of GPT-3 to generate human-like responses in natural language, making them suitable for engaging in conversations with users.'/>
        <Feature title='Knowledgebase' text='GPT-3 can be used for creating a knowledgebase-like system by leveraging its natural language understanding and generation capabilities.'/>
        <Feature title='Education'text='GPT-3 can be used for educational purposes by providing information, explanations, and responses to questions. Its natural language processing capabilities make it suitable for generating coherent and contextually relevant educational content.'/>
      </div>
    </div>
  )
}

export default WhatGPT3
