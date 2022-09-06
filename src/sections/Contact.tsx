import React from 'react'
import ContactForm from '../components/ContactForm';


const Contact: React.FC = () => {


    return (
        <section id="contact" className="contact">
            <h1 className="contact__heading heading inverted">יצירת קשר</h1>
            <ContactForm />
        </section>
    )
}

export default Contact