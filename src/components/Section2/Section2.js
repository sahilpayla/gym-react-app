import './Section.css'
import videoBg from './assets/video.mp4'
// import videoBg from videoBg.mp4
import React from 'react';

export default function Section() {
    return (
        <div className='container'>
            <div className='overlay'> </div>
            <div className='left'>
                <video src={videoBg} autoPlay loop muted />
                <div className='content'>
                    <h1>Kill Your <span style={{}}>Fear Of Weakness</span></h1>
                    <h1><span style={{}}>The body achieves what the <span style={{}}>mind believes</span></span> </h1>
                    <h1><span style={{}}>Start</span> Your Gym ....</h1>
                </div>
            </div>
        </div>
    )
}
