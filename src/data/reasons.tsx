import { faDollarSign, faEarth, faPhone, faShield } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const reasonsData = [
    {
        reasonId: 0,
        reasonHeading: 'זמינות 24/7',
        reasonText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur, a veritatis ipsa architecto nisi aliquid eos adipisci temporibus nihil odit doloribus. Sed, et provident!',
        reasonLogo: <FontAwesomeIcon icon={faPhone} className='reasons__item__logo'></FontAwesomeIcon>
    },
    {
        reasonId: 1,
        reasonHeading: 'חיסכון בעלויות',
        reasonText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur, a veritatis ipsa architecto nisi aliquid eos adipisci temporibus nihil odit doloribus. Sed, et provident!',
        reasonLogo: <FontAwesomeIcon icon={faDollarSign} className='reasons__item__logo'></FontAwesomeIcon>
    },
    {
        reasonId: 2,
        reasonHeading: 'ביטוח',
        reasonText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur, a veritatis ipsa architecto nisi aliquid eos adipisci temporibus nihil odit doloribus. Sed, et provident!',
        reasonLogo: <FontAwesomeIcon icon={faShield} className='reasons__item__logo'></FontAwesomeIcon>
    },
    {
        reasonId: 3,
        reasonHeading: 'שירות דיגיטלי',
        reasonText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur, a veritatis ipsa architecto nisi aliquid eos adipisci temporibus nihil odit doloribus. Sed, et provident!',
        reasonLogo: <FontAwesomeIcon icon={faEarth} className='reasons__item__logo'></FontAwesomeIcon>
    }
]


export { reasonsData }