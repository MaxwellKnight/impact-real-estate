import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'

const servicesData = [
    {
        serviceId: 0,
        serviceHeading: "מכירה ורכישת נכס",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: true,
        serviceDropDownHeading: "מכירה ורכישת נכס",
        serviceDropDownText: "טקסט 1",
        serviceDropDownImg: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        serviceId: 1,
        serviceHeading: "שיפוץ והשבחת נכסים",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
        serviceDropDownHeading: "שיפוץ והשבחת נכסים",
        serviceDropDownText: "טקסט 2",
        serviceDropDownImg: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2196&q=80"
    },
    {
        serviceId: 2,
        serviceHeading: "השכרה וניהול נכסים",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
        serviceDropDownHeading: "השכרה וניהול נכסים",
        serviceDropDownText: "טקסט 3",
        serviceDropDownImg: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
    },
    {
        serviceId: 3,
        serviceHeading: "בדיקת שוכרים  ועוד",
        serviceIcon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />,
        serviceText: `לרכוש דירה זה אחד הרגעים המרגשים ביותר ואנחנו נשמח מאוד ללוות .אתכם באופן מקצועי, יעיל, ממוקד שיעזור לכם לרכוש את דירת החלומות שלכם!!`,
        serviceIsActive: false,
        serviceDropDownHeading: "בדיקת שוכרים",
        serviceDropDownText: "טקסט 4",
        serviceDropDownImg: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
]

export { servicesData }