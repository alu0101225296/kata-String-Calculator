/**
 * StringCalculator Class
 */
export class StringCalculator {

  public sum(expression: string): number {

    const expressionArray = this.processExpression(expression);
    
    if(expressionArray.length <= 1) {
      const result = Number(expression); 
      return (result < 1000) ? Number(expression) : 0;
    } else {
      const expressionSimple : string = expressionArray.pop();
      expression = expressionArray.join();
      return (this.sum(expression) + this.sum(expressionSimple));
    }
  }

  private processExpression(expression: string): string[] {
    const negativeRegex = /[-]\d+/g;
    let delimiterRegex = ',|\\n';
    const numberRegex = '\\d+'; 

    if(expression.startsWith('//')) { 
      const definitionEnd = expression.indexOf('\n');
      const newDelimiter = expression.slice(2, definitionEnd);
      expression = expression.slice(definitionEnd + 1);

      if(newDelimiter.length == 1) {
        delimiterRegex += `|[${newDelimiter}]`;
      } else {
        newDelimiter.match(/\[.*?\]/g).forEach((delimiter) => {
          const delimitedFormatted = delimiter.slice(1, -1).replace(/(.{1})/g, '[\\$1]');
          delimiterRegex += `|${delimitedFormatted}`;
        });
      }
    }

    const simpleExpressionRegex = `(^(${numberRegex}(${delimiterRegex})?)+$)|(^$)`;
    if(negativeRegex.test(expression)) { 
      throw new Error(`Negatives not allowed: ${expression.match(negativeRegex)}`);
    }else if(!new RegExp(simpleExpressionRegex).test(expression)) {
      console.log("Delimiter: " + delimiterRegex);
      console.log("Expression: " + expression);
      throw new Error('Unsupported input');
    }
      
    
    return expression.split(new RegExp(delimiterRegex));
  } 
}


