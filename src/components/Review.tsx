import React from 'react'

interface ReviewInterface {
    firstName: string,
    lastName: string,
    review: string,
    rating: number
}

const Review: React.FC = () => {
    return (
        <div className="reviews__card">
            <div className="reviews__card-text">
                <p></p>
            </div>
            <div className="reviews_card-user">
                <img src="" alt="review subbmitter" />
                <div className="reviews__card-rating">
                    {/* Rating icons goes here */}
                </div>
            </div>
        </div>
    )
}

export default Review