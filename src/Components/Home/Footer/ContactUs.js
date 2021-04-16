import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <div ClassName="m-2">
            <h3>Contact Us</h3>
            <p> <FontAwesomeIcon icon={faMapMarkerAlt} /> {" "} 67/2,Rajpara,Rajshahi-Court,Rajpara,Rajshahi</p>
            <p> <FontAwesomeIcon icon={faPhoneAlt} /> {" "} +8801763-930179 </p>
            <p> <FontAwesomeIcon icon={faEnvelope} /> {"  "} sarman7105@gmail.com</p>
        </div>
    );
};

export default ContactUs;