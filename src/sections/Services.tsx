import React, { useState } from 'react'
import Service from '../components/Service'

interface ServiceInterface {
    serviceId: number,
    serviceHeading: string,
    serviceIcon: string,
    serviceText: string,
    serviceIsActive: boolean
}

const Services: React.FC = () => {

    const [services, setServices] = useState<ServiceInterface | null>(null)
    const [activeService, setActiveService] = useState<number>(0)

    return (
        <section className="services">
            <h1 className="services__heading">השירותים שלנו</h1>
            <p className="services__text text">חברתנו מתמחה באיזור הנגב והדרום, אנו דוגלים בדרך עם שיטה ייחודית<br /> הגורמת ללקוחותינו לשוב אלינו והופכת אותם לשגרירים.</p>

            <main className="services__body">
                <div className="services__body__slider">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>

                <div className="grid grid--no-gap">
                    <div className="grid__item">
                        <h1 className="services__subheading heading"></h1>
                        <p className="service__subtext"></p>
                    </div>
                    <div className="grid__item">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="service__attachment__logo">
                    <img src="" alt="" />
                </div>
            </main>
        </section>
    )
}

export default Services