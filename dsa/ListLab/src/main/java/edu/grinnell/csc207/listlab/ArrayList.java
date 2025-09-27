package edu.grinnell.csc207.listlab;

import java.util.Arrays;

/**
 * An array-based implementation of the list ADT.
 */
public class ArrayList {
    // Declare fields
    private int[] arr;
    private int size;

    // Constructor and initialize fields
    public ArrayList() {
        this.arr = new int[10];
        this.size = 0;
    }

    /**
     * Adds <code>value</code> to the end of the list
     * 
     * @param value the value to add to the end of the list
     */
    public void add(int value) {
        if (this.size >= this.arr.length) {
            arr = Arrays.copyOf(arr, arr.length*2);
        }
        arr[size] = value;
        size++;
    }

    /**
     * @return the number of elements in the list
     */
    public int size() {
        return this.size;
    }

    /**
     * @param index the index of the element to retrieve
     * @return the value at the specified <code>index</code>
     */
    public int get(int index) throws IndexOutOfBoundsException{
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }
        return arr[index];
    }

    /**
     * Removes the value at <code>index</code> from the list
     * 
     * @param index the index of the element to remove
     * @return the element at <code>index</code>
     */
    public int remove(int index) {
        if (index == size-1) {
            size--;
            return arr[index];
        } else {
            int temp = arr[index];
            for (int i = index; i < size-1; i++){
                arr[i] = arr[i+1];
            }
            size--;
            return temp;
        }
    }

    /**
     * @Return true if the list is empty, false otherwise
     *
     */
    public boolean isEmpty() {
        if (size == 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Clear the list and reset the size
     * 
     */
    public void clear(){
        this.size = 0;
        this.arr = new int[10];
    }

    /**
     * @Return the index of the first occurrence of value in the list, or -1 if not found
     * @param value is an integer to search for
     */
    public int indexOf(int value) {
        for (int i = 0; i < size; i++) {
            if (arr[i] == value) {
                return i;
            }
        }
        return -1;
    }

    /*
     * Return true if the list contains the value, false otherwise
     * @param value is an integer to search for
     */
    public boolean contains(int value){
        if (indexOf(value) != -1) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Add a value at a specific index, shifting elements as necessary
     * @param index is the position to add the value
     * @param value is the integer to add
     */
    public void add(int index, int value) throws IndexOutOfBoundsException{ 
        if (index < 0 || index > size){
            throw new IndexOutOfBoundsException();
        } else { 
            for (int i = size -1; i > index; i--){
                arr[i] = arr[i-1];
            }
            arr[index] = value;
            size++;
        }
    }
}
