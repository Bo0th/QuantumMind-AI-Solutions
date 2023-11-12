import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Improving ends distrust instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Become the tended active',
    text: 'Something something somthing darkside something something somthing complete. '
  },
  {
    title: 'Message or am Nothing',
    text: 'Be the change that you wish to see in the world.'
  },
  {
    title: 'Really boy law county',
    text: "Laws regarding personal data protection ensure individuals' privacy rights, limiting unauthorized access and promoting responsible data handling by organizations"
  },

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future Is Now And You Just Need To Realize It. Step Into The Future Today & Make It Happen.</h1>
        <p>Request early access to get started</p>
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
