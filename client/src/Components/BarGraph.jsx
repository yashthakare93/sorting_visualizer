import React from 'react';

const BarGraph = ({ array, sorting }) => {
    return (
        <div style={{
            position: 'relative',
            height: '320px',
            display: 'flex',
            alignItems: 'flex-end',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            maxWidth: '100%',
        }}>
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{
                        position: 'relative',
                        height: `${value * 3}px`,
                        width: '20px',
                        backgroundColor: sorting === index ? 'red' : 'blue',
                        transition: 'left 0.5s ease-in-out',
                        margin: '0 5px', // Space between bars
                    }}
                >
                    <span style={{
                        color: 'black',
                        position: 'absolute',
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
