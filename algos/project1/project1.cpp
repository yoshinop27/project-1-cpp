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
 */
void selectionSort(vector<double> &arrayToSort) { return; }

/*
 * insertionSort
 */
void insertionSort(vector<double> &arrayToSort) { return; }

/*
 * bubbleSort
 */
void bubbleSort(vector<double> &arrayToSort) { return; }

/*
 * mergeSort
 */
void mergeSort(vector<double> &arrayToSort) { return; }

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
