import React from 'react';
import Company from './Company';
import ContactUs from './ContactUs';
import './Footer.css';
import Updates from './Updates';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="container d-flex justify-content-center">
				<div className="col-md-4 bg-success">
					<Updates />
				</div>
				<div className="col-md-4 bg-info">
					<Company />
				</div>
				<div className="col-md-4 bg-danger">
					<ContactUs />
				</div>
			</div>
		</div>
	);
};

export default Footer;
