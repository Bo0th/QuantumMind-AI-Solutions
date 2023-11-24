import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='15th Dec 2023' title="Securing Tomorrow's Data: Unveiling QuantumMind's Quantum Data Encryption"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='26th Nov 2023' title="Decoding the Future: How QuantumMind's AI is Shaping Tomorrow's Industries"/>
          <Article imgUrl={blog03} date='13th Oct 2023' title='Beyond the Code: The Ethical Revolution in Quantum AI Technology'/>
          <Article imgUrl={blog04} date='29th Sept 2023' title="Revolutionizing Learning: The QuantumMind Approach to AI-Powered Education"/>
          <Article imgUrl={blog05} date='10th Aug 2023' title="Green Tech, Greener Planet: QuantumMind's Role in Environmental Conservation"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
