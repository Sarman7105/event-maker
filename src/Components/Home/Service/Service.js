import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
	const [ services, setServices ] = useState([]);
	useEffect(() => {
		const url = 'https://shrouded-springs-84958.herokuapp.com/services';
		fetch(url).then((res) => res.json()).then((data) => setServices(data));
	}, []);
	return (
		<div style={{backgroundColor:"#f5f5f6"}} className="p-5">
            <div className="container">
                <div style={{ margin:"auto"}} className="col-md-6"><h5 className="fs-3">our services</h5></div>
                <div className="row gy-5 justify-content-center align-items-center">
                    {
                        services.map((service) => <ServiceCard service={service} id={service._id} />)
                    }
                </div>
			</div>
		</div>
	);
};

export default Service;
