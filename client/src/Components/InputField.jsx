import React, { useState } from 'react';

const InputField = ({ setArray }) => {
    const [input, setInput] = useState('');

    const generateArray = () => {
        const newArray = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
        setArray(newArray);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={generateArray}>Generate Array</button>
        </div>
    );
};

export default InputField;