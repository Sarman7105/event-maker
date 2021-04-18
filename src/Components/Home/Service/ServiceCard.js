import React from 'react';
import './serviceCard.css'

const ServiceCard = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="p-5 card-container">
                <img src={service.url} alt="service" />
                <h4>{service.name}</h4>
                <button className="btn">Order Now</button>
            </div>
        </div>
    );
};

export default ServiceCard;