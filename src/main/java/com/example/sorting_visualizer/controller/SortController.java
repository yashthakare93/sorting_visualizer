package com.example.sorting_visualizer.controller;

import com.example.sorting_visualizer.service.SortService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@RequestMapping("/api/sort")
public class SortController {
    @Autowired
    private SortService sortService;

    @PostMapping("/bubble")
    public List<int[]> bubbleSort(@RequestBody int[] array) {
        return sortService.sortWithBubble(array);
    }

    @PostMapping("/quick")
    public List<int[]> quickSort(@RequestBody int[] array) {
        return sortService.sortWithQuick(array);
    }

    @PostMapping("/merge")
    public List<int[]> mergeSort(@RequestBody int[] array) {
        return sortService.sortWithMerge(array);
    }
}
