import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const portraitYakir: string = require('../assets/images/agents-01.png')

const Header: React.FC<{}> = () => {
    return (
        <header className="header">
            <main className="header__body flex">
                <div className="flex__item">
                    <img src={portraitYakir} alt="yakir the founder" loading="lazy" className="header__body__img" />
                </div>
                <div className="flex__item" data-type="inverted">
                    <div className="header__body__card">
                        <h1 className="header__body__card__heading heading">אימפקט</h1>
                        <p className="header__body__card__text text">משדרנו מתמחה במתן שירותים בהיקף מלא בעולם הנדלן <br /><span>מכירה | רכישה | השכרה | יד ראשונה ועוד ..</span></p>

                        <div className="header__body__card__actions">
                            <div className="flex__item">
                                <button className="btn">דברו איתנו !</button>
                            </div>
                            <div className="flex__item">
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                        </div>

                        <div className="card__body__logo"></div>
                    </div>
                </div>
            </main>
        </header>
    )
}

export default Header