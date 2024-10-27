package com.example.sorting_visualizer.algorithm;

import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
public class SelectionSort {

    public List<int[]> sort(int[] array) {
        List<int[]> steps = new ArrayList<>();
        selectionSort(array, steps);
        return steps;
    }

    private void selectionSort(int[] array, List<int[]> steps) {
        int n = array.length;

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element
            int temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;

            steps.add(array.clone()); // Store each step
        }
    }
}
