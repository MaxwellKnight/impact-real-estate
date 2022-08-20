import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface ServiceInterface {
    service: {
        serviceId: number,
        serviceHeading: string,
        serviceIcon: JSX.Element,
        serviceText: string,
        serviceIsActive: boolean,
        serviceDropDownHeading: string,
        serviceDropDownText: string,
        serviceDropDownImg: string,
    }
}

const ServiceExpanded = ({ service }: ServiceInterface) => {
    return (
        <AnimatePresence>
            <motion.div

                transition={{ type: 'spring', duration: 1 }}
                className="services__body__dropdown grid"
            >
                <motion.div
                    key={Date.now()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="services__body__dropdown__right"
                >
                    <motion.h4>{service.serviceDropDownHeading}</motion.h4>
                    <motion.p >{service.serviceDropDownText}</motion.p>
                    <motion.button>לפרטים</motion.button>
                </motion.div>
                <motion.div
                    key={Date.now() + 1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="services__body__dropdown__left"
                >
                    <motion.img src={service.serviceDropDownImg} alt="" />
                </motion.div >
            </motion.div>
        </AnimatePresence>
    )
}

export default ServiceExpanded