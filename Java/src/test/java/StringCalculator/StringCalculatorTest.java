package StringCalculator;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class StringCalculatorTest {
    StringCalculator calculator = new StringCalculator();
    // "" -> 0
    // "1" -> 1
    // "1,3" -> 4
    // "1," -> ???
    // "1,asdf" -> ???

    
    @Test
    void should_return_number_if_there_is_only_one() {
        assertEquals(calculator.sum("1"), 1); 
        assertEquals(calculator.sum("4"), 4); 
    }

    @Test 
    void should_return_zero_if_empty() {
        assertEquals(calculator.sum(""), 0);
    }

    @Test
    void should_be_able_to_add_multiple_number() {
        assertEquals(calculator.sum("1,1"), 2);
        assertEquals(calculator.sum("2,2,2"), 6);
    }


    @Test
    void should_consider_letters_as_zero() {
        assertEquals(calculator.sum("ABC"), 0);
        assertEquals(calculator.sum("ABC,GFD"), 0);
        assertEquals(calculator.sum("ABC,1"), 1);
    }

    
    @Test
    void allow_newLine_as_delimiter() {
        assertEquals(calculator.sum("1\n2\n5"), 8);
        assertEquals(calculator.sum("1\n2,3"), 6);
        assertEquals(calculator.sum("3,7\n3"), 13);
    } 

    @Test
    void allow_different_delimiters() {
        assertEquals(calculator.sum("//;\n1;2"), 3);
        assertEquals(calculator.sum("//@\n3,6\n2@9"), 20);
        assertEquals(calculator.sum("//<\n20<12<4<6"), 42);
        assertEquals(calculator.sum("//:\n2:2"), 4);
    }
};