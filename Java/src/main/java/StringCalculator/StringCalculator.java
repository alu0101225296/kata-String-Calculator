package StringCalculator;

public class StringCalculator {
    public int sum(String expression) { 

      expression = expression.replaceAll("\\s+","");  
            
      if (expression.isEmpty()){
          return 0;
      } 
      
      String[] arguments = expression.split(",");
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


