var assert = require('assert');

var { 
  calcSum,
  multiply,
  stringify,
  trim 
} = require('../js/index.js');

// Uppgift 1
describe('calcSum test', function(){
  it('should return 4', () => {
    // write code here
  })
});

// Uppgift 2
describe('multiply test', function(){
  it('should return 8', () => {
   // write code here
  })
});

// Uppgift 3
describe('stringify test', function(){
  it('should return a string', () => {
    assert.equal(stringify([4, true, 'nisse']), 'string');
  })
});

// Uppgift 4
describe('trim test', function(){
  it('should never return a string longer than 5 characters', () => {
    // Write code here
  })
});