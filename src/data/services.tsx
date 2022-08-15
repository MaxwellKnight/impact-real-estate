import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'

const servicesData = [
    {
        serviceId: 0,
        serviceHeading: "מכירה והשכרת נכס",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: true,
        serviceDropDownHeading: "דף 1",
        serviceDropDownText: "טקסט 1",
        serviceDropDownImg: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2196&q=80"
    },
    {
        serviceId: 1,
        serviceHeading: "מכירה והשכרת נכס",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
        serviceDropDownHeading: "דף 2",
        serviceDropDownText: "טקסט 2",
        serviceDropDownImg: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2196&q=80"
    },
    {
        serviceId: 2,
        serviceHeading: "מכירה והשכרת נכס",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
        serviceDropDownHeading: "דף 3",
        serviceDropDownText: "טקסט 3",
        serviceDropDownImg: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2196&q=80"
    },
    {
        serviceId: 3,
        serviceHeading: "מכירה והשכרת נכס",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
        serviceDropDownHeading: "דף 4",
        serviceDropDownText: "טקסט 4",
        serviceDropDownImg: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2196&q=8"
    }
]

export { servicesData }