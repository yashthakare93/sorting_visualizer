package com.example.sorting_visualizer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.sorting_visualizer.algorithm.BubbleSort;
import com.example.sorting_visualizer.algorithm.MergeSort;
import com.example.sorting_visualizer.algorithm.QuickSort;

@Service
public class SortService {
    @Autowired
    private BubbleSort bubbleSort;

    @Autowired
    private QuickSort quickSort;

    @Autowired
    private MergeSort mergeSort;

    public List<int[]> sortWithBubble(int[] array) {
        return bubbleSort.sort(array);
    }

    public List<int[]> sortWithQuick(int[] array) {
        return quickSort.sort(array);
    }

    public List<int[]> sortWithMerge(int[] array) {
        return mergeSort.sort(array);
    }
}