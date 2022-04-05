import { StringCalculator } from '../src/StringCalculator';

describe('Basic add test', () => {
  it('should_return_number_if_there_is_only_one', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('1')).toBe(1);
    expect(calculator.sum('4')).toBe(4);
  });

  it('should_return_zero_if_empty', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('')).toBe(0);
    expect(calculator.sum(' ')).toBe(0);
  });

  it('should_throw_error_if_not_allowed_character', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.sum('ABC')).toThrowError('Unsupported input');
    expect(() =>calculator.sum('ABC, GFD')).toThrowError('Unsupported input');
    expect(() =>calculator.sum('ABC, 1')).toThrowError('Unsupported input');
  });
  
});