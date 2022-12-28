import React from 'react'
import Section from '../Section/Section'
import './StartPage.css'

export default function StartPage() {
  return (
    <section id="home">
      <div className='start-page'>
        <div className='headline'>Make Youself A Body Builder</div>
        <div className='headline2'>
          <p>
            We Provide Our Best opputunity and qualified trainers for best workout yourself as you want
          </p>
        </div>

        <div className='btn-container'>
          <button className='sign-up'>Subscription</button>
          {/* <button className='view-detail'>View Details</button> */}
        </div>
      </div>
    </section>
  )
}
