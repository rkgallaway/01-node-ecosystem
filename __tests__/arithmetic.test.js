'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

const ranNum = faker.random.number();

describe('adder module', () => {
  it ('can add 2 numbers', () => {
    let param1 = ranNum;
    let param2 = ranNum;
    let expected = (param1 + param2);
    let sum = arithmetic.add(param1, param2);
    expect( sum).toEqual(expected);
  });
  it ('rejects if a not a number', () => {
    let expected = null;
    let sum = arithmetic.add('a', 1);
    expect(sum).toEqual(expected);
  });
  it ('rejects if a not b number', () => {
    let expected = null;
    let sum = arithmetic.add(1, 'b');
    expect(sum).toEqual(expected);
  });
});

describe('subtracter module', () => {
  it('can subtract 2 numbers', () => {
    let param1 = ranNum;
    let param2 = ranNum;
    let expected = (param1 - param2);
    let difference = arithmetic.subtract(param1, param2);
    expect(difference).toEqual(expected);
  });
  it ('rejects if a not a number', () => {
    let expected = null;
    let difference = arithmetic.subtract('a', 1);
    expect(difference).toEqual(expected);
  });
  it ('rejects if a not b number', () => {
    let expected = null;
    let difference = arithmetic.subtract(1, 'b');
    expect(difference).toEqual(expected);
  });
});

describe('multiplier module', () => {
  it ( 'can multiply 2 numnbers', () =>{
    let param1 = ranNum;
    let param2 = ranNum;
    let expected = (param1 * param2);
    let product = arithmetic.multiply(param1, param2);
    expect(product).toEqual(expected);
  });
  it ('rejects if a not a number', () => {
    let expected = null;
    let product = arithmetic.multiply('a', 1);
    expect(product).toEqual(expected);
  });
  it ('rejects if a not b number', () => {
    let expected = null;
    let product = arithmetic.multiply(1, 'b');
    expect(product).toEqual(expected);
  });
});

describe('divide module', () => {
  it ( 'can divide 2 numnbers', () =>{
    let param1 = ranNum;
    let param2 = ranNum;
    let expected = (param1 / param2);
    let division = arithmetic.divide(1, 1);
    expect(division).toEqual(expected);
  });
  it ('rejects being divided by 0', () => {
    let expected = null;
    let division = arithmetic.divide(1, 0);
    expect(division).toEqual(expected);
  });
  it ('rejects if a not a number', () => {
    let expected = null;
    let division = arithmetic.divide('a', 1);
    expect(division).toEqual(expected);
  });
  it ('rejects if a not b number', () => {
    let expected = null;
    let division = arithmetic.divide(1, 'b');
    expect(division).toEqual(expected);
  });
});

