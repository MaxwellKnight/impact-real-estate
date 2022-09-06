import React, { useEffect, useState } from 'react'
import { FormStateInterface } from '../utils/interfaces'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormStateInterface>({
        fullName: '',
        email: '',
        phoneNumber: ''
    })

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target

        setFormData(prevState => {
            return ({
                ...prevState,
                [name]: value
            })
        })
    }

    const input = (type: string, name: string, value: string, id: string, label: string): JSX.Element => {
        return (
            <>
                <label htmlFor={id}>{`${label}: `}</label>
                <input type={type} name={name} value={value} onChange={handleOnChange} id={id} required />
            </>
        )

    }

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia25pZ2h0Y29kaW5nIiwiYSI6ImNraW9lMjlseTFicmozMG13cGJieHV4enUifQ.HykWtBIS77zeY-N2OmiyMA';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom

        });
    }, [])
    return (
        <div className="contact__card">
            <div className="contact__card-form">
                <form>
                    {input('text', 'fullName', formData.fullName, 'fullName', 'שם מלא')}
                    {input('email', 'email', formData.email, 'email', 'אימייל')}
                    {input('phone', 'phoneNumber', formData.phoneNumber, 'phoneNumber', 'מספר פלאפון')}
                    <input type='submit' value='שלח טופס' />
                </form>
            </div>
            <div id="map" className='map'></div>
        </div>
    )
}

export default ContactForm