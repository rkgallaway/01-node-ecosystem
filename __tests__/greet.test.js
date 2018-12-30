'use strict';

const greet = require('../lib/greet.js');

describe('greet module', () => {
  it ('concatenates hello +name', () => {
    let expected = 'Hello World';
    let greeting = greet.hello('World');
    expect(greeting).toEqual(expected);
  });
  it ('only accepts string', () => {
    let expected = null;
    let greeting = greet.hello(1);
    expect(greeting).toEqual(expected);
  });
});
