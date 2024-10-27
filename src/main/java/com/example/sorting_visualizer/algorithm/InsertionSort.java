package com.example.sorting_visualizer.algorithm;

import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
public class InsertionSort {

    public List<int[]> sort(int[] array) {
        List<int[]> steps = new ArrayList<>();
        insertionSort(array, steps);
        return steps;
    }

    private void insertionSort(int[] array, List<int[]> steps) {
        int n = array.length;

        for (int i = 1; i < n; i++) {
            int key = array[i];
            int j = i - 1;

            // Move elements of array[0..i-1], that are greater than key,
            // to one position ahead of their current position
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
                steps.add(array.clone()); // Store each step
            }
            array[j + 1] = key;

            steps.add(array.clone()); // Store each step after placing key
        }
    }
}
