import React from 'react'
import { useWidth } from '../context/WindowWidthContext'
import { motion } from 'framer-motion'


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
    handleOnClick: (idx: number) => void
}

const Service: React.FC<ServiceInterface> = ({ service, handleOnClick }) => {
    const isMobile: boolean | null = useWidth()
    const {
        serviceId,
        serviceHeading,
        serviceIcon,
        serviceText,
        serviceIsActive,
        serviceDropDownHeading,
        serviceDropDownImg,
        serviceDropDownText } = service
    const className: string = serviceIsActive ? 'services__body__slider__item active' : 'services__body__slider__item'

    return (
        <motion.div layout className={className}>
            <motion.div layout className="services__body__slider__item__container" onClick={() => handleOnClick(serviceId)}>
                <header>
                    {serviceIcon}
                    <h3 className="services__body__slider__item__heading">{serviceHeading}</h3>
                </header>
                <p className="services__body__slider__item__text">{serviceText}</p>
            </motion.div>
            {isMobile && serviceIsActive ?
                <motion.div
                    layout
                    animate={{ opacity: 1 }}
                    transition={{ layout: { duration: .5, type: "spring" } }}
                    initial={{ opacity: 0 }}
                >
                    <div className="services__body__dropdown__mobile flex">

                        <div className="services__body__dropdown__mobile__right">
                            <h4 >{serviceDropDownHeading}</h4>
                            <p >{serviceDropDownText}</p>
                            <button>לפרטים</button>
                        </div>
                        <div className="services__body__dropdown__left__mobile">
                            <motion.img layout
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ delay: .3 }}
                                src={serviceDropDownImg}
                                alt=""
                            />
                        </div>
                    </div>
                </motion.div>
                :
                ''
            }
        </motion.div >
    )
}

export default Service