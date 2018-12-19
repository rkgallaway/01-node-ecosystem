'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('adder module', () => {
  it ('can add 2 numbers', () => {
    let expected = 2;
    let sum = arithmetic.add(1, 1);
    expect( sum).toEqual(expected);
  });
});

describe('subtracter module', () => {
  it('can subtract 2 numbers', () => {
    let expected = 0;
    let difference = arithmetic.subtract(1, 1);
    expect(difference).toEqual(expected);
  });
});