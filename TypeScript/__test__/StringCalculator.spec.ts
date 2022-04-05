import { StringCalculator } from '../src/StringCalculator';

describe('Basic add test', () => {
  it('should_return_number_if_there_is_only_one', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('1')).toBe(1);
    expect(calculator.sum('4')).toBe(4);
  });
});