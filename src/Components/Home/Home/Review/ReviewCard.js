import React from 'react';


const ReviewCard = ({review}) => {
    return (
        <div className="col-md-4 col-12 card-container m-3">
            <div className="p-5">
               <img src="https://i.ibb.co/0MpFx3F/user.png" alt="user" border="0">
                <h4>{review.name}</h4>
                <button className="btn">Order Now</button>
            </div>
        </div>
    );
};

export default ReviewCard;