/**
 * StringCalculator Class
 */
export class StringCalculator {
  private negativeRegex = /(?<!\d+)[-]\d+/g; // (?<!x) negative lookbehind
  private numberRegex = '\\d+';

  public sum(expression: string): number {
    const expressionArray = this.processExpression(expression);

    if (expressionArray.length <= 1) {
      const result = Number(expression);
      return result < 1000 ? Number(expression) : 0;
    } else {
      const expressionSimple: string = expressionArray.pop()!;
      expression = expressionArray.join();
      return this.sum(expression) + this.sum(expressionSimple);
    }
  }

  private processExpression(expression: string): string[] {
    let delimiterRegex = ',|\\n';

    if (expression.startsWith('//')) {
      const definitionEnd = expression.indexOf('\n');
      const newDelimiter = expression.slice(2, definitionEnd);
      expression = expression.slice(definitionEnd + 1);

      delimiterRegex +=
        newDelimiter.length == 1
          ? `|[${newDelimiter}]`
          : '|' + this.getDelimiters(newDelimiter.match(/\[.*?\]/g)!).join('|');
    }

    const simpleExpressionRegex = `(^(${this.numberRegex}(${delimiterRegex})?)+$)|(^$)`;
    if (!new RegExp(simpleExpressionRegex).test(expression)) { 
      if (this.negativeRegex.test(expression)) 
        throw new Error(
          `Negatives not allowed: ${expression.match(this.negativeRegex)}`,
        );
      throw new Error('Unsupported input');
    }
    
    return expression.split(new RegExp(delimiterRegex));
  }

  private getDelimiters(delimiterArray: string[]): string[] {
    if (delimiterArray.length == 1) {
      const delimiter = delimiterArray[0].slice(1, -1);
      return [delimiter.replace(/(.{1})/g, '[\\$1]')];
    }
    return this.getDelimiters([delimiterArray.pop()!]).concat(
      this.getDelimiters(delimiterArray),
    );
  }
}
