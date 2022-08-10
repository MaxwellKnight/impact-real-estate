import React from 'react'
import Reason from '../components/Reason'

interface ReasonInterface {
    reasonId: number,
    reasoneHeading: string,
    reasonImg: string,
    reasonText: string
}

interface PropsInterface {
    reasons: ReasonInterface[]
}

const Reasons: React.FC = () => {
    return (
        <section className="reasons container">
            <h1 className="reasons__heading heading">סיבות</h1>
            <h3 className="reasons__subheading"></h3>
            <div className="grid reasons__container">
                <Reason />
                <Reason />
                <Reason />
                <Reason />
            </div>
        </section>
    )
}

export default Reasons