import React from 'react';
import Navbar from '../../SharedF/Navbar/Navbar';
import Client from '../Client/Client';
import EventOverViews from '../EventOverViews/EventOverViews';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Service />
            <Review />
            <EventOverViews />
            <Client/>
            <Footer />
            
        </div>
    );
};

export default Home;