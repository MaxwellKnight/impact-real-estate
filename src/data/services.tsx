import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'

const servicesData = [
    {
        serviceId: 0,
        serviceHeading: "מכירה והשכרת רכב",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: true,
    },
    {
        serviceId: 1,
        serviceHeading: "מכירה והשכרת רכב",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
    },
    {
        serviceId: 2,
        serviceHeading: "מכירה והשכרת רכב",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
    },
    {
        serviceId: 3,
        serviceHeading: "מכירה והשכרת רכב",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
    }
]

export { servicesData }