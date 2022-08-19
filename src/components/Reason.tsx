import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { IntersectionOptions, useInView } from 'react-intersection-observer'

import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ReasonInterface {
    reasonId: number,
    reasonHeading: string,
    reasonImg: string,
    reasonText: string
}

const Reason: React.FC = () => {

    const { ref, inView } = useInView({ threshold: .2 })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({ scale: 1 })

        } else {
            animation.start({ scale: 0 })
        }
    }, [inView])

    return (
        <motion.div
            ref={ref}
            animate={animation}
            transition={{ type: 'spring', duration: .5, bounce: .2 }}
            className="reasons__item"
        >
            <h4 className="reasons__item__heading">זמינות 24/7</h4>
            <FontAwesomeIcon icon={faPhone} className='reasons__item__logo' />
            <p className="reasons__item__text">לנו חשוב להיות ישרים וקשובים לצרכים שלך,
                יש לנו אחריות ומקצועיות לממש את הבקשות שלך.
                "האד הרוצה לחולל שינוי הוא
                זה שרואה את הדרך ומבין כי התוצאה זה תופעת ליווי ".</p>
        </motion.div>
    )
}

export default Reason