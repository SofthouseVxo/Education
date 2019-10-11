var test = "I'm global";

/**
  * @desc test function
*/
function testScope() {
  var test = "I'm local";
}

testScope();           // invokes testScope function

console.log(test);     // output: I'm global
