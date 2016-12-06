'use strict';

const expect = require('chai').expect; //calls in expect library, allows expect function
const code = require('../main.js');

describe('reduce' , () => {
  // input is an array
  it('is an array' , () => {
    expect(code.reduce(8)).to.equal('I want an array');
  });

  // input array includes only numbers
  it('is an array' , () => {
    expect(code.reduce([3,8,12,2])).to.be.a('array')
  });

  // output is a number
  it('is an array' , () => {
    expect(code.reduce([3,8,12,2])).to.be.a('array')
  });
  
  // output is a sum of all elements
  it('is an array' , () => {
    expect(code.reduce([3,8,12,2])).to.be.a('array')
  });
});





    // Input: array of integers (ex: [3, 8, 12, 2])
    //
    // Output: integer representing sum of all integers in array (ex: 25)
    //
    // Test for:
    //
    // input is an array
    // input array includes only numbers
    // output is a number
    // output is a sum of all elements

xdescribe('greeting' , () => {
  // accepts only one argument
  it('accepts only one argument' , () => {
    expect(code.greeting()).to.equal('I accept only one argument'); //make sure it fails with no arguments

    expect(code.greeting('Katie' , 'Devin' , 'Olivia')).to.equal('I accept only one argument'); //make sure it fails with multiple
  });

  // input is a string
  it('input is a string' , () => {
    expect(code.greeting(8)).to.equal('I want a string');
  });

  // output is a string
  it('output is a string' , () => {
    expect(code.greeting('Katie')).to.be.a('string');
  });

  // output is expected string
  it('output is expected string' , () => {
    expect(code.greeting("Katie")).to.equal('Hello, Katie');
  });
});

  //Copy test needs into file
    // Input: name, string (ex: 'Jennie')
    //
    // Output: greeting that incorporates string input (ex: 'Hello, Jennie')
    //
    // Test for:
    //
    // accepts only one argument
    // input is a string
    // input is a string
    // output is expected string
