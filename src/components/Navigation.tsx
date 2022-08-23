import React, { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useWidth } from '../context/WindowWidthContext'

import NavLink from './NavList'

interface ClassesInterface {
    div: string,
    ul: string,
    li: string
}

const Navigation: React.FC = () => {
    const [isListShown, setIsListShown] = useState<boolean>(false)
    const hamburger = useRef<HTMLDivElement>(null)
    const isMobile: boolean | null = useWidth()

    const classes: ClassesInterface = {
        div: isMobile || isListShown ? 'mobile-nav' : 'container flex-row',
        ul: isMobile || isListShown ? 'mobile-nav__list' : 'nav__list flex-row',
        li: isMobile || isListShown ? 'mobile-nav__list-item' : 'nav__list-item'
    }

    const handleNavClick = () => {
        setIsListShown(false)
        hamburger.current?.classList.remove('brighten')
        hamburger.current?.classList.toggle('clicked')
    }

    const handleOnClick = (): void => {
        setIsListShown(prevIsShown => !prevIsShown)
        !isListShown ? hamburger.current?.classList.add('brighten') : hamburger.current?.classList.remove('brighten')
        hamburger.current?.classList.toggle('clicked')
    }

    return (
        <motion.nav className="nav" >

            <motion.div
                layout
                initial={{ y: isMobile ? '-100%' : 0 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', duration: 3, bounce: .2 }}
                className="nav__wrapper"
            >
                <AnimatePresence>
                    {/*printing the nav list if the user is on desktop*/}
                    {!isMobile || isListShown ? <NavLink classes={classes} handleNavClick={handleNavClick} /> : ''}
                </AnimatePresence>
                <div className="nav__logo">
                    <a href='#top'><img src={require('../assets/logo2.png')} className="nav__logo-icon" aria-label='בית'></img></a>
                </div>

                {/*print the hamburger icon if the user in mobile*/}
                {isMobile ? <div className='nav__hamburger' onClick={handleOnClick}><div ref={hamburger} className="nav__menu"></div></div> : ''}
            </motion.div>
        </motion.nav>
    )
}

export default Navigation