import React from 'react';
import { useHistory } from 'react-router';
import './serviceCard.css'

const ServiceCard = ({ service }) => {
    let history = useHistory();
    return (
        <div className="col-md-4">
            <div className="p-5 card-container">
                <img src={service.url} alt="service" />
                <h4>{service.name}</h4>
                <p>${service.value}</p>
                <button className="btn" onClick={()=>history.push(`/booking/${service.name}`)}>Order Now</button>
            </div>
        </div>
    );
};

export default ServiceCard;