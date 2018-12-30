'use strict';

const greet = require('../lib/greet.js');
const faker = require('faker');

const randomName = faker.name.findName();


describe('greet module', () => {
  it ('concatenates hello +name', () => {
    let param = randomName;
    let expected = `Hello ${param}`;
    let greeting = greet.hello(param);
    expect(greeting).toEqual(expected);
  });
  it ('only accepts string', () => {
    let expected = null;
    let greeting = greet.hello(2);
    expect(greeting).toEqual(expected);
  });
  it ('concatenates hello +name', () => {
    let expected = 'Hello World';
    let greeting = greet.hello('World');
    expect(greeting).toEqual(expected);
  });
});

