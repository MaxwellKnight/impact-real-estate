import React from 'react'
import { motion } from 'framer-motion'
import { NavListProps } from '../utils/interfaces'

const NavList = ({ classes, handleNavClick }: NavListProps) => {
    return (
        <motion.div
            layout
            className={classes.div}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', duration: .5, bounce: .2 }}
        >
            <ul className={classes.ul}>
                <li className={classes.li} data-type="active"><a href="#top" onClick={() => handleNavClick()}>בית</a></li>
                <li className={classes.li} ><a href="#services" onClick={() => handleNavClick()}>שירותים</a></li>
                <li className={classes.li} ><a href="#reasons" onClick={() => handleNavClick()}>למה אנחנו ?</a></li>
                <li className={classes.li} ><a href="#team" onClick={() => handleNavClick()}>הנבחרת</a></li>
                <li className={classes.li} ><a href="#reviews" onClick={() => handleNavClick()}>ביקורות</a></li>
                <li className={classes.li} ><a href="#contact" onClick={() => handleNavClick()}>יצירת קשר</a></li>
            </ul>
        </motion.div>
    )
}

export default NavList