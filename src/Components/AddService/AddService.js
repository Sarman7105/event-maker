import React from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const AddService = () => {
	return (
		<div className="row">
			<div className="col-md-2 p-1">
				<Sidebar />
			</div>
			<div className="col-md-10 mt-5 p-1">
				<div className="col-md-6">

					<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						Service Title
					</label>
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Service Name"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">
						Example textarea
					</label>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" />
                </div>
                
                <div class="mb-3">
					<input
						type="file"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Service Name"
					/>
				</div>

				</div>
				
			</div>
		</div>
	);
};

export default AddService;
