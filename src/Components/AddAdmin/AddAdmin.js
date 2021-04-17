import React, { useState, useEffect } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const AddAdmin = () => {
	const [ email, setEmail ] = useState('');
	

	const handleOnBlur = (event) => {
		console.log(event.target.name, ' ', event.target.value);
		if (event.target.name === 'email') {
			setEmail(event.target.value);
		}
	};

	

	const handleSubmit = (event) => {
		const adminData = {email};
		console.log(adminData);
		postData(adminData);
		event.preventDefault();
	};

	const postData = (adminData) => {
		// const url = `https://shrouded-springs-84958.herokuapp.com/addAdmin`;
		const url = `http://localhost:5055/addAdmin`;

		// console.log(eventData);
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(adminData)
		}).then((res) => console.log('server side response', res));
	};

	return (
		<div className="row">
			<div className="col-md-2 p-1">
				<Sidebar />
			</div>
			<div className="col-md-10 mt-5 p-1">
				<div className="col-md-6">
					<form onSubmit={handleSubmit}>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">
								Email:
							</label>
							<input
								type="email"
								class="form-control"
								name="email"
								placeholder="Service Name"
								onBlur={handleOnBlur}
							/>
						</div>

						<div class="mb-3">
							<input type="submit" className="btn btn-info" value="Submit"/>
						</div>
					</form>
				</div>
				
			</div>
		</div>
	);
};

export default AddAdmin;