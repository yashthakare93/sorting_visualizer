import React from 'react';
import NavBar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import ImageComparison from '../Components/ImageComparison'; // Import your ImageComparison component

const LandingPage = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col relative overflow-hidden">
            <NavBar />
            <HeroSection />

            {/* Comparison Section */}
            <div className="flex justify-center items-center my-16">
                <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
                    <ImageComparison
                        leftImage="https://assets.aceternity.com/code-problem.png"
                        rightImage="https://assets.aceternity.com/code-solution.png"
                        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LandingPage;
