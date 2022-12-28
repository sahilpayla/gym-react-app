import React from 'react'
import './ProgramCard.css'

export default function ProgramCard() {
    return (
        <section id="program">
            <div className='page-1'>

                <div className='containerCard'>
                    <div className='logoCard'>
                        <img src="https://i.pinimg.com/originals/da/c8/96/dac8965a410040dab29cb5318bdec30d.jpg"></img>
                    </div>
                    <div className='line1'>Cardio </div>
                    <p>
                        lorem ipsium dorum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                </div>
                <div className='containerCard'>
                    <div className='logoCard'>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/muscle-logo-design-template-1b33a3ccc5f552dcc03afd17b4ac0701_screen.jpg?ts=1607448513"></img>
                    </div>
                    <div className='line1'>Muscle Gaining</div>
                    <p>
                        lorem ipsium dorum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.<br /><br />
                    </p>
                </div>
                <div className='containerCard'>
                    <div className='logoCard'>
                        <img src="https://previews.123rf.com/images/makstrv/makstrv1512/makstrv151200009/48780366-bodybuilder-from-the-front-double-biceps-badge-emblem-.jpg"></img>
                    </div>
                    <div className='line1'>Strength</div>
                    <p>
                        lorem ipsium dorum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                </div>

            </div>
        </section>
    )
}
