import React, { useState, useEffect } from 'react'
import Service from '../components/Service'
import ServiceExpanded from '../components/ServiceExpanded'
import { servicesData } from '../data/services'
import { useWidth } from '../context/WindowWidthContext'
import { motion } from 'framer-motion'

import { ServiceInterface } from '../utils/interfaces'


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
        <motion.section

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="services" id="services"
        >
            <h1 className="services__heading">השירותים שלנו</h1>
            <p className="services__text text">חברתנו מתמחה באיזור הנגב והדרום, אנו דוגלים בדרך עם שיטה ייחודית<br /> הגורמת ללקוחותינו לשוב אלינו והופכת אותם לשגרירים.</p>

            <motion.main className="services__body">
                <motion.div className="services__body__slider">
                    {
                        services ? services.map(service =>
                            <Service key={service.serviceId} service={service} handleOnClick={handleOnClick} />
                        ) :
                            ''
                    }
                </motion.div>
                {
                    !useWidth() &&
                    <ServiceExpanded service={services[activeService]} />
                }

            </motion.main>
        </motion.section>
    )
}

export default Services