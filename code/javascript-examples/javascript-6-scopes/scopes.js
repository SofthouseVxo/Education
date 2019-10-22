var testVar = "I'm global";

/**
  * @desc test function
*/
function testScope() {
  var testVar = "I'm local";
  console.log(testVar);
}

testScope();

console.log(testVar);
