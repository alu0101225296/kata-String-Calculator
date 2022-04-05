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
  });

  it('should_throw_error_if_not_allowed_character', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.sum('ABC')).toThrowError('Unsupported input');
    expect(() =>calculator.sum('ABC,<')).toThrowError('Unsupported input');
    expect(() =>calculator.sum('A,C,1')).toThrowError('Unsupported input');
  });

  it('should_be_able_to_add_multiple_number', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('1,1')).toBe(2);
    expect(calculator.sum('3,6,2')).toBe(11);
    expect(calculator.sum('8,20,12,4,6')).toBe(50);
  });

  it('allow_newLine_as_delimiter', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('1\n1')).toBe(2);
    expect(calculator.sum('3,6\n2')).toBe(11);
    expect(calculator.sum('8\n20,12\n4,6')).toBe(50);
  });

  it('allow_different_delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('//;\n1;2')).toBe(3);
    expect(calculator.sum('//@\n3,6\n2@9')).toBe(20);
    expect(calculator.sum('//<\n20<12<4<6')).toBe(42);
    expect(calculator.sum('//:\n2:2')).toBe(4);
  });

  it('negative_number_will_throw_an_exception', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.sum('3,6\n-2')).toThrowError('Negatives not allowed: -2');
    expect(() =>calculator.sum('-3,4')).toThrowError('Negatives not allowed: -3');
    expect(() =>calculator.sum('//<\n20<-12<4<-6')).toThrowError('Negatives not allowed: -12,-6');
  });

  it('numbers_bigger_than_1000_should_be_ignored', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('//;\n2;1001')).toBe(2);
    expect(calculator.sum('//@\n3,6\n2@999')).toBe(1010);
    expect(calculator.sum('//<\n20<12<4<6,1000')).toBe(42);
  });

});