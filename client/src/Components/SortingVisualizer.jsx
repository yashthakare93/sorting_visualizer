import React, { useState, useEffect, useRef } from 'react';
import BarGraph from './BarGraph';
import SideBar from './SideBar'; // Make sure this path is correct
import AlgorithmInfo from './AlgorithmInfo';
import SortButton from './SortButton';
import GenerateArrayButton from "./GenerateArrayButton";

const SortingVisualizer = () => {
    const [arrays, setArrays] = useState({
        bubble: [],
        quick: [],
        merge: [],
    });
    const [algorithm, setAlgorithm] = useState('bubble');
    const [sorting, setSorting] = useState(false);
    const [arraySize, setArraySize] = useState(50);
    const timeoutRef = useRef([]);

    // Function to generate a random array
    const generateArray = (size) => {
        const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
        setArrays((prev) => ({ ...prev, [algorithm]: newArray }));
        setSorting(false);
    };

    const handleSort = async () => {
        if (sorting) {
            timeoutRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
            timeoutRef.current = [];
            setSorting(false);
        }

        setSorting(true);
        try {
            const response = await fetch(`/api/sort/${algorithm}`, {
                method: 'POST',
                body: JSON.stringify(arrays[algorithm]),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch sorting steps');
            }

            const data = await response.json();
            data.forEach((step, i) => {
                const timeoutId = setTimeout(() => {
                    setArrays((prev) => ({
                        ...prev,
                        [algorithm]: step,
                    }));
                }, i * 500);
                timeoutRef.current.push(timeoutId);
            });

            const totalTimeout = setTimeout(() => {
                setSorting(false);
                timeoutRef.current = [];
            }, data.length * 500);
            timeoutRef.current.push(totalTimeout);
        } catch (error) {
            console.error("Sorting error:", error);
            setSorting(false);
        }
    };

    // Effect to handle algorithm change
    useEffect(() => {
        if (sorting) {
            timeoutRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
            setSorting(false);
        }
        generateArray(arraySize);
    }, [algorithm, arraySize]); // Include arraySize in the dependency array

    return (
        <div className="flex h-screen">
            <SideBar algorithm={algorithm} setAlgorithm={setAlgorithm} />
            <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
                <h2 className="text-2xl font-serif font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Sorting Visualizer
                </h2>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex-grow">
                        <label htmlFor="arraySize" className="mr-2">Select Array Size:</label>
                        <select
                            id="arraySize"
                            value={arraySize}
                            onChange={(e) => setArraySize(Number(e.target.value))}
                            className="px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                    <div className="flex space-x-2">
                        <GenerateArrayButton onClick={generateArray} arraySize={arraySize} />
                        <SortButton
                            onClick={handleSort}
                            disabled={sorting || arrays[algorithm].length === 0}
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-4 mt-4 pt-5 pb-5">
                    <BarGraph array={arrays[algorithm]} sorting={sorting} algorithm={algorithm} />
                </div>
                {algorithm && <AlgorithmInfo algorithm={algorithm} />}
            </div>
        </div>
    );
};

export default SortingVisualizer;
