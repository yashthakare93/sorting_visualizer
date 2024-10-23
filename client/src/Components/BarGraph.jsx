import React from 'react';

const BarGraph = ({ array, sorting }) => {
    return (
        <div style={{ position: 'relative', height: '300px', display: 'flex', justifyContent: 'center' }}>
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute', // Enable bar swapping by controlling left position
                        left: `${index * 25}px`, // Position based on index, with space between bars
                        bottom: '0', // Align bars at the bottom
                        height: `${value * 3}px`, // Keep height proportional to the value
                        width: '20px',
                        backgroundColor: sorting ? 'red' : 'blue',
                        transition: 'left 0.5s ease-in-out', // Smooth swap transition
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* Display the value above the bar */}
                    <span style={{ color: 'black', marginBottom: '5px' }}>{value}</span>
                </div>
            ))}
        </div>
    );
};

export default BarGraph;
