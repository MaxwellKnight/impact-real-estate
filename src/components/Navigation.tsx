import React, { useState, useRef } from 'react'
import { useWidth } from '../context/WindowWidthContext'

interface ClassesInterface {
    div: string,
    ul: string,
    li: string
}

const Navigation: React.FC = () => {
    const [isListShown, setIsListShown] = useState<boolean>(false)
    const hamburger = useRef<HTMLDivElement>(null)
    const isMobile: boolean | null = useWidth()

    const toggle = (): void => {
        setIsListShown(prevIsShown => !prevIsShown)
    }

    const printList = (): JSX.Element => {
        const classes: ClassesInterface = {
            div: isMobile || isListShown ? 'mobile-nav' : 'container flex-row',
            ul: isMobile || isListShown ? 'mobile-nav__list' : 'nav__list flex-row',
            li: isMobile || isListShown ? 'mobile-nav__list-item' : 'nav__list-item'
        }
        return (
            <div className={classes.div}>
                <ul className={classes.ul} role="list">
                    <li className={classes.li} data-type="active"><a href="#" onClick={() => handleNavClick()}>בית</a></li>
                    <li className={classes.li} ><a href="#services" onClick={() => handleNavClick()}>שירותים</a></li>
                    <li className={classes.li} ><a href="#reasons" onClick={() => handleNavClick()}>למה אנחנו ?</a></li>
                    <li className={classes.li} ><a href="#team" onClick={() => handleNavClick()}>הנבחרת</a></li>
                    <li className={classes.li} ><a href="#contact" onClick={() => handleNavClick()}>יצירת קשר</a></li>
                </ul>
            </div>
        )
    }

    const handleNavClick = () => {
        setIsListShown(false)
        hamburger.current?.classList.remove('brighten')
    }

    const handleOnClick = (): void => {
        toggle()
        !isListShown ? hamburger.current?.classList.add('brighten') : hamburger.current?.classList.remove('brighten')
    }

    return (
        <nav className="nav">

            <div className="nav__wrapper">
                {/*printing the nav list if the user is on desktop*/}
                {!isMobile || isListShown ? printList() : ''}

                <div className="nav__logo">
                    <span className="nav__logo-icon">Impact</span>
                </div>

                {/*print the hamburger icon if the user in mobile*/}
                {isMobile ? <div className='nav__hamburger' onClick={handleOnClick}><div ref={hamburger} className="nav__menu"></div></div> : ''}
            </div>
        </nav>
    )
}

export default Navigation