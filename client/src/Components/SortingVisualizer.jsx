import React, { useState } from 'react';
import InputField from './InputField';
import BarGraph from './BarGraph';
import {bubbleSort, mergeSort, quickSort} from "../Services/SortService";


const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [algorithm, setAlgorithm] = useState('bubble');
    const [sorting, setSorting] = useState(false);

    const handleSort = async () => {
        setSorting(true);
        let steps = [];
        switch (algorithm) {
            case 'bubble':
                steps = await bubbleSort(array);
                break;
            case 'quick':
                steps = await quickSort(array);
                break;
            case 'merge':
                steps = await mergeSort(array);
                break;
            default:
                break;
        }

        for (let i = 0; i < steps.length; i++) {
            setTimeout(() => setArray(steps[i]), i * 500);
        }

        setTimeout(() => setSorting(false), steps.length * 500);
    };

    return (
        <div>
            <h1>Sorting Visualizer</h1>
            <InputField setArray={setArray} />
            <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
                <option value="bubble">Bubble Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="merge">Merge Sort</option>
            </select>
            <button onClick={handleSort} disabled={sorting}>Sort</button>
            <BarGraph array={array} sorting={sorting} />
        </div>
    );
};

export default SortingVisualizer;
