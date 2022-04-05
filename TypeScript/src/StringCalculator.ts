/**
 * StringCalculator Class
 */
export class StringCalculator {

  public sum(expression: string): number {
    const negativoRegex = /[-]\d+/g;
    let delimiterRegex = ',|\\n';
    const numberRegex = '\\d+'; 

    if(expression.startsWith('//')) {
      const definitionEnd = expression.indexOf('\n');
      delimiterRegex += `|[${expression.slice(2, definitionEnd)}]`;
      expression = expression.slice(definitionEnd + 1);
    }

    const simpleExpressionRegex = `(^(${numberRegex}(${delimiterRegex})?)+$)|(^$)`;
    if(negativoRegex.test(expression)) { // no se podria usar '-' como delimitador
      throw new Error(`Negatives not allowed: ${expression.match(negativoRegex)}`);
    } else if(!new RegExp(simpleExpressionRegex).test(expression)) 
      throw new Error('Unsupported input');

    const expressionArray : string[] = expression.split(new RegExp(delimiterRegex));

    if(expressionArray.length == 1) {
      const result = Number(expression); 
      return (result < 1000) ? Number(expression) : 0;
    } else {
      const expressionSimple : string = expressionArray.pop();
      expression = expressionArray.join();
      return (this.sum(expression) + this.sum(expressionSimple));
    }
  }
}
