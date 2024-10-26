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
    const [customArrayInput, setCustomArrayInput] = useState('');
    const timeoutRef = useRef(null);

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

    useEffect(() => {
        // Detect screen size and set the default and max array size for small devices
        const handleResize = () => {
            if (window.innerWidth < 640) { // Tailwind `sm` breakpoint
                setArraySize((prevSize) => prevSize > 30 ? 10 : prevSize);
            }
        };
        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCustomArray = () => {
        const customArray = customArrayInput.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
        setArrays((prev) => ({ ...prev, [algorithm]: customArray }));
        setSorting(false);
        setSteps([]);
        setCurrentStep(0);
        setIsSorted(false);
        setCustomArrayInput('');
    };

    const handleSort = async () => {
        setSorting(true);
        try {
            const response = await fetch(`http://localhost:8080/api/sort/${algorithm}`, {
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
            runSortAnimation(data);
        } catch (error) {
            console.error("Sorting error:", error);
            setSorting(false);
        }
    };

    const runSortAnimation = (sortingSteps) => {
        let stepIndex = 0;

        const animate = () => {
            if (stepIndex < sortingSteps.length) {
                setCurrentStep(stepIndex);
                stepIndex++;
                timeoutRef.current = setTimeout(animate, speed);
            } else {
                setSorting(false);
            }
        };

        animate();
    };

    useEffect(() => {
        generateArray(arraySize);
    }, [algorithm, arraySize]);

    return (
        <div className="flex h-screen">
            <div className="hidden sm:block h-full">
                <SideBar algorithm={algorithm} setAlgorithm={setAlgorithm} />
            </div>
            <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
                <h2 className="text-2xl pb-4 font-serif font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Sorting Visualizer
                </h2>

                {/* Algorithm Selection on Small Devices */}
                <div className="flex flex-col sm:hidden mb-4">
                    <label htmlFor="algorithm" className="mr-2">Algorithm:</label>
                    <select
                        id="algorithm"
                        value={algorithm}
                        onChange={(e) => setAlgorithm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded"
                    >
                        <option value="bubble">Bubble Sort</option>
                        <option value="quick">Quick Sort</option>
                        <option value="merge">Merge Sort</option>
                    </select>
                </div>

                {/* Controls Layout */}
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <div className="flex items-center">
                            <label htmlFor="arraySize" className="mr-2">Array Size :</label>
                            <select
                                id="arraySize"
                                value={arraySize}
                                onChange={(e) => setArraySize(Number(e.target.value))}
                                className="px-4 py-2 border border-gray-300 rounded"
                            >
                                {window.innerWidth < 640 ? (
                                    <>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={30}>30</option>
                                    </>
                                ) : (
                                    <>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={30}>30</option>
                                        <option value={40}>40</option>
                                        <option value={50}>50</option>
                                    </>
                                )}
                            </select>
                        </div>

                        <div className="flex items-center">
                            <label htmlFor="speed" className="mr-2">Speed :</label>
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
                    </div>

                    <div className="flex items-center space-x-4">
                        <GenerateArrayButton onClick={() => generateArray(arraySize)} arraySize={arraySize}/>
                        <SortButton
                            onClick={handleSort}
                            disabled={sorting || arrays[algorithm].length === 0}
                        >
                            {sorting ? 'Sorting in Progress...' : isSorted ? 'Sorting Completed!' : 'Sort'}
                        </SortButton>
                    </div>
                </div>


                <div className="flex flex-col space-y-4 mt-4 pt-5 pb-5 items-center ">
                    <BarGraph array={steps[currentStep] || arrays[algorithm]} sorting={sorting}/>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                        <label htmlFor="customArray">Custom Array :</label>
                        <div className="flex w-full sm:w-auto items-center space-x-2">
                            <input
                                id="customArray"
                                type="text"
                                value={customArrayInput}
                                onChange={(e) => setCustomArrayInput(e.target.value)}
                                placeholder="E.g., 34, 7, 23, 32, 5"
                                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow"
                            />
                            <button
                                onClick={handleCustomArray}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                Generate
                            </button>
                        </div>
                    </div>

                </div>

                {algorithm && <AlgorithmInfo algorithm={algorithm}/>}
            </div>
        </div>
    );
};

export default SortingVisualizer;
