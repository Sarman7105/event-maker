import React from 'react';
import './Client.css'

const Client = () => {
    return (
        <div style={{backgroundColor:"#ffffff"}} className="p-5">
            <div className="container">
                <div style={{ margin:"auto"}} className="col-md-6"><h5 className="fs-3">Our Clients</h5></div>
            <div className="row text-center align-items-center" >
                    <div className="col-md-4 p-3 client-container">
                        <img className="img-fluid" src="https://i.ibb.co/kqbrkyn/mailchimp.png" alt="wedding-Event-1" border="0" />
                        

                    </div>
                    <div className="col-md-4 p-3 client-container">
                        <img src="https://i.ibb.co/fkPTc6m/wordpress.png" alt="corporate-Event-1" border="0" />
                        
                    </div>
                    <div className="col-md-4 p-3 client-container">
                        <img src="https://i.ibb.co/y6rH22c/envato.png" alt="birthday-Event-1" border="0" />
                    </div>
			</div>
		</div>
        </div>
    );
};

export default Client;