import React from 'react';

const BarGraph = ({ array, sorting }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '300px' }}>
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{
                        height: `${value * 3}px`,
                        width: '20px',
                        backgroundColor: sorting ? 'red' : 'blue',
                        margin: '2px',
                        transition: '0.5s ease-in-out'
                    }}
                />
            ))}
        </div>
    );
};

export default BarGraph;
