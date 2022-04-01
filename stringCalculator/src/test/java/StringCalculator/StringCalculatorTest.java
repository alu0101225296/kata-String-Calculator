package StringCalculator;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class StringCalculatorTest {

    // "" -> 0
    // "1" -> 1
    // "1,3" -> 4
    // "1," -> ???
    // "1,asdf" -> ???

    
    @Test
    void should_return_number_if_there_is_only_one() {
        StringCalculator calculator = new StringCalculator();
        assertEquals(calculator.sum("1"), 1); 
        assertEquals(calculator.sum("4"), 4); 
    }

    @Test 
    void should_return_zero_if_empty() {
        StringCalculator calculator = new StringCalculator();
        assertEquals(calculator.sum(""), 0);
    }

    @Test 
    void should_return_zero_if_empty_with_spaces() {
        StringCalculator calculator = new StringCalculator();
        assertEquals(calculator.sum(" "), 0);
    }

    @Test
    void should_be_able_to_add_multiple_number() {
        StringCalculator calculator = new StringCalculator();
        assertEquals(calculator.sum("1, 1"), 2);
        assertEquals(calculator.sum("2, 2, 2"), 6);
    }
};
