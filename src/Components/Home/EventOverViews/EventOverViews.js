import React from 'react';
import './EventOverView.css';

const EventOverViews = () => {
    return (
        <div style={{backgroundColor:"#f5f5f6"}} className="p-5">
            <div className="container">
                <div style={{ margin:"auto"}} className="col-md-6"><h5 className="fs-3">Event OverViews</h5></div>
            <div className="row text-center" >
                    <div className="col-md-4 p-3 overview-container">
                        <img className="img-fluid" src="https://i.ibb.co/Jm081CT/wedding-Event-1.jpg" alt="wedding-Event-1" border="0" />
                        <h4 className="mt-3"> Marriage Event </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nemo ducimus iste eligendi illum, facilis laudantium facere perspiciatis velit consectetur!</p>
                        <p style={{color:'#F15B26'}}>Read More</p>

                    </div>
                    <div className="col-md-4 p-3 overview-container">
                        <img src="https://i.ibb.co/gP3Q3Yw/corporate-Event-1.jpg" alt="corporate-Event-1" border="0" />
                        <h4 className="mt-3"> corporate Event </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nemo ducimus iste eligendi illum, facilis laudantium facere perspiciatis velit consectetur!</p>
                         <p style={{color:'#F15B26'}}>Read More</p>
                    </div>
                    <div className="col-md-4 p-3 overview-container">
                        <img src="https://i.ibb.co/BC3SNRD/birthday-Event-1.jpg" alt="birthday-Event-1" border="0" />
                        <h4 className="mt-3"> Birthday Event </h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nemo ducimus iste eligendi illum, facilis laudantium facere perspiciatis velit consectetur!</p>

                         <p style={{color:'#F15B26'}}>Read More</p>
                    </div>
			</div>
		</div>
        </div>
    );
};

export default EventOverViews;