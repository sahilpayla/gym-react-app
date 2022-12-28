import './Section.css'
import videoBg from './assets/video.mp4'
import React from 'react'

export default function Section() {
    return (
        <div className='container'>
            <div className='overlay'> </div>
            <div className='left'>
                <video src={videoBg} autoPlay loop muted />
                <div className='content'>
                    <h1>1. Choice Your Service </h1>
                    <h1>2. Schedule Your Visit !</h1>
                    <h1>3. Provide Your Info ....</h1>
                </div>
            </div>
        </div>
    )
}
