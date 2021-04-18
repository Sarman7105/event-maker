import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
	const [ reviews, setReviews ] = useState([]);
	useEffect(() => {
		const url = 'https://shrouded-springs-84958.herokuapp.com/reviews';
		fetch(url).then((res) => res.json()).then((data) => setReviews(data));
	}, []);
	return (
		<div style={{backgroundColor:"#ffffff"}} className="p-5">
            <div className="container">
                <div style={{ margin:"auto"}} className="col-md-6"><h5 className="fs-3">What Our Client Says</h5></div>
                <div className="row gy-5 justify-content-center align-items-center">
                    {
                        reviews.map((review) => <ReviewCard review={review} id={review._id} />)
                    }
                </div>
			</div>
		</div>
	);
};

export default Review;
