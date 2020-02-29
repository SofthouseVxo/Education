var assert = require('assert');

var users = ['john', 'jane', 'kitty'];

describe('users test', function(){
  it('should always be 3 users', () => {
    assert.equal(users.length, 3);
  })

  it('should always be 3 users', () => {
    assert.equal(users.length, 3);
  })
});

