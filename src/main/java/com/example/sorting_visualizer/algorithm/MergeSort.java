package com.example.sorting_visualizer.algorithm;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MergeSort {

    public List<int[]> sort(int[] array) {
        List<int[]> steps = new ArrayList<>();
        mergeSort(array, 0, array.length - 1, steps);
        return steps;
    }

    private void mergeSort(int[] array, int left, int right, List<int[]> steps) {
        if (left < right) {
            int middle = (left + right) / 2;
            mergeSort(array, left, middle, steps);
            mergeSort(array, middle + 1, right, steps);
            merge(array, left, middle, right, steps);
        }
    }

    private void merge(int[] array, int left, int middle, int right, List<int[]> steps) {
        int n1 = middle - left + 1;
        int n2 = right - middle;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) L[i] = array[left + i];
        for (int i = 0; i < n2; i++) R[i] = array[middle + 1 + i];

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                array[k] = L[i];
                i++;
            } else {
                array[k] = R[j];
                j++;
            }
            steps.add(array.clone());  // Store each step
            k++;
        }

        while (i < n1) {
            array[k] = L[i];
            i++;
            k++;
            steps.add(array.clone());
        }

        while (j < n2) {
            array[k] = R[j];
            j++;
            k++;
            steps.add(array.clone());
        }
    }
}
