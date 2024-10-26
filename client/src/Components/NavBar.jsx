import React from 'react';

const NavBar = () => {
    return (
        <header className="absolute top-0 left-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                <div className="text-2xl font-bold text-indigo-600">
                    Sorting Visualizer
                </div>
                <nav className="hidden md:flex space-x-10">
                    <a href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        About
                    </a>
                    <a href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Features
                    </a>
                    <a href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Contact
                    </a>
                </nav>

            </div>
        </header>
    );
};

export default NavBar;
