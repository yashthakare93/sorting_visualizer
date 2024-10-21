import React, { useState } from 'react';
import InputField from './InputField';
import BarGraph from './BarGraph';
import Sidebar from './SideBar';
import AlgorithmInfo from './AlgorithmInfo';
import { bubbleSort, mergeSort, quickSort } from '../Services/SortService';

const SortingVisualizer = () => {
    const [bubbleArray, setBubbleArray] = useState([]);
    const [quickArray, setQuickArray] = useState([]);
    const [mergeArray, setMergeArray] = useState([]);
    const [algorithm, setAlgorithm] = useState('bubble');
    const [sorting, setSorting] = useState(false);

    const handleSort = async () => {
        setSorting(true);
        let steps = [];
        let currentArray;

        switch (algorithm) {
            case 'bubble':
                currentArray = bubbleArray;
                steps = await bubbleSort(currentArray);
                break;
            case 'quick':
                currentArray = quickArray;
                steps = await quickSort(currentArray);
                break;
            case 'merge':
                currentArray = mergeArray;
                steps = await mergeSort(currentArray);
                break;
            default:
                break;
        }

        for (let i = 0; i < steps.length; i++) {
            setTimeout(() => {
                if (algorithm === 'bubble') setBubbleArray(steps[i]);
                if (algorithm === 'quick') setQuickArray(steps[i]);
                if (algorithm === 'merge') setMergeArray(steps[i]);
            }, i * 500);
        }

        setTimeout(() => setSorting(false), steps.length * 500);
    };

    return (
        <div className="flex h-screen">
            <Sidebar algorithm={algorithm} setAlgorithm={setAlgorithm} />
            <div className="flex-grow p-4">
                <h1 className="text-2xl font-bold mb-4">Sorting Visualizer</h1>
                {algorithm && (
                    <InputField setArray={(array) => {
                        if (algorithm === 'bubble') setBubbleArray(array);
                        if (algorithm === 'quick') setQuickArray(array);
                        if (algorithm === 'merge') setMergeArray(array);
                    }} />
                )}

                    <button
                        onClick={handleSort}
                        disabled={sorting}
                        className={`mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded ${sorting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Sort
                    </button>

                {algorithm === 'bubble' && <BarGraph array={bubbleArray} sorting={sorting} />}
                {algorithm === 'quick' && <BarGraph array={quickArray} sorting={sorting} />}
                {algorithm === 'merge' && <BarGraph array={mergeArray} sorting={sorting} />}
                {algorithm && <AlgorithmInfo algorithm={algorithm} />}
            </div>
        </div>
    );

};

export default SortingVisualizer;
