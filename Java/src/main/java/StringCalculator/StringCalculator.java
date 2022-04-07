package StringCalculator;

public class StringCalculator {
    public int sum(String expression) { 
      String delimiter = ",|\\n";
            
      if (expression.isEmpty()) {
        return 0;
      } 
      
      if (expression.startsWith("//")) {
        Integer limit = expression.indexOf("\n");
        String delimiters = expression.substring(2, limit);
        expression = expression.substring(limit + 1);
        delimiter += ("|\\" + delimiters);
      }

      String[] arguments = expression.split(delimiter);
      int result = 0;
      for (String element : arguments) {   
        if(isNumber(element)) {
          if(Integer.parseInt(element) < 0)
            throw new ArithmeticException("Error: cant accept negative numbers");
          if(Integer.parseInt(element) < 1000)
            result += Integer.parseInt(element);
        }  
      }
      return result;
    }

    private boolean isNumber(String element) {
      return element.matches(".*[\\d+].*");
    }
}


