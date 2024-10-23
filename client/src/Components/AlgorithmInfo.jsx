import React from 'react';

const algorithmDetails = {
    bubble: {
        code: `function bubbleSort(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }`,
        timeComplexity: "O(n²)",
    },
    quick: {
        code: `function quickSort(arr) {
            if (arr.length <= 1) return arr;
            const pivot = arr[arr.length - 1];
            const left = [], right = [];
            for (let i = 0; i < arr.length - 1; i++) {
                arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
            }
            return [...quickSort(left), pivot, ...quickSort(right)];
        }`,
        timeComplexity: "O(n log n)",
    },
    merge: {
        code: `function mergeSort(arr) {
            if (arr.length <= 1) return arr;
            const mid = Math.floor(arr.length / 2);
            const left = mergeSort(arr.slice(0, mid));
            const right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }

        function merge(left, right) {
            let result = [];
            while (left.length && right.length) {
                if (left[0] < right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
            return [...result, ...left, ...right];
        }`,
        timeComplexity: "O(n log n)",
    },
};

const AlgorithmInfo = ({ algorithm }) => {
    const details = algorithmDetails[algorithm];

    return (
        <div className="mt-4 bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-bold">Algorithm Info</h3>
            <pre className="whitespace-pre-wrap">{details.code}</pre>
            <p className="mt-2">Time Complexity: {details.timeComplexity}</p>
        </div>
    );
};

export default AlgorithmInfo;
