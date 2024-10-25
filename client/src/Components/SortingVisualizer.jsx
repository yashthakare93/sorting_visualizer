import React, { useState, useEffect, useRef } from 'react';
import BarGraph from './BarGraph';
import SideBar from './SideBar';
import AlgorithmInfo from './AlgorithmInfo';
import SortButton from './SortButton';
import GenerateArrayButton from "./GenerateArrayButton";

const SortingVisualizer = () => {
    const [arrays, setArrays] = useState({
        bubble: [],
        quick: [],
        merge: [],
    });
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [algorithm, setAlgorithm] = useState('bubble');
    const [sorting, setSorting] = useState(false);
    const [arraySize, setArraySize] = useState(50);
    const [isSorted, setIsSorted] = useState(false);
    const [speed, setSpeed] = useState(350);
    const [customArrayInput, setCustomArrayInput] = useState(''); // State for custom input
    const timeoutRef = useRef(null);

    // Function to generate a random array
    const generateArray = (size) => {
        const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
        setArrays((prev) => ({ ...prev, [algorithm]: newArray }));
        setSorting(false);
        setSteps([]);
        setCurrentStep(0);
        setIsSorted(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    // Function to set custom array
    const handleCustomArray = () => {
        const customArray = customArrayInput.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
        setArrays((prev) => ({ ...prev, [algorithm]: customArray }));
        setSorting(false);
        setSteps([]);
        setCurrentStep(0);
        setIsSorted(false);
        setCustomArrayInput(''); // Clear input after setting the array
    };

    // Function to handle sorting
    const handleSort = async () => {
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
            setSteps(data);
            setCurrentStep(0);
            setIsSorted(true);

            // Start sorting animation
            runSortAnimation(data);
        } catch (error) {
            console.error("Sorting error:", error);
            setSorting(false);
        }
    };

    // Function to handle the animation of sorting
    const runSortAnimation = (sortingSteps) => {
        let stepIndex = 0;

        const animate = () => {
            if (stepIndex < sortingSteps.length) {
                setCurrentStep(stepIndex);
                stepIndex++;
                timeoutRef.current = setTimeout(animate, speed); // Use speed parameter
            } else {
                setSorting(false); // Sorting is done
            }
        };

        animate();
    };

    useEffect(() => {
        generateArray(arraySize);
    }, [algorithm, arraySize]);

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

                        <label htmlFor="speed" className="ml-4 mr-2">Select Speed:</label>
                        <select
                            id="speed"
                            value={speed}
                            onChange={(e) => setSpeed(Number(e.target.value))}
                            className="px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value={50}>Fast</option>
                            <option value={350}>Normal</option>
                            <option value={450}>Slow</option>
                        </select>
                    </div>
                    <div className="flex space-x-2">
                        <GenerateArrayButton onClick={generateArray} arraySize={arraySize} />
                        <SortButton
                            onClick={handleSort}
                            disabled={sorting || arrays[algorithm].length === 0}
                        >
                            {sorting ? 'Sorting in Progress...' : isSorted ? 'Sorting Completed!' : 'Sort'}
                        </SortButton>
                    </div>
                </div>

                {/* Custom Array Input Section */}
                <div className="mt-4">
                    <label htmlFor="customArray" className="mr-2">Custom Array (comma-separated):</label>
                    <input
                        id="customArray"
                        type="text"
                        value={customArrayInput}
                        onChange={(e) => setCustomArrayInput(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded w-1/3"
                    />
                    <button
                        onClick={handleCustomArray}
                        className="ml-2 px-4 py-2 rounded bg-green-500 text-white"
                    >
                        Set Custom Array
                    </button>
                </div>

                <div className="flex flex-col space-y-4 mt-4 pt-5 pb-5">
                    <BarGraph array={steps[currentStep] || arrays[algorithm]} sorting={sorting} />
                </div>

                {algorithm && <AlgorithmInfo algorithm={algorithm} />}
            </div>
        </div>
    );
};

export default SortingVisualizer;
