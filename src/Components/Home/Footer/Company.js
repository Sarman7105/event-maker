import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Company = () => {
	return (
		<div className="m-2">
			<h3>Company</h3>
			<div>
				<p>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> {' '} About Us
				</p>
				<p>
				    <FontAwesomeIcon icon={faAngleDoubleRight} /> {' '} Privacy Policy
				</p>
                <p>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />{' '} Career
				</p>
				<p>
				    <FontAwesomeIcon icon={faAngleDoubleRight} /> {' '} Blogs
				</p>
				<p>
				    <FontAwesomeIcon icon={faAngleDoubleRight} /> {' '} Contact Us
				</p>
			</div>
		</div>
	);
};

export default Company;
