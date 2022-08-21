import React from 'react'

const Review: React.FC = () => {
    return (
        <div className="reviews__card">
            <div className="reviews__card-text">
                <p></p>
            </div>
            <div className="reviews_card-user">
                <span>מקסוול נייט</span>
                <img src="" alt="review subbmitter" />
                <div className="reviews__card-rating">
                    {/* Rating icons goes here */}
                </div>
            </div>
        </div>
    )
}

export default Review