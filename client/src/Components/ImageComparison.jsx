import React, { useState, useRef } from 'react';

const ImageComparison = ({ leftImage, rightImage, className }) => {
    const [sliderPosition, setSliderPosition] = useState(50); // Initial position of the slider
    const containerRef = useRef(null); // Ref for the container

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const { left, width } = containerRef.current.getBoundingClientRect();
            const offsetX = e.clientX - left; // Get the x position relative to the container
            const newSliderPosition = Math.max(0, Math.min(100, (offsetX / width) * 100)); // Calculate percentage
            setSliderPosition(newSliderPosition); // Update the slider position
        }
    };

    return (
        <div className={`relative ${className}`} ref={containerRef} onMouseMove={handleMouseMove}>
            <img
                src={leftImage}
                alt="Before"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300`}
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} // Clip the left image based on slider position
            />
            <img
                src={rightImage}
                alt="After"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300`}
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}% )` }} // Clip the right image based on slider position
            />
            <div
                className="absolute top-0 h-full w-1 bg-gray-500 cursor-pointer"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }} // Position of the slider
            />
        </div>
    );
};

export default ImageComparison;
