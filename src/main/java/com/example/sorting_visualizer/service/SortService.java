package com.example.sorting_visualizer.service;

import com.example.sorting_visualizer.algorithm.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SortService {
    @Autowired
    private BubbleSort bubbleSort;

    @Autowired
    private QuickSort quickSort;

    @Autowired
    private MergeSort mergeSort;

    @Autowired
    private InsertionSort insertionSort;

    @Autowired
    private SelectionSort selectionSort;

    public List<int[]> sortWithBubble(int[] array) {
        return bubbleSort.sort(array);
    }

    public List<int[]> sortWithQuick(int[] array) {
        return quickSort.sort(array);
    }

    public List<int[]> sortWithMerge(int[] array) {
        return mergeSort.sort(array);
    }

    public List<int[]> sortWithInsertion(int[] array) {
        return insertionSort.sort(array);
    }

    public List<int[]> sortWithSelection(int[] array) {
        return selectionSort.sort(array);
    }
}