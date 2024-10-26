import React, { useState } from 'react';


const algorithmDetails = {
    bubble: {
        java: `public static int[] bubbleSort(int[] arr) {
            for (int i = 0; i < arr.length; i++) {
                for (int j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }`,
        javascript: `function bubbleSort(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }`,
        cpp: `void bubbleSort(int arr[], int n) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        swap(arr[j], arr[j + 1]);
                    }
                }
            }
        }`,
        timeComplexity: {
            best: "O(n)",
            average: "O(n²)",
            worst: "O(n²)",
        },
        spaceComplexity: "O(1)",
    },
    selection: {
        java: `public static int[] selectionSort(int[] arr) {
            for (int i = 0; i < arr.length - 1; i++) {
                int minIndex = i;
                for (int j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
            return arr;
        }`,
        javascript: `function selectionSort(arr) {
            for (let i = 0; i < arr.length - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
            }
            return arr;
        }`,
        cpp: `void selectionSort(int arr[], int n) {
            for (int i = 0; i < n - 1; i++) {
                int minIndex = i;
                for (int j = i + 1; j < n; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                swap(arr[i], arr[minIndex]);
            }
        }`,
        timeComplexity: {
            best: "O(n²)",
            average: "O(n²)",
            worst: "O(n²)",
        },
        spaceComplexity: "O(1)",
    },
    insertion: {
        java: `public static int[] insertionSort(int[] arr) {
            for (int i = 1; i < arr.length; i++) {
                int key = arr[i];
                int j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
            return arr;
        }`,
        javascript: `function insertionSort(arr) {
            for (let i = 1; i < arr.length; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
            return arr;
        }`,
        cpp: `void insertionSort(int arr[], int n) {
            for (int i = 1; i < n; i++) {
                int key = arr[i];
                int j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
        }`,
        timeComplexity: {
            best: "O(n)",
            average: "O(n²)",
            worst: "O(n²)",
        },
        spaceComplexity: "O(1)",
    },
    quick: {
        java: `public static void quickSort(int[] arr, int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }

        public static int partition(int[] arr, int low, int high) {
            int pivot = arr[high];
            int i = (low - 1);
            for (int j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            int temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;
            return i + 1;
        }`,
        javascript: `function quickSort(arr, low = 0, high = arr.length - 1) {
            if (low < high) {
                const pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
            return arr;
        }

        function partition(arr, low, high) {
            const pivot = arr[high];
            let i = low - 1;
            for (let j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            return i + 1;
        }`,
        cpp: `void quickSort(int arr[], int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }

        int partition(int arr[], int low, int high) {
            int pivot = arr[high];
            int i = (low - 1);
            for (int j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    swap(arr[i], arr[j]);
                }
            }
            swap(arr[i + 1], arr[high]);
            return i + 1;
        }`,
        timeComplexity: {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n²)",
        },
        spaceComplexity: "O(log n)",
    },
    merge: {
        java: `public static void mergeSort(int[] arr, int left, int right) {
            if (left < right) {
                int mid = left + (right - left) / 2;
                mergeSort(arr, left, mid);
                mergeSort(arr, mid + 1, right);
                merge(arr, left, mid, right);
            }
        }

        public static void merge(int[] arr, int left, int mid, int right) {
            int n1 = mid - left + 1;
            int n2 = right - mid;
            int[] L = new int[n1];
            int[] R = new int[n2];
            for (int i = 0; i < n1; i++) L[i] = arr[left + i];
            for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
            int i = 0, j = 0, k = left;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k++] = L[i++];
                } else {
                    arr[k++] = R[j++];
                }
            }
            while (i < n1) arr[k++] = L[i++];
            while (j < n2) arr[k++] = R[j++];
        }`,
        javascript: `function mergeSort(arr) {
            if (arr.length < 2) return arr;
            const mid = Math.floor(arr.length / 2);
            const left = mergeSort(arr.slice(0, mid));
            const right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }

        function merge(left, right) {
            const result = [];
            let i = 0, j = 0;
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) result.push(left[i++]);
                else result.push(right[j++]);
            }
            return result.concat(left.slice(i)).concat(right.slice(j));
        }`,
        cpp: `void mergeSort(int arr[], int left, int right) {
            if (left < right) {
                int mid = left + (right - left) / 2;
                mergeSort(arr, left, mid);
                mergeSort(arr, mid + 1, right);
                merge(arr, left, mid, right);
            }
        }

        void merge(int arr[], int left, int mid, int right) {
            int n1 = mid - left + 1;
            int n2 = right - mid;
            int L[n1], R[n2];
            for (int i = 0; i < n1; i++) L[i] = arr[left + i];
            for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
            int i = 0, j = 0, k = left;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) arr[k++] = L[i++];
                else arr[k++] = R[j++];
            }
            while (i < n1) arr[k++] = L[i++];
            while (j < n2) arr[k++] = R[j++];
        }`,
        timeComplexity: {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n log n)",
        },
        spaceComplexity: "O(n)",
    },
};

const AlgorithmInfo = ({ algorithm }) => {
    const [language, setLanguage] = useState('java');
    const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithm || 'bubble');
    const details = algorithmDetails[selectedAlgorithm] || {};

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Code copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
        <div className="mt-6 rounded-lg p-6 ">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                {/* Algorithm Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-2 sm:mb-0">
                    Algorithm - {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort
                </h3>

                {/* Language Button Group */}
                <div className="space-x-2 flex flex-wrap">
                    <button
                        onClick={() => setLanguage('java')}
                        className={`border rounded-md px-3 py-2 ${language === 'java' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                    >
                        Java
                    </button>
                    <button
                        onClick={() => setLanguage('javascript')}
                        className={`border rounded-md px-3 py-2 ${language === 'javascript' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                    >
                        JavaScript
                    </button>
                    <button
                        onClick={() => setLanguage('cpp')}
                        className={`border rounded-md px-3 py-2 ${language === 'cpp' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                    >
                        C++
                    </button>
                    <button
                        onClick={() => copyToClipboard(details[language] || '')}
                        className="ml-2 p-2 align-middle text-gray-600 hover:text-blue-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path
                                d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z"/>
                            <path
                                d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Algorithm Code Section */}
                <div className="col-span-1">
                    <div className="flex items-center">
                        <pre
                            className="whitespace-pre-wrap bg-gray-900 text-white p-6 rounded-lg border border-gray-700 shadow-md overflow-x-auto flex-1">
                        {details[language] || 'Code not available'}
                        </pre>
                    </div>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-lg mb-6 border-l-4 lg:h-36 sm:h-40  border-indigo-500">
                    <p className="text-xl font-semibold text-indigo-700 mb-2">
                        {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort
                    </p>
                    <div className="text-sm text-gray-700 space-y-1 ">
                        {/* Time Complexity Section */}
                        <p className="flex flex-col sm:flex-row ">
                            <span className="font-medium text-gray-900">Time Complexity:</span>
                            <span className="ml-2">
                                Best : {algorithmDetails[selectedAlgorithm].timeComplexity.best},
                                Average : {algorithmDetails[selectedAlgorithm].timeComplexity.average},
                                Worst : {algorithmDetails[selectedAlgorithm].timeComplexity.worst}
                            </span>
                        </p>

                        {/* Space Complexity Section */}
                        <p className="flex flex-col sm:flex-row ">
                            <span className="font-medium text-gray-900">Space Complexity:</span>
                            <span className="ml-2">
                                {algorithmDetails[selectedAlgorithm].spaceComplexity}
                            </span>
                        </p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default AlgorithmInfo;