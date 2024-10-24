import React from 'react';
import NavBar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';

const LandingPage = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <NavBar />
            <HeroSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
