/*
 * CSC-301
 * project1.cpp
 * Spring 2026
 *
 * Partner 1: Maria
 * Partner 2: Preston
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
 * we take the vector to sort as input and return void
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
 * we take the array to sort as input and return void
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
 * bubbleSort (with early termination condition)
 * we perform n iterations for an n length vector
 * in the ith iteration we bubble up the ith largest element 
 * bubbling up happnes by swapping elements in position k and k+1 if the element in position k is greater
 * if there exists an iteration where no swaps happen we terminate
 * we take the vector to sort as input
 * return void
 */
void bubbleSort(vector<double> &arrayToSort) { 
    for (int i=0; i<arrayToSort.size(); i++) {
        int swaps = true;
        for (int j = 0; j < arrayToSort.size()-1; j++) {
            if (arrayToSort[j] > arrayToSort[j+1]) {
                swaps = false;
                double temp = arrayToSort[j];
                arrayToSort[j] = arrayToSort[j+1];
                arrayToSort[j+1] = temp;
            }
        }
        if (swaps) return;
    }
 }

/*
 * mergeSort helper
 * mergeSorthelper will split the vector, sort both sides by recursively calling itself on those sides, then merge them back together
 * the merge process involves two pointers which both start by pointing to the first element of each half. 
 * whichever pointer points at the smaller element, that element is append to the return vector. that pointer then moves forward. the merge process stops when all elements from both halves are in the return vector
 * when we take an vector that is less than or equal to length 1, we return that array as it is already sorted
 * takes a vector of doubles as input, then two integer indices denoting the start inclusive and end exclusive of the subset of the vector we are sorting
 * outputs a sorted vector with respect to the indices given as input
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
 * wraps around mergeSortH to sort the input vector
 * takes a vector of doubles as input
 * returns void
 */
void mergeSort(vector<double> &arrayToSort) { 
    arrayToSort = mergeSortH(arrayToSort, 0, arrayToSort.size());
}

/*
 * quickSortHelper
 * Quicksort helper will partition the array for the subsection specified, then recursively call itself on both sides of the pivot
 * the partition portion of this function works by taking two pointers originally starting at both ends of our vector
 * we move the forward pointer inward when the element its pointed at is less than the pivot. we move the back pointer inwards when the element it points to is greater than the pivot
 * once both pointers can't move inward we swap. if both pointers are pointed at the pivot and the pointers are at different positions, WLOG we move the front pointer forward
 * we terminate when both pointers are on one element. it holds that at this point elements on both sides of our pivot are in their correct "half" of the vector
 * Quicksort helper takes a vector of doubles as input, and two indices as integers denoting the first position of the subsection and the indice one off the end of the subsection
 * This function outputs a sorted array with respect to the start and end indices
 * Note that i is inclusive (i.e., is the first element of subarray).
 * Note that j is not inclusive (i.e., off the end of the subarray).
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
 * wraps around quicksort helper to sort the input array
 * takes a vector containing doubles as input
 * returns void
 * 
 */
void quickSort(vector<double> &arrayToSort) {
    quickSortHelper(arrayToSort, 0, arrayToSort.size());
    return;
}
