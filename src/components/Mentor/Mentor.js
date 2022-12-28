import React from 'react'
import style from './Mentor.module.css';
import trainer1 from './images/1.jpg'
import trainer2 from './images/2.jpg'
import trainer3 from './images/3.jpg'

export default function Mentor() {
  return (
   <section id="about">
     <div className={style.container}>
        <div className={style.headline}>The Professional Trainer</div>
        <div className={style.box}>
            <div className={style.section1}>
                <img src={trainer1}></img>
                <div className={style.trainername}>
                    Joseph
                </div>
            </div>
            <div className={style.section1}>
                <img src={trainer2}></img>
                <div className={style.trainername}>
                    Liza
                </div>
            </div>
            <div className={style.section1}>
                <img src={trainer3}></img>
                <div className={style.trainername}>
                    Aryan
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}
