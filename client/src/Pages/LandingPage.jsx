import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Sorting Visualizer</h1>
            <p className="text-lg mb-4">Visualize various sorting algorithms in action.</p>
            <Link to="/visualizer">
                <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Go to Visualizer
                </button>
            </Link>
        </div>
    );
};

export default LandingPage;
