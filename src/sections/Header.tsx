import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { useWidth } from '../context/WindowWidthContext'

const portraitYakir: string = require('../assets/images/agents-01.png')

const Header: React.FC<{}> = () => {

    const isMobile: boolean | null = useWidth()

    return (
        <header className="header">
            <main className="header__body flex">
                <motion.div
                    layout
                    initial={{ x: '100%', opacity: isMobile ? 0 : 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, bounce: .3 }}
                    className="flex__item"
                >
                    <img src={portraitYakir} alt="yakir the founder" loading="lazy" className="header__body__img" />
                </motion.div>
                <motion.div
                    layout
                    initial={{ x: '-100%' }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, bounce: .3 }}
                    className="flex__item"
                    data-type="inverted"
                >
                    <motion.div className="header__body__card">
                        <h1 className="header__body__card__heading">אימפקט</h1>
                        <p className="header__body__card__text text">משדרנו מתמחה במתן שירותים בהיקף מלא בעולם הנדלן <br /><span>מכירה | רכישה | השכרה | יד ראשונה ועוד ..</span></p>

                        <div className="header__body__card__actions">
                            <div className="flex__item">
                                <button className="btn">דברו איתנו !</button>
                            </div>
                            <div className="flex__item">
                                <div className="social-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div className="social-icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div className="social-icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </header>
    )
}

export default Header