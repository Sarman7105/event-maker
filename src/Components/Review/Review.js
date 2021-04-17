import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const Review = () => {
	const [ user, setUser ] = useContext(UserContext);
	const [ name, setName ] = useState('');
	const [ companyName, setCompanyName ] = useState('');
    const [review, setReview] = useState('');

    const handleOnBlur = (event) => {
		console.log(event.target.name, ' ', event.target.value);
		if (event.target.name === 'name') {
			setName(event.target.value);
		}
		if (event.target.name === 'companyName') {
			setCompanyName(event.target.value);
		}
		if (event.target.name === 'review') {
			setReview(event.target.value);
		}
	};
    
    const handleSubmit = (event) => {
		// const url = `https://shrouded-springs-84958.herokuapp.com/addService`;
        const url = `http://localhost:5055/addReview`;
        const reviewDetails = { name, companyName, review };
        console.log(reviewDetails);

		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(reviewDetails)
		}).then((res) => console.log('server side response', res));
        event.preventDefault();
	};

	return (
		<div className="row">
			<div className="col-md-2 p-1">
				<Sidebar />
			</div>
			<div className="col-md-10 p-1 mt-5">
				<div className="col-md-6">
					<h6 style={{ display: 'inline-block' }}>Review</h6>
					<h6 style={{ float: 'right' }}>{user.name}</h6>

					<form onSubmit={handleSubmit}>
						<div className="mb-3 mt-3">
							<input
								type="text"
								className="form-control"
								name="name"
                                placeholder="Your Name"
                                onBlur={handleOnBlur}
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								name="companyName"
                                placeholder="Company's Name and Designation"
                                onBlur={handleOnBlur}
							/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlTextarea1" className="form-label">
								Description
							</label>
							<textarea className="form-control" name="review" onBlur={handleOnBlur} rows="3" />
						</div>

						<div className="mb-3">
							<input
								type="submit"
								value="Submit"
								className="btn"
								style={{ backgroundColor: '#F15B22', color: '#ffffff' }}
							/>
						</div>
					</form>
                </div>
			</div>
		</div>
	);
};

export default Review;
