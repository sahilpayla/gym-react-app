import React, { useState } from 'react'
import './Header.css'

export default function Header() {

    const [active, setActive] = useState(false);


    return (
        <div className='container-header'>
            <div className='main'>
                <div className='logo'>
                    FunctionUp Gym
                </div>

                <div className='middle-part'>
                    <p>
                        <div >
                            <a href="#home">Home</a>
                        </div>
                    </p>
                    <p>
                        <div >
                            <a href="#about">About</a>
                        </div>
                    </p>
                    <p>
                        <div>
                            <a href="#pricing">Pricing</a>
                        </div>
                    </p>
                    <p>
                        <div>
                            <a href="#program">Programe</a>
                        </div>
                    </p>
                </div>

                <div className='register'>Register Now</div>
                
                {!active ? <div className='menubtn' onClick={() => setActive(true)}>
                    <i class="fa-solid fa-bars"></i>
                </div> 
                
                :
                
                <div className='crossbtn' onClick={() => setActive(false)}>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                }
                
                
            </div>
            

            <div className={active ? "navbar active" : "navbar"}>
                <p>
                    <a href="#home">Home</a>
                </p>
                <p>
                    <a href="#about">About</a>
                </p>
                <p>
                    <a href="#pricing">Pricing</a>
                </p>
                <p>
                    <a href="#program">Programe</a>
                </p>
            </div>
        </div>

    )
}
