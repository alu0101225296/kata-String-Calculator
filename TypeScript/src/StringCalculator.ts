/**
 * StringCalculator Class
 */
export class StringCalculator {

  public sum(expression: string): number {
    const delimiterRegex = ',|\\n';
    const numberRegex = '\\d+'; 
    const notAllowedCharacters = new RegExp(`[^${numberRegex}${delimiterRegex}]`);

    if(expression.match(notAllowedCharacters))
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
