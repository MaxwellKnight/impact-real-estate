import React from 'react'

interface ReasonInterface {
    reasonId: number,
    reasonHeading: string,
    reasonImg: string,
    reasonText: string
}

const Reason: React.FC = () => {
    return (
        <div className="flex reasons__item">
            <h4 className="reason__heading"></h4>
            <img src="" alt="" className="reason__logo" />
            <p className="reason__text"></p>
        </div>
    )
}

export default Reason