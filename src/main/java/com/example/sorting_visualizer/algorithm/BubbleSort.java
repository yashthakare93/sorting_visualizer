package com.example.sorting_visualizer.algorithm;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BubbleSort {

    public List<int[]> sort(int[] array) {
        List<int[]> steps = new ArrayList<>();
        int n = array.length;
        boolean swapped;

        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Swap
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
                steps.add(array.clone());  // Store each step
            }
            if (!swapped) break;
        }
        return steps;
    }
}
