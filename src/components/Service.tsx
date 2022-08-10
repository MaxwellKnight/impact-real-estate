import React from 'react'

interface ServiceInterface {
    serviceId: number,
    serviceHeading: string,
    serviceIcon: string,
    serviceText: string
}

const Service: React.FC = () => {
    return (
        <div className="service__body__item">
            <img src="" alt="" className="service__body__icon" />
            <div className="text-container">
                <p className="service__body__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores corrupti
                    dolorem natus tempora, nostrum quo beatae non dolores ab doloribus rem odit minus! Id repellendus voluptatibus
                    dolore exercitationem aperiam ad!</p>
            </div>
        </div>
    )
}

export default Service