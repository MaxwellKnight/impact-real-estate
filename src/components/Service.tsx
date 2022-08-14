import React, { Dispatch, SetStateAction, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'

import { useWidth } from '../context/WindowWidthContext'


interface ServiceInterface {
    service: {
        serviceId: number,
        serviceHeading: string,
        serviceIcon: JSX.Element,
        serviceText: string,
        serviceIsActive: boolean
    }
    handleOnClick: (idx: number) => void
}

const Service: React.FC<ServiceInterface> = ({ service, handleOnClick }) => {
    const isMobile: boolean | null = useWidth()
    const { serviceId, serviceHeading, serviceIcon, serviceText, serviceIsActive } = service
    const className: string = serviceIsActive ? 'services__body__slider__item active' : 'services__body__slider__item'

    return (
        <div className={className}>
            <div className="services__body__slider__item__container" onClick={() => handleOnClick(serviceId)}>
                <header>
                    <FontAwesomeIcon icon={faMoneyBill1Wave} className="services__body__slider__item__icon" />
                    <h3 className="serivces__body__slider__item__heading">{serviceHeading}</h3>
                </header>
                <p className="services__body__slider__item__text">{serviceText}</p>
            </div>
        </div>
    )
}

export default Service