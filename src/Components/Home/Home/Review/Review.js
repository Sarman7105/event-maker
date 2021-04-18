import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Review = () => {
	const [ reviews, setReviews ] = useState([]);
	useEffect(() => {
		const url = 'https://shrouded-springs-84958.herokuapp.com/reviews';
		fetch(url).then((res) => res.json()).then((data) => setReviews(data));
	}, []);
	return (
		<div style={{backgroundColor:"#f5f5f6"}} className="p-5">
            <div className="row">
                <div style={{ margin:"auto"}} className="col-md-6"><h5 className="fs-3">our services</h5></div>
                <div className="container d-flex justify-content-center align-items-center">
                    {
                        reviews.map((service) => <ServiceCard service={service} id={service._id} />)
                    }
                </div>
			</div>
		</div>
	);
};

export default Review;
