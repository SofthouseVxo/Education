var assert = require('assert');

function validate(input){
  if(typeof input === 'number'){
    return true;
  } else if(typeof input === 'string'){
    if(input.length > 10){
      return true;
    }
  }
}

describe('input validate', function(){
  it('should return true if longer than 10', () => {
    assert.equal(validate('nissenilsson'), true);
  })
  it('should return false if 10 or shorter', () => {
    assert.equal(validate('nisse'), false);
  })
  it('should return true if number', () => {
    assert.equal(validate(900606), true);
  })
  it('should return false if & is present', () => {
    assert.equal(validate('&'), false);
  })
});