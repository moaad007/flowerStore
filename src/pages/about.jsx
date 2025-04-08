import React from 'react';
import Nav from '../../components/Nav';
const About = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Nav />
            <h1>About Us</h1>
            <p>
                Welcome to Flower Store! We are passionate about providing the freshest and most beautiful flowers for every occasion. 
                Our mission is to bring joy and color to your life through our carefully curated floral arrangements.
            </p>
            <p>
                Thank you for choosing us to be a part of your special moments. We look forward to serving you!
            </p>
        </div>
    );
};

export default About;