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
        assertEquals(calculator.sum("1"), "1"); 
    }
};
