var assert = require('assert');

// describe('numbers tests', function(){
//   it('should always be 1', () => {
//     assert.equal(4, 10);
//   })
// });

var users = ['john', 'jane', 'kitty'];

describe('users test', function(){
  it('should always be 3 users', () => {
    assert.equal(users.length, 3);
  })
});