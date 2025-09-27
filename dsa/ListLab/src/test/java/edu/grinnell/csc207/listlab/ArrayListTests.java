package edu.grinnell.csc207.listlab;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import net.jqwik.api.ForAll;
import net.jqwik.api.Property;
import net.jqwik.api.constraints.IntRange;

public class ArrayListTests {
    @Test
    public void emptyListTest() {
        ArrayList list = new ArrayList();
        assertEquals(0, list.size());
    }

    @Test
    public void listAddSize10() {
        ArrayList list = new ArrayList();
        for (int i = 0; i < 10; i++) {
            list.add(i);
        }
        assertEquals(10, list.size());
    }

    // test suite for add/size/get
    @Test
    public void addEmpty() {
        ArrayList list = new ArrayList();
        list.add(5);
        assertEquals(1, list.size());
        assertEquals(5, list.get(0));
    }

    @Test
    public void addReg() {
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        assertEquals(2, list.size());
        assertEquals(10, list.get(1));
    }
    @Test
    public void addOverCap() {
        ArrayList list = new ArrayList();
        for (int i = 0; i < 15; i++) {
            list.add(i);
        }
        assertEquals(15, list.size());
        assertEquals(14, list.get(14));
    }

    @Test
    public void sizeEmpty() {
        ArrayList list = new ArrayList();
        assertEquals(0, list.size());
    }

    @Test
    public void getMiddle() {
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals( 10, list.get(1));
    }

    // Test for remove
    @Test
    public void remOneElement(){
        ArrayList list = new ArrayList();
        list.add(5);
        assertEquals(5, list.remove(0));
        assertEquals(0, list.size());
    }

    @Test
    public void remMultElement(){
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(15, list.remove(2));
        assertEquals(2, list.size());
    }

    // Test for isEmpty
    @Test 
    public void emptyTrue(){
        ArrayList list = new ArrayList();
        assertEquals(true, list.isEmpty());
    }

    @Test   
    public void emptyFalse(){
        ArrayList list = new ArrayList();
        list.add(5);
        assertEquals(false, list.isEmpty());
    }

    // Test for clear
    @Test  
    public void clearList(){
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        list.clear();
        assertEquals(0, list.size());
    }

    // Test for indexOf
    @Test  
    public void indexOfFound(){
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(1, list.indexOf(10));
    }

    @Test   
    public void indexOfNotFound(){
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(-1, list.indexOf(20));
    }

    // Test for contains
    @Test
    public void containsTrue(){
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(true, list.contains(10));
    }
    @Test
    public void containsFalse(){
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        list.add(15);
        assertEquals(false, list.contains(20));
    }

    //Test for add with 2 paramaters
    @Test
    public void addAtIndex(){
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(15);
        list.add(1, 10);
        assertEquals(3, list.size());
        assertEquals(10, list.get(1));
    }
    @Test   
    public void addAtIndexZero(){
        ArrayList list = new ArrayList();
        list.add(5);
        list.add(10);
        list.add(0, 1);
        assertEquals(3, list.size());
        assertEquals(1, list.get(0));
    }


    @Property
    public boolean listAddSize(@ForAll @IntRange(min = 0, max = 1000) int sz) {
        ArrayList list = new ArrayList();
        for (int i = 0; i < sz; i++) {
            list.add(i);
        }
        return list.size() == sz;
    }

    @Property
    public boolean listAddGet(@ForAll @IntRange(min = 0, max = 1000) int sz) {
        ArrayList list = new ArrayList();
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
