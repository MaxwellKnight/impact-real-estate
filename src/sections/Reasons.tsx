import React from 'react'
import Reason from '../components/Reason'

interface ReasonInterface {
    reasonId: number,
    reasoneHeading: string,
    reasonLogo: string,
    reasonText: string
}

const Reasons: React.FC = () => {
    return (
        <section className="reasons" id="reasons">
            <h1>הבחירה בידיים שלך</h1>
            <h3>ולמה כדאי לבחור בנו...</h3>
            <div className="reasons__container">
                <Reason />
                <div className='reasons__container__up'>
                    <Reason />
                    <Reason />
                </div>
                <Reason />
            </div>
        </section>
    )
}

export default Reasons