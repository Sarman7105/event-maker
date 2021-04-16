import React from 'react';
import Navbar from '../../SharedF/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Footer/>
        </div>
    );
};

export default Home;