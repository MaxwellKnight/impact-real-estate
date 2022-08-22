import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Review: React.FC = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const animation = useAnimation()
    const { ref, inView } = useInView({ threshold: .5 })

    useEffect(() => {
        if (!isScrolled) {
            if (inView) {
                animation.start({ scaleY: 1, opacity: 1 })
                setIsScrolled(true)
            }
            else animation.start({ scaleY: 0, opacity: 0 })
        }
    }, [inView, isScrolled, animation])

    return (
        <motion.div
            ref={ref}
            animate={animation}
            transition={{ type: 'spring', duration: 1, bounce: .5, delay: .1 }}
            className="reviews__card"
        >
            <div className="reviews__card-submitter">
                <div className="right">
                    <FontAwesomeIcon className='reviews__card-submitter__img' icon={faUser} />
                    <span className='reviews__card-submitter__name'>ישראל ישראלי</span>
                    <div className="reviews__card-submitter__rating">
                        <FontAwesomeIcon icon={faStar} color='#0c74b0' />
                        <FontAwesomeIcon icon={faStar} color='#0c74b0' />
                        <FontAwesomeIcon icon={faStar} color='#0c74b0' />
                        <FontAwesomeIcon icon={faStar} color='#0c74b0' />
                        <FontAwesomeIcon icon={faStar} color='#0c74b0' />
                    </div>
                </div>
                <div className="left">
                    <p className='reviews__card-submitter__text'>
                        הגעתי אל המשרד לבנות תכנית עסקית בהתאם לדרישות התקציב
                        ובתום שני סיורי דירות מצאתי את מבוקשי!
                        מודה על השירות, אין לי ספק שנפגש שוב.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Review