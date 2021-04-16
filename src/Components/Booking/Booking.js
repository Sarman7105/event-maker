import React from 'react';
import Sidebar from '../../Components/DashBoard/Sidebar/Sidebar';
import ProcessPayment from './ProcessPayment';

const Booking = () => {
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
							id="exampleFormControlInput1"
							placeholder="Enter Your Name"
						/>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">
							Email Address
						</label>
						<input
							type="text"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="Enter Your Email"
						/>
					</div>
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">
							Service Name
						</label>
						<input
							type="text"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="Enter Service Name"
						/>
					</div>
					<div class="mb-3">
						<ProcessPayment></ProcessPayment>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
