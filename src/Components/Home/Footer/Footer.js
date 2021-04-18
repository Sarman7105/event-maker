import React from 'react';
import Company from './Company';
import ContactUs from './ContactUs';
import './Footer.css';
import Updates from './Updates';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="container">
				<div className="row gy-5 justify-content-evenly">
					<div className="col-md-4 ">
						<div className="d-flex justify-content-center">
							<Updates />
						</div>
						
					</div>
					<div className="col-md-4">
						<div className=" d-flex justify-content-center">
							<Company/>
						</div>
						
					</div>
					<div className="col-md-4 ">
						<div className=" d-flex justify-content-center">
							<ContactUs />
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
