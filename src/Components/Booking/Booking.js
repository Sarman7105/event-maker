import React,{useState,useEffect}  from 'react';
import Sidebar from '../../Components/DashBoard/Sidebar/Sidebar';
import ProcessPayment from './ProcessPayment';
import {useParams} from "react-router-dom";

const Booking = () => {
	const [bookingService, setBookingService] = useState([])
	const { service } = useParams();
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [serviceName, setServiceName] = useState(service)
	useEffect(() => {
		const url = `https://shrouded-springs-84958.herokuapp.com/serviceByName?name=${service}`;
		// const url = `http://localhost:5055/serviceByName?name=${service}`;
		// console.log(url);
		fetch(url)
			.then(res => res.json())
			.then(data => {
				console.log(data[0]);
				setBookingService(data[0]);
			})
	},[service])

	
	const handleOnBlur = (event) => {
		console.log(event.target.name, ' ', event.target.value);
		if (event.target.name === 'name') {
			setName(event.target.value);
			// setInfo();
		}
		if (event.target.name === 'email') {
			setEmail(event.target.value);
			// setInfo();
		}
		if (event.target.name === 'serviceName') {
			setServiceName(event.target.value);
			// setInfo();
		}
	};

	return (
		<div className="row">
			<div className="col-md-2 p-1">
				<Sidebar />
			</div>
			<div className="col-md-10 p-1">
				<div className="col-md-6">
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">
							Name
						</label>
						<input
							type="text"
							class="form-control"
							name='name'
							placeholder="Enter Your Name"
							onBlur={handleOnBlur}
              
						/>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">
							Email Address
						</label>
						<input
							type="text"
							class="form-control"
							name='email'
							placeholder="Enter Your Email"
							onBlur={handleOnBlur}
						/>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">
							Service Name
						</label>
						<input
							type="text"
							class="form-control"
							name='serviceName'
							placeholder="Enter Service Name"
							onBlur={handleOnBlur}
							value={service}
						/>
					</div>
					<h4>you have to pay { bookingService?.value}</h4>
					<div class="mb-3">
						<ProcessPayment
							name={name}
							email={email}
							serviceName={serviceName}
							
						>
						</ProcessPayment>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
