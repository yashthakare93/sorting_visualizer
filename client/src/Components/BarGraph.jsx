import React from 'react';

const BarGraph = ({ array, sorting }) => {
    return (
        <div style={{
            position: 'relative',
            height: '300px',
            display: 'flex',
            alignItems: 'flex-end',

            maxWidth: '1400px'
        }}>
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{
                        position: 'relative', // Keep bars positioned relative
                        height: `${value * 3}px`, // Keep height proportional to the value
                        width: '20px',
                        backgroundColor: sorting === index ? 'red' : 'blue', // Change color only for the sorting bar
                        transition: 'left 0.5s ease-in-out', // Smooth swap transition
                        margin: '0 5px', // Space between bars
                    }}
                >
                    {/* Display the value above the bar */}
                    <span style={{
                        color: 'black',
                        position: 'absolute', // Position value absolutely
                        bottom: `${value * 3 + 5}px`, // Position above the bar
                        left: '50%', // Center the text horizontally
                        transform: 'translateX(-50%)' // Adjust for centering
                    }}>
                        {value}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default BarGraph;