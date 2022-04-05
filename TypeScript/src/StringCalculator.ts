/**
 * StringCalculator Class
 */
export class StringCalculator {

  public sum(expression: string): number {
    const delimiterRegex = new RegExp(',');
    //const numberRegex = new RegExp('\d+'); 
    //const notAllowedCharacters = new RegExp(`[^${numberRegex}${delimiterRegex}]`);

    expression = expression.replace(/\s+/,"");
    if(expression.match(/[^\d+,]/)) // cambiar por notallowed cuando lo arregle
      throw new Error('Unsupported input');


    const expressionArray : string[] = expression.split(delimiterRegex);

    if(expressionArray.length <= 1) {
      return Number(expression);
    } else {
      const expressionSimple : string = expressionArray.pop();
      expression = expressionArray.join();
      return (this.sum(expression) + this.sum(expressionSimple));
    }
  }
}
