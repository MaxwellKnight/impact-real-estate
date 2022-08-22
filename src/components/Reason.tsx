import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { ReasonProps } from '../utils/interfaces'

const Reason: React.FC<ReasonProps> = ({ reason }: ReasonProps) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const { reasonHeading, reasonLogo, borderColor } = reason
    const { ref, inView } = useInView({ threshold: .2 })
    const animation = useAnimation()

    useEffect(() => {
        if (!isScrolled) {
            if (inView) {
                animation.start({ scale: 1 })
                setIsScrolled(true)
            }
            else {
                animation.start({ scale: 0 })
            }
        }
    }, [inView, animation, isScrolled])

    return (
        <motion.div
            ref={ref}
            animate={animation}
            transition={{ type: 'spring', duration: .5, bounce: .2 }}
            className="reasons__item"
            style={{ borderTop: `5px solid ${borderColor}` }}
        >
            <h4 className="reasons__item__heading">{reasonHeading}</h4>
            {reasonLogo}
            <p className="reasons__item__text">לנו חשוב להיות ישרים וקשובים לצרכים שלך,
                יש לנו אחריות ומקצועיות לממש את הבקשות שלך.
                "האד הרוצה לחולל שינוי הוא
                זה שרואה את הדרך ומבין כי התוצאה זה תופעת ליווי ".</p>
        </motion.div>
    )
}

export default Reason