import React from 'react'
import style from './SubSection.module.css'

export default function SubSection() {
    return (
        <section id="pricing">

            <div className={style.container}>

                <div className={style.headline}>Choose Your Plan</div>

                <div className={style.box}>
                    <div className={style.active}>
                        <div className={style.logoCard}>
                            <img src="https://www.nicepng.com/png/full/16-165556_dumbbells-clipart-group-fitness-weights-icon-white-png.png"></img>
                        </div>
                        <div className={style.long_dumbell}><img></img></div>
                        <div className={style.pricing}>$ 100 <span style={{ fontWeight: 'normal', fontSize: "20px" }}>/month</span></div>
                        <div className={style.plan_name}>SILVER PLAN</div>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <button>Start Free Trial</button>
                    </div>
                    <div className={style.active_gold}>
                        <div className={style.logoCard}>
                            <img src="https://www.nicepng.com/png/full/16-165556_dumbbells-clipart-group-fitness-weights-icon-white-png.png"></img>
                        </div>
                        <div className={style.long_dumbell}><img></img></div>
                        <div className={style.pricing}>$ 200 <span style={{ fontWeight: 'normal', fontSize: "20px" }}>/month</span></div>
                        <div className={style.plan_name}>GOLD PLAN</div>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <button>Start Free Trial</button>
                    </div>
                    <div className={style.active}>
                        <div className={style.logoCard}>
                            <img src="https://www.nicepng.com/png/full/16-165556_dumbbells-clipart-group-fitness-weights-icon-white-png.png"></img>
                        </div>
                        <div className={style.long_dumbell}><img></img></div>
                        <div className={style.pricing}>$ 300 <span style={{ fontWeight: 'normal', fontSize: "20px" }}>/month</span></div>
                        <div className={style.plan_name}>DIAMOND PLAN</div>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <p><i class="fa-regular fa-circle-check"></i> Open Gym</p>
                        <button>Start Free Trial</button>
                    </div>


                </div>

            </div>
        </section>
    )
}
