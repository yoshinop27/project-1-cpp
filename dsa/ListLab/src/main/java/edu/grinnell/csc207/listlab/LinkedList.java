package edu.grinnell.csc207.listlab;

/**
 * A linked implementation of the list ADT.
 */
public class LinkedList {

    // Node class for linked list
    private static class Node {
        int value;
        Node next;
        public Node(int value, Node next){
            this.value = value;
            this.next = next;
        }
    }
    
    // Declare head field
    private Node head;
    // Constructor and set head to null
    public LinkedList() {
        this.head = null;
    }
    
    /**
     * Adds <code>value</code> to the end of the list
     * 
     * @param value the value to add to the end of the list
     */
    public void add(int value) {
        Node cur = new Node(value, null);
        if (this.head == null){
            this.head = cur;
        } else {
            Node temp = this.head;
            while (temp.next != null){
                temp = temp.next;
            }
            temp.next = cur;
        }
    }

    /**
     * @return the number of elements in the list
     */
    public int size() {
        Node cur = this.head;
        int count = 0;
        while(cur != null){
            count++;
            cur = cur.next;
        }
        return count;
    }

    /**
     * @param index the index of the element to retrieve
     * @return the value at the specified <code>index</code>
     */
    public int get(int index) throws IndexOutOfBoundsException {
        if (index < 0 || index >= this.size()) throw new IndexOutOfBoundsException();
        Node cur = this.head;
        for (int i = 0; i < index; i++){
            cur = cur.next;
        }
        return cur.value;
    }

    /**
     * Removes the value at <code>index</code> from the list
     * 
     * @param index the index of the element to remove
     * @return the element at <code>index</code>
     */
    public int remove(int index) throws IndexOutOfBoundsException {
        if (index < 0 || index >= this.size()) {
            throw new IndexOutOfBoundsException();
        }
    
        int temp;
        Node cur = this.head;
    
        // case remove head
        if (index == 0) {
            temp = cur.value;
            head = null;
            return temp;
        }
    
        // traverse until node before target
        Node prev = null;
        for (int i = 0; i < index; i++) {
            prev = cur;
            cur = cur.next;
        }
    
        temp = cur.value;
        prev.next = cur.next;
        return temp;
    }
    

    /**
     * @Return true if the list is empty, false otherwise
     *
     */
    public boolean isEmpty() {
        if (this.head == null) {
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
        this.head = null;
    }

    /**
     * @Return the index of the first occurrence of value in the list, or -1 if not found
     * @param value is an integer to search for
     */
    public int indexOf(int value) {
        Node cur = this.head;
        int count = 0;
        while(cur != null){
            if (cur.value == value) {
                return count;
            } else {
                count++;
                cur = cur.next;
            }
        }
        return -1;
    }

    /**
     * @Return true if the list contains the value, false otherwise
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
        if (index < 0 || index > this.size()) {
            throw new IndexOutOfBoundsException();
        } 
        Node newNode = new Node(value, null);
        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            Node cur = this.head;
            for (int i = 0; i < index - 1; i++) {
                cur = cur.next;
            }
            newNode.next = cur.next;
            cur.next = newNode;
        }
    }
}
