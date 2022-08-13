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
                    <li className={classes.li} data-type="active"><a href="#">בית</a></li>
                    <li className={classes.li} ><a href="#">שירותים</a></li>
                    <li className={classes.li} ><a href="#">למה אנחנו ?</a></li>
                    <li className={classes.li} ><a href="#">הנבחרת</a></li>
                    <li className={classes.li} ><a href="#">יצירת קשר</a></li>
                </ul>
            </div>
        )
    }

    const handleOnClick = (): void => {
        toggle()
        hamburger.current?.classList.toggle('brighten')
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
                {isMobile ? <div ref={hamburger} className="nav__menu" onClick={handleOnClick}></div> : ''}
            </div>
        </nav>
    )
}

export default Navigation

/* 

Hi there, thank you for reaching out.
I visited the link you sent and read about you guys.
BrightData sounds like a really interesting company, I would like 
To have the opportunity to sit down and have a more broad conversation.

Best regards, Maxwell.

*/