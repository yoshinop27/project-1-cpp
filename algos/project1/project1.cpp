/*
 * CSC-301
 * project1.cpp
 * Spring 2026
 *
 * Partner 1:
 * Partner 2:
 * Date:
 */

#include "project1.hpp"

using namespace std;

/*
 * selectionSort
 *
 * Sorts the input vector in ascending order using the selection sort algorithm.
 * Select all n elements and search for the smallest element.
 * Swap the smallest element with the first element.
 * Then, select the remaining n-1 elements and search for the smallest element.
 * Swap the smallest element with the second element.
 * Repeat this process until all elements are sorted.
 */
void selectionSort(vector<double> &arrayToSort)
{
    double min;
    int minIndex;
    for (int i = 0; i < arrayToSort.size(); i++)
    {
        min = arrayToSort[i];
        minIndex = i;
        for (int j = i + 1; j < arrayToSort.size(); j++)
        {
            if (arrayToSort[j] < min)
            {
                min = arrayToSort[j];
                minIndex = j;
            }
        }
        swap(arrayToSort[i], arrayToSort[minIndex]);
    }
    return;
}

/*
 * insertionSort
 * Sorts the input vector in ascending order using the insertion sort
 * Select the first element; since there's no element on the left, no change
 * Select the second element; compare it with the first one, if smaller, swap them; otherwise, no change
 * Select the third element; compare it with the first two elements. Swap if smaller than either of them. Otherwise, no change.
 * Repeat this process for all the remaining elements until all elements are sorted.
 * During each iteration, we set a "key" element, and shift elements to the right until the correct position for the key is found.
 */
void insertionSort(vector<double> &arrayToSort) {
    for (int j = 1; j < arrayToSort.size(); j++)
    {
        double key = arrayToSort[j];
        int i = j - 1;

        while (i >= 0 && arrayToSort[i] > key)
        {
            arrayToSort[i + 1] = arrayToSort[i];
            i = i - 1;
        }
        arrayToSort[i + 1] = key;
    }
}

/*
 * bubbleSort
 */
void bubbleSort(vector<double> &arrayToSort) { return; }

/*
 * mergeSort helper
 */
vector<double> mergeSortH(vector<double> &arrayToSort, int start, int end) {

    // base case
    if (end - start == 0) return {};
    if (end - start <= 1) return {arrayToSort[start]};

    // recursive call
    int mid = (start + end) / 2;
    vector<double> front = mergeSortH(arrayToSort, start, mid);
    vector<double> back = mergeSortH(arrayToSort, mid, end);

    // merge
    vector<double> ret;
    int f = 0;
    int b = 0;
    while (ret.size() < front.size() + back.size()) {
        // Check if front is done
        if (f >= front.size()) {
            ret.push_back(back[b++]);
        // Check if back is done
        } else if (b >= back.size()) { 
            ret.push_back(front[f++]);
        }
        // regular case
        else if (front[f] < back[b]) { 
            ret.push_back(front[f++]);
        } else {
            ret.push_back(back[b++]);
        }
    }
    return ret;
}
/*
 * mergeSort
 */
void mergeSort(vector<double> &arrayToSort) { 
    arrayToSort = mergeSortH(arrayToSort, 0, arrayToSort.size());
}

/*
 * quickSortHelper
 *
 * Note that i is inclusive (i.e., is the first element of subarray).
 * Note that j is not inclusive (i.e., off the end of the subarray).
 *
 */
void quickSortHelper(vector<double> &arrayToSort, int i, int j) {         
    // base case  
    if (j-i <= 1) {
        return;
    }

    // Select a pivot
    double pivot = arrayToSort[i];
    // two pointers front and back
    int front = i;
    int back = j - 1;

    // front and back move inward until aligned
    while (front < back){
        // If both are on pivot and not equal indexes
        if (arrayToSort[front] == pivot && arrayToSort[back] == pivot && front != back) {
            front++;
        }
        // Check if front is smaller
        while (arrayToSort[front] < pivot) {
            front++;
        } 
        // Check if back is bigger
        while (arrayToSort[back] > pivot){   
            back--;
        } 
        // if both are stuck: swap elements
        double temp = arrayToSort[front];
        arrayToSort[front] = arrayToSort[back];
        arrayToSort[back] = temp;
    }
    // recurse
    quickSortHelper(arrayToSort, i, front);
    quickSortHelper(arrayToSort, front+1, j);
}

/*
 * quickSort
 */
void quickSort(vector<double> &arrayToSort) {
    quickSortHelper(arrayToSort, 0, arrayToSort.size());
    return;
}
