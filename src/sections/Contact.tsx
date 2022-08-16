import React, { useState } from 'react'

interface FormStateInterface {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
}

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

    return (
        <section id="contact" className="contact container">
            <h1 className="contact__heading heading inverted">יצירת קשר</h1>
            <div className="contact__card">
                <form className="contact__card-form">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleOnChange}
                        id="firstName"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleOnChange}
                        id="lastName"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleOnChange}
                        id="email"
                    />
                    <input
                        type="phone"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleOnChange}
                        id="email"
                    />
                    <button className='btn' type='submit'>שליחת טופס</button>
                </form>
            </div>
        </section>
    )
}

export default Contact