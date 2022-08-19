import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface ClassesInterface {
    classes: {
        div: string,
        ul: string,
        li: string
    }
    handleNavClick: () => void
}
const NavList = ({ classes, handleNavClick }: ClassesInterface) => {
    return (
        <motion.div
            layout
            className={classes.div}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', duration: .5, bounce: .2 }}
        >
            <ul className={classes.ul} role="list">
                <li className={classes.li} data-type="active"><a href="#" onClick={() => handleNavClick()}>בית</a></li>
                <li className={classes.li} ><a href="#services" onClick={() => handleNavClick()}>שירותים</a></li>
                <li className={classes.li} ><a href="#reasons" onClick={() => handleNavClick()}>למה אנחנו ?</a></li>
                <li className={classes.li} ><a href="#team" onClick={() => handleNavClick()}>הנבחרת</a></li>
                <li className={classes.li} ><a href="#contact" onClick={() => handleNavClick()}>יצירת קשר</a></li>
            </ul>
        </motion.div>
    )
}

export default NavList