/**
 * StringCalculator Class
 */
export class StringCalculator {

  public sum(expression: string): number {
    let delimiterRegex = ',|\\n';
    const numberRegex = '\\d+'; 

    if(expression.startsWith('//')) {
      const definitionEnd = expression.indexOf('\n');
      delimiterRegex += `|[${expression.slice(2, definitionEnd)}]`;
      expression = expression.slice(definitionEnd + 1);
    }

    const simpleExpressionRegex = `(^(${numberRegex}(${delimiterRegex})?)+$)|(^$)`;
    if(!new RegExp(simpleExpressionRegex).test(expression)) 
      throw new Error('Unsupported input');

    const expressionArray : string[] = expression.split(new RegExp(delimiterRegex));

    if(expressionArray.length == 1) {
      return Number(expression);
    } else {
      const expressionSimple : string = expressionArray.pop();
      expression = expressionArray.join();
      return (this.sum(expression) + this.sum(expressionSimple));
    }
  }
}
