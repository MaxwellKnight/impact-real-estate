import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface ReasonInterface {
    reasonId: number,
    reasonHeading: string,
    reasonImg: string,
    reasonText: string
}

const Reason: React.FC = () => {
    return (
        <div className="reasons__item">
            <h4 className="reasons__item__heading">זמינות 24/7</h4>
            <FontAwesomeIcon icon={faPhone} className='reasons__item__logo' />
            <p className="reasons__item__text">לנו חשוב להיות ישרים וקשובים לצרכים שלך,
                יש לנו אחריות ומקצועיות לממש את הבקשות שלך.
                "האד הרוצה לחולל שינוי הוא
                זה שרואה את הדרך ומבין כי התוצאה זה תופעת ליווי ".</p>
        </div>
    )
}

export default Reason