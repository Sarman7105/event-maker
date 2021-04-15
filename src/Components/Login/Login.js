import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            
            <div className="d-flex justify-content-center align-items-center">
                
                <div className="col-md-4 mt-5">
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="logo" src="https://i.ibb.co/DkC1BtF/event-Management-Icon.png" alt="event-Management-Icon" border="0"></img>
                        <h3>Event maker</h3>
                    </div>
                    <h5 className="mt-5">Login with</h5>
                    <button className="login mt-2">
                        <img className="login-image" src="https://i.ibb.co/TgdQSf5/Group-573.png" alt="Group-573" border="0"></img>
                        Continue With Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;