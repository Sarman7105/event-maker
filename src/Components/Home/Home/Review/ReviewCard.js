import React from 'react';
import './Review.css'

const ReviewCard = ({review}) => {
    return (
        <div className="col-md-4">
            <div className="p-5 m-2 review-card">
                <img src="https://i.ibb.co/0MpFx3F/user.png" alt="user" border="0"/>
                <h4>{review.name}</h4>
                <h6>{review.companyName}</h6>
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;