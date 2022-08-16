import React, { useState, useEffect } from 'react'
import Service from '../components/Service'
import { servicesData } from '../data/services'
import { useWidth } from '../context/WindowWidthContext'
import { motion } from 'framer-motion'

interface ServiceInterface {
    serviceId: number,
    serviceHeading: string,
    serviceIcon: JSX.Element,
    serviceText: string,
    serviceIsActive: boolean,
    serviceDropDownHeading: string,
    serviceDropDownText: string,
    serviceDropDownImg: string,
}


const Services: React.FC = () => {

    const [services, setServices] = useState<ServiceInterface[]>(servicesData)
    const [activeService, setActiveService] = useState<number>(0)

    const handleOnClick = (idx: number) => {
        setActiveService(idx)
    }

    useEffect(() => {
        setServices(prevServices => {
            return prevServices.map(service => {
                if (service.serviceId === activeService) return { ...service, serviceIsActive: true }
                return { ...service, serviceIsActive: false }
            })
        })
    }, [activeService])


    return (
        <section className="services" id="services">
            <h1 className="services__heading">השירותים שלנו</h1>
            <p className="services__text text">חברתנו מתמחה באיזור הנגב והדרום, אנו דוגלים בדרך עם שיטה ייחודית<br /> הגורמת ללקוחותינו לשוב אלינו והופכת אותם לשגרירים.</p>

            <main className="services__body">
                <div className="services__body__slider">
                    {
                        services ? services.map(service =>
                            <Service key={service.serviceId} service={service} handleOnClick={handleOnClick} />
                        ) :
                            ''
                    }
                </div>
                {
                    !useWidth() &&
                    <div className="services__body__dropdown grid">
                        <div className="services__body__dropdown__right">
                            <h4>{services[activeService].serviceDropDownHeading}</h4>
                            <p >{services[activeService].serviceDropDownText}</p>
                            <button>לפרטים</button>
                        </div>
                        <div className="services__body__dropdown__left">
                            <img src={services[activeService].serviceDropDownImg} alt="" />
                        </div>
                    </div>
                }

            </main>
        </section>
    )
}

export default Services