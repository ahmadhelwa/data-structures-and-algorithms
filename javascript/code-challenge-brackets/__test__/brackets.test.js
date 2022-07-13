'use strict';

const brackets = require('../brackets');

describe('brackets validation test', () => {
  it('should return true for valid brackets', () => {
    expect(brackets('{}')).toBe(true);
    expect(brackets('{}(){}')).toBe(true);
    expect(brackets('()[[Extra Characters]]')).toBe(true);
    expect(brackets('(){}[[]]')).toBe(true);
    expect(brackets('{}{Code}[Fellows](())')).toBe(true);
  });
  it('should return false for invalid brackets', () => {
    expect(brackets('[({}]')).toBe(false);
    expect(brackets('(](')).toBe(false);
    expect(brackets('{(})')).toBe(false);
  });
});