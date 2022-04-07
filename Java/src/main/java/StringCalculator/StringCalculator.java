package StringCalculator;

public class StringCalculator {
    public int sum(String expression) { 
      String delimiter = ",|\\n";
            
      if (expression.isEmpty()) {
        return 0;
      } 
      
      String[] arguments = expression.split(delimiter);
      int result = 0;
      for (String element : arguments) {
          
          if(isNumber(element)) 
            result += Integer.parseInt(element);
      }
      return result;
    }

    private boolean isNumber(String element) {
      return !element.matches(".*[a-zA-Z].*");
    }
}


