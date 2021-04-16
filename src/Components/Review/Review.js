import React from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const Review = () => {
    return (
        <div className="row">
            <div className="col-md-2 p-1">
                <Sidebar></Sidebar>
           </div>
            <div className="col-md-10 p-1 mt-5">
                
                <div className="col-md-6">

                    <h6 style={{display:"inline-block"}}>Review</h6>
                    <h6 style={{float:"right"}}>Name</h6>

                    <div class="mb-3">
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Your Name"
					/>
				</div>
                <div class="mb-3">
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Company's Name and Designation"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">
						Description
					</label>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" />
                </div>
                
                <div className="mb-3">
                    <input type="submit" value="Submit" className="btn col-md-1" style={{backgroundColor:'#F15B22',color:'#ffffff'}}  />
                </div>

                </div>
                
           </div>
        </div>
    );
};

export default Review;