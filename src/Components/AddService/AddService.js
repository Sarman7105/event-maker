import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const AddService = () => {
	const [ service, setService ] = useState('');
	const [ serviceDetails, setServiceDetails ] = useState('');
	const [ serviceImg, setServiceImg ] = useState('');
	const [ price, setPrice ] = useState('');

	const handleOnBlur = (event) => {
		console.log(event.target.name, ' ', event.target.value);
		if (event.target.name === 'service') {
			setService(event.target.value);
		}
		if (event.target.name === 'price') {
			setPrice(event.target.value);
		}
		if (event.target.name === 'description') {
			setServiceDetails(event.target.value);
		}
	};

	const handlePhoto = (event) => {
		console.log('file changed');
		console.log(event.target.files[0]);
		const imageData = new FormData();
		imageData.set('key', '717503597ea03f1a0b2ff6dad139c297');
		imageData.append('image', event.target.files[0]);
		// console.log({ imageData });
		axios
			.post('https://api.imgbb.com/1/upload', imageData)
			.then(function(response) {
				console.log(response.data.data.display_url);
				setServiceImg(response.data.data.display_url);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	const handleSubmit = (event) => {
		const eventData = {
			name: service,
			details: serviceDetails,
			url: serviceImg,
			value:price
		};
		console.log(eventData);
		postData(eventData);
		event.preventDefault();
	};

	const postData = (eventData) => {
		const url = `https://shrouded-springs-84958.herokuapp.com/addService`;

		// console.log(eventData);
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(eventData)
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
								Service Title
							</label>
							<input
								type="text"
								class="form-control"
								name="service"
								placeholder="Service Name"
								onBlur={handleOnBlur}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">
								Price
							</label>
							<input
								type="text"
								class="form-control"
								name="price"
								placeholder="Price"
								onBlur={handleOnBlur}
							/>
						</div>

						<div class="mb-3">
							<input type="file" class="form-control" onChange={handlePhoto} />
						</div>
						<div class="mb-3">
							<label for="exampleFormControlTextarea1" class="form-label">
								Example textarea
							</label>
							<textarea class="form-control" name="description" onBlur={handleOnBlur} rows="3" />
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

export default AddService;
