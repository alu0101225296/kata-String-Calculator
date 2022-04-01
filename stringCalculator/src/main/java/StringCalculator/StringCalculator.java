package StringCalculator;

public class StringCalculator {
    public int sum(String numberList) {
        if (numberList.isEmpty()) {
            return 0;
        }
        return Integer.parseInt(numberList);
    }
}
