import React from 'react'
import Review from '../components/Review'
// import { ReviewInterface } from '../utils/interfaces'

const Reviews: React.FC = () => {
    return (
        <section id='reviews' className="reviews">
            <Review />
            <Review />
            <Review />
        </section>
    )
}

export default Reviews