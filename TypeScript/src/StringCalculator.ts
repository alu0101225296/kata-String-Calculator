/**
 * StringCalculator Class
 */
export class StringCalculator {

  public sum(expression: string): number {
    const delimiterRegex = new RegExp(',');
    const numberRegex = new RegExp('\d+'); 
    const notAllowedCharacters = new RegExp(`[^${numberRegex}${delimiterRegex}]`);

    expression = expression.replace(/\s+/,"");
    if(expression.match(/[^\d+,]/))
      throw new Error('Unsupported input');
    return Number(expression);
  }
}
