export const bubbleSort = async (array) => {
    const steps = [];
    const arr = [...array];
    let swapped;
    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
            steps.push([...arr]);
        }
        if (!swapped) break;
    }
    return steps;
};

export const quickSort = async (array) => {
    const steps = [];
    const arr = [...array];

    const quickSortHelper = (arr, low, high) => {
        if (low < high) {
            const pi = partition(arr, low, high);
            quickSortHelper(arr, low, pi - 1);
            quickSortHelper(arr, pi + 1, high);
        }
    };

    const partition = (arr, low, high) => {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            steps.push([...arr]);
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        steps.push([...arr]);
        return i + 1;
    };

    quickSortHelper(arr, 0, arr.length - 1);
    return steps;
};

export const mergeSort = async (array) => {
    const steps = [];
    const arr = [...array];

    const merge = (arr, l, m, r) => {
        let n1 = m - l + 1;
        let n2 = r - m;
        let L = new Array(n1), R = new Array(n2);

        for (let i = 0; i < n1; i++) L[i] = arr[l + i];
        for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

        let i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            steps.push([...arr]);
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
            steps.push([...arr]);
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
            steps.push([...arr]);
        }
    };

    const mergeSortHelper = (arr, l, r) => {
        if (l < r) {
            let m = Math.floor((l + r) / 2);
            mergeSortHelper(arr, l, m);
            mergeSortHelper(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    };

    mergeSortHelper(arr, 0, arr.length - 1);
    return steps;
};
