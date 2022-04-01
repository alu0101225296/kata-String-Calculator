package StringCalculator;

public class StringCalculator {
    public int sum(String numberList) {
      

        if (numberList.isEmpty()) {
            return 0;
        }
        
        String[] numbers = numberList.split(",");

        int result = 0;

        for (String number : numbers) {
            number = number.trim();
            result += Integer.parseInt(number);
        }

        return result;
    }
}
