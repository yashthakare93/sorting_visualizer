import React from 'react';

const HeroSection = () => {
    return (
        <main className="flex-grow mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24">
                {/* Text Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl font-extrabold text-gray-900">
                        Visualize Sorting Algorithms
                    </h1>
                    <p className="text-lg text-gray-500">
                        A platform to help you understand and explore different sorting algorithms like Bubble Sort, Merge Sort, and more.
                    </p>
                    <div>
                        <a
                            href="/visualizer"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700"
                        >
                            Try the Visualizer
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
