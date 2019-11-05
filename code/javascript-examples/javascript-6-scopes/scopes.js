var scopeVar = "I'm global";

/**
  * @desc test function
*/
function testScope() {
  var scopeVar = "I'm local";
  console.log('Inside function', scopeVar);
}

testScope();

console.log('Outside function', scopeVar);
