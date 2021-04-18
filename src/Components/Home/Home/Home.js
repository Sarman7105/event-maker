import React from 'react';
import Navbar from '../../SharedF/Navbar/Navbar';
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
            <Footer/>
        </div>
    );
};

export default Home;