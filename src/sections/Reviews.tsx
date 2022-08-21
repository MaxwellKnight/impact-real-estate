import React from 'react'
import Review from '../components/Review'
// import { ReviewInterface } from '../utils/interfaces'

const Reviews: React.FC = () => {
    return (
        <section id='reviews' className="reviews">
            <h1 className="reviews__heading">לקוחות מספרים</h1>
            <Review />
            <Review />
            <Review />
        </section>
    )
}

export default Reviews