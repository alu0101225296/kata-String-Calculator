package StringCalculator;

public class StringCalculator {
    public int sum(String numberList) {
      numberList = numberList.trim();
        if (numberList.isEmpty()) {
            return 0;
        }
        return Integer.parseInt(numberList);
    }
}
