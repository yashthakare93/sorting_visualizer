import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ algorithm, setAlgorithm }) => {
    const navigate = useNavigate();

    const algorithms = [
        { key: 'bubble', name: 'Bubble Sort' },
        { key: 'quick', name: 'Quick Sort' },
        { key: 'merge', name: 'Merge Sort' },
        { key: 'selection', name: 'Selection Sort' },
        { key: 'insertion', name: 'Insertion Sort' },
    ];

    return (
        <div className="w-64 bg-gray-800 text-white p-4">
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 cursor-pointer text-white"
                    onClick={() => navigate(-1)}
                >
                    <path fillRule="evenodd"
                          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                          clipRule="evenodd"/>
                </svg>

            </div>
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

export default SideBar;
