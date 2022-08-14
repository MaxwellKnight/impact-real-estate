import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'

import { useWidth } from '../context/WindowWidthContext'


interface ServiceInterface {
    serviceId: number,
    serviceHeading: string,
    serviceIcon: string,
    serviceText: string,
    serviceIsActive: boolean,
    setActiveService: () => React.Dispatch<React.SetStateAction<number>>
}

const Service: React.FC = () => {
    const isMobile: boolean | null = useWidth()

    return (
        <div className="services__body__slider__item">
            <div className="services__body__slider__item__container">
                <header>
                    <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />
                    <h3 className="serivces__body__slider__item__heading">מכירה והשכרת נכס</h3>
                </header>
                <p className="services__body__slider__item__text">
                    לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות
                    .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!
                </p>
            </div>
        </div>
    )
}

export default Service