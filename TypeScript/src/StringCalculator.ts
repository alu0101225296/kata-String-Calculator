/**
 * StringCalculator Class
 */
export class StringCalculator {

  public sum(expression: string): number {
    const expressionArray = this.processExpression(expression);

    if(expressionArray.length == 1) {
      const result = Number(expression); 
      return (result < 1000) ? Number(expression) : 0;
    } else {
      const expressionSimple : string = expressionArray.pop();
      expression = expressionArray.join();
      return (this.sum(expression) + this.sum(expressionSimple));
    }
  }

  private processExpression(expression: string): string[] {
    const negativoRegex = /[-]\d+/g;
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
          console.log(delimiter)
          delimiterRegex += `|${delimiter}`;
        });
      }
    }

    const simpleExpressionRegex = `(^(${numberRegex}(${delimiterRegex})?)+$)|(^$)`;
    if(negativoRegex.test(expression)) { 
      throw new Error(`Negatives not allowed: ${expression.match(negativoRegex)}`);
    }// else if(!new RegExp(simpleExpressionRegex).test(expression)) 
    //  throw new Error('Unsupported input');

    return expression.split(new RegExp(delimiterRegex));
  } 
}
