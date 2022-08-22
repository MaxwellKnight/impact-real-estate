import { faDollarSign, faEarth, faPhone, faShield } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const reasonsData = [
    {
        reasonId: 0,
        reasonHeading: 'זמינות 24/7',
        reasonText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur, a veritatis ipsa architecto nisi aliquid eos adipisci temporibus nihil odit doloribus. Sed, et provident!',
        reasonLogo: <FontAwesomeIcon icon={faPhone} color={'rgb(129 244 225)'} className='reasons__item__logo'></FontAwesomeIcon>,
        borderColor: 'rgb(129 244 225)'
    },
    {
        reasonId: 1,
        reasonHeading: 'חיסכון בעלויות',
        reasonText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur, a veritatis ipsa architecto nisi aliquid eos adipisci temporibus nihil odit doloribus. Sed, et provident!',
        reasonLogo: <FontAwesomeIcon icon={faDollarSign} color={'rgb(255 114 159)'} className='reasons__item__logo'></FontAwesomeIcon>,
        borderColor: 'rgb(255 114 159)'
    },
    {
        reasonId: 2,
        reasonHeading: 'ביטוח',
        reasonText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur, a veritatis ipsa architecto nisi aliquid eos adipisci temporibus nihil odit doloribus. Sed, et provident!',
        reasonLogo: <FontAwesomeIcon icon={faShield} color={'rgba(255 159 28)'} className='reasons__item__logo'></FontAwesomeIcon>,
        borderColor: 'rgba(255 159 28)'
    },
    {
        reasonId: 3,
        reasonHeading: 'שירות דיגיטלי',
        reasonText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur, a veritatis ipsa architecto nisi aliquid eos adipisci temporibus nihil odit doloribus. Sed, et provident!',
        reasonLogo: <FontAwesomeIcon icon={faEarth} color={'rgba(63 41 43)'} className='reasons__item__logo'></FontAwesomeIcon>,
        borderColor: 'rgba(63 41 43)'
    }
]


export { reasonsData }