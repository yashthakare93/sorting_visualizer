import React from 'react';

const Sidebar = ({ algorithm, setAlgorithm }) => {
    const algorithms = [
        { key: 'bubble', name: 'Bubble Sort' },
        { key: 'quick', name: 'Quick Sort' },
        { key: 'merge', name: 'Merge Sort' },
    ];

    return (
        <div className="w-64 bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold">Sorting Algorithms</h2>
            <ul className="mt-4">
                {algorithms.map(({ key, name }) => (
                    <li
                        key={key}
                        className={`cursor-pointer hover:bg-gray-700 p-2 ${algorithm === key ? 'bg-gray-700' : ''}`}
                        onClick={() => setAlgorithm(key)}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
