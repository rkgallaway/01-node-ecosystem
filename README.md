![CF](http://i.imgur.com/7v5ASc8.png) LAB 01
=================================================

## 01 Node Ecosystem

### Author: Ryan Gallaway

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/01-node-ecosystem.svg?branch=master)](https://www.travis-ci.com/rkgallaway/01-node-ecosystem)

* [repo](https://github.com/rkgallaway/01-node-ecosystem)
* [travis](https://www.travis-ci.com/rkgallaway/01-node-ecosystem)
* [server](https://lab-02-node-ecosystem.herokuapp.com/)

### Modules
#### `arithmetic.js`
#### `greet.js`
##### Arithmetic modules
Use the faker module to randomize input (airty of two) and add, subtract, multiply and divide input.  value of 'null' returned if input is not a number or if dividing by 0.

##### Greet module
Use the faker module to randomize input (airty of one) and concatonate hello +input if input is a string. value of 'null' returned if input is not a string.

### Setup
#### `.env` requirements
* `PORT` - defined in ENV

#### Running the app
* `npm start`
* Endpoint: `/`
  <!-- * Returns a JSON object with abc in it.
<!-- * Endpoint: `/bing/zing/` -->
  <!-- * Returns a JSON object with xyz in it. --> 

#### Tests
* npm test (runs unit tests)
* npm run  lint (runs linter tests)
* node -file-name- test
* How do you run tests?
* arithmetic must be done with integers, and cannot divide by 0
* greet must be done with a string

<!-- #### UML
Link to an image of the UML for your application and response to events -->
