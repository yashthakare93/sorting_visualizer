import React, { useState, useEffect, useRef } from 'react';
import InputField from './InputField';
import BarGraph from './BarGraph';
import Sidebar from './SideBar';
import AlgorithmInfo from './AlgorithmInfo';

const SortingVisualizer = () => {
    // State for managing arrays and algorithm selection
    const [arrays, setArrays] = useState({
        bubble: [],
        quick: [],
        merge: [],
    });
    const [algorithm, setAlgorithm] = useState('bubble');
    const [sorting, setSorting] = useState(false);
    const [arraySize, setArraySize] = useState(20); // New state for array size
    const timeoutRef = useRef([]); // Store timeout references for animation

    // Function to generate a random array
    const generateArray = (size) => {
        const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
        setArrays((prev) => ({
            ...prev,
            [algorithm]: newArray, // Set the array for the selected algorithm
        }));
        setSorting(false); // Reset sorting when generating a new array
    };

    // Function to handle sorting based on the selected algorithm
    const handleSort = async () => {
        if (sorting) {
            // Clear previous sorting if already sorting
            timeoutRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
            timeoutRef.current = [];
            setSorting(false); // Stop the current sorting
        }

        setSorting(true);
        try {
            const response = await fetch(`/api/sort/${algorithm}`, {
                method: 'POST',
                body: JSON.stringify(arrays[algorithm]), // Send the corresponding array
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Check for response status and throw an error if not ok
            if (!response.ok) {
                throw new Error('Failed to fetch sorting steps');
            }

            const data = await response.json();
            // Visualize the sorting steps
            data.forEach((step, i) => {
                const timeoutId = setTimeout(() => {
                    setArrays((prev) => ({
                        ...prev,
                        [algorithm]: step, // Update the displayed array for the selected algorithm
                    }));
                }, i * 500);
                timeoutRef.current.push(timeoutId); // Store timeout IDs
            });

            // Clear sorting state after completing the visualization
            const totalTimeout = setTimeout(() => {
                setSorting(false);
                timeoutRef.current = []; // Clear timeout IDs
            }, data.length * 500);
            timeoutRef.current.push(totalTimeout);
        } catch (error) {
            console.error("Sorting error:", error);
            setSorting(false); // Reset sorting state on error
        }
    };

    // Effect to handle algorithm change
    useEffect(() => {
        // Clear previous sorting and reset arrays on algorithm change
        if (sorting) {
            timeoutRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
            setSorting(false); // Stop sorting if the algorithm changes
        }
        // Reset the array for the new algorithm
        setArrays((prev) => ({
            ...prev,
            [algorithm]: [], // Clear the array when the algorithm is changed
        }));
    }, [algorithm]); // Run effect when the algorithm changes

    return (
        <div className="flex h-screen">
            <Sidebar algorithm={algorithm} setAlgorithm={setAlgorithm} />
            <div className="flex-grow p-4">
                <h1 className="text-2xl font-bold mb-4">Sorting Visualizer</h1>

                {/* Dropdown to select array size */}
                <label htmlFor="arraySize" className="mr-2">Select Array Size:</label>
                <select
                    id="arraySize"
                    value={arraySize}
                    onChange={(e) => setArraySize(Number(e.target.value))} // Update array size based on user selection
                    className="mt-4 px-4 py-2 border border-gray-300 rounded"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                </select>

                <button
                    onClick={() => generateArray(arraySize)} // Generate new array for the selected algorithm
                    className="mt-4 ml-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded"
                >
                    Generate New Array
                </button>

                <button
                    onClick={handleSort} // Use the current selected algorithm
                    disabled={sorting || arrays[algorithm].length === 0} // Disable if sorting or no array is generated
                    className={`mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded ${sorting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Sort
                </button>

                <div className="flex flex-col space-y-4 mt-4">
                    {/* Render a graph for the selected sorting algorithm */}
                    <BarGraph array={arrays[algorithm]} sorting={sorting} algorithm={algorithm} />
                </div>
                {algorithm && <AlgorithmInfo algorithm={algorithm} />} {/* Display algorithm info */}
            </div>
        </div>
    );
};

export default SortingVisualizer;
