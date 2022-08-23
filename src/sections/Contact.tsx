import React, { useState } from 'react'
import { FormStateInterface } from '../utils/interfaces'

const Contact: React.FC = () => {

    const [formData, setFormData] = useState<FormStateInterface>({
        firstName: '',
        lastName: '',
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

    const input = (type: string, name: string, value: string, id: string): JSX.Element => {
        return <input type={type} name={name} value={value} onChange={handleOnChange} id={id} />
    }

    console.log(formData)

    return (
        <section id="contact" className="contact container">
            <h1 className="contact__heading heading inverted">יצירת קשר</h1>
            <div className="contact__card">
                <form className="contact__card-form">
                    {input('text', 'firstName', formData.firstName, 'firstName')}
                    {input('text', 'lastName', formData.lastName, 'lastName')}
                    {input('email', 'email', formData.email, 'email')}
                    {input('phone', 'phoneNumber', formData.phoneNumber, 'phoneNumber')}
                    <button className='btn' type='submit'>שליחת טופס</button>
                </form>
            </div>
        </section>
    )
}

export default Contact