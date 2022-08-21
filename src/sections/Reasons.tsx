import React from 'react'
import Reason from '../components/Reason'
import { reasonsData } from '../data/reasons'

const Reasons: React.FC = () => {
    return (
        <section className="reasons" id="reasons">
            <h1>הבחירה בידיים שלך</h1>
            <h3>ולמה כדאי לבחור בנו...</h3>
            <div className="reasons__container">
                <Reason reason={reasonsData[0]} />
                <div className='reasons__container__up'>
                    <Reason reason={reasonsData[1]} />
                    <Reason reason={reasonsData[2]} />
                </div>
                <Reason reason={reasonsData[3]} />
            </div>
        </section>
    )
}

export default Reasons