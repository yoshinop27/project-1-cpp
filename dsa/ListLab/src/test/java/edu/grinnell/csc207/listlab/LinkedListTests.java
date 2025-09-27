package edu.grinnell.csc207.listlab;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import net.jqwik.api.ForAll;
import net.jqwik.api.Property;
import net.jqwik.api.constraints.IntRange;

public class LinkedListTests {
    @Test
    public void emptyListTest() {
        LinkedList list = new LinkedList();
        assertEquals(0, list.size());
    }

    @Test
    public void listAddSize10() {
        LinkedList list = new LinkedList();
        for (int i = 0; i < 10; i++) {
            list.add(i);
        }
        assertEquals(10, list.size());
    }

    // test suite for add/size/get
    @Test
    public void addEmpty() {
        LinkedList list = new LinkedList();
        list.add(5);
        assertEquals(1, list.size());
        assertEquals(5, list.get(0));
    }

    @Test
    public void add() {
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        assertEquals(2, list.size());
        assertEquals(10, list.get(1));
    }

    @Test
    public void sizeEmpty() {
        LinkedList list = new LinkedList();
        assertEquals(0, list.size());
    }

    @Test
    public void getMiddle() {
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals( 10, list.get(1));
    }

    // Test for remove
    @Test
    public void remOneElement(){
        LinkedList list = new LinkedList();
        list.add(5);
        assertEquals(5, list.remove(0));
        assertEquals(0, list.size());
    }

    @Test
    public void remMultElement(){
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(10, list.remove(1));
        assertEquals(2, list.size());
    }

    // Test for isEmpty
    @Test 
    public void emptyTrue(){
        LinkedList list = new LinkedList();
        assertEquals(true, list.isEmpty());
    }

    @Test   
    public void emptyFalse(){
        LinkedList list = new LinkedList();
        list.add(5);
        assertEquals(false, list.isEmpty());
    }

    // Test for clear
    @Test  
    public void clearList(){
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        list.clear();
        assertEquals(0, list.size());
    }

    // Test for indexOf
    @Test  
    public void indexOfFound(){
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(1, list.indexOf(10));
    }

    @Test   
    public void indexOfNotFound(){
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(-1, list.indexOf(20));
    }

    // Test for contains
    @Test
    public void containsTrue(){
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(true, list.contains(10));
    }
    @Test
    public void containsFalse(){
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(false, list.contains(20));
    }

    //Test for add with 2 paramaters
    @Test
    public void addAtIndex(){
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(15);
        list.add(1, 10);
        assertEquals(3, list.size());
        assertEquals(10, list.get(1));
    }
    @Test   
    public void addAtIndexZero(){
        LinkedList list = new LinkedList();
        list.add(5);
        list.add(10);
        list.add(0, 1);
        assertEquals(3, list.size());
        assertEquals(1, list.get(0));
    }

    @Property
    public boolean listAddSize(@ForAll @IntRange(min = 0, max = 1000) int sz) {
        LinkedList list = new LinkedList();
        for (int i = 0; i < sz; i++) {
            list.add(i);
        }
        return list.size() == sz;
    }

    @Property
    public boolean listAddGet(@ForAll @IntRange(min = 0, max = 1000) int sz) {
        LinkedList list = new LinkedList();
        for (int i = 0; i < sz; i++) {
            list.add(i);
        }
        boolean correct = true;
        for (int i = 0; i < sz; i++) {
            if (list.get(i) != i) {
                correct = false;
            }
        }
        return correct;
    }
}
