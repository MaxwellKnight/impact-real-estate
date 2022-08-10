import React from 'react'
import Review from '../components/Review'

interface ReviewInterface {
    firstName: string,
    lastName: string,
    review: string,
    rating: number
}

interface PropsInterface {
    reviews: ReviewInterface[]
}

const Reviews: React.FC = () => {
    return (
        <section className="reviews container">
            <h1 className="reviews__heading heading inverted"></h1>
            <Review />
            <Review />
            <Review />
        </section>
    )
}

export default Reviews