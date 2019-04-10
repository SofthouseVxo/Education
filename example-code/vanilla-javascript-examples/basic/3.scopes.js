var test = "I'm global";

function testScope() {
  var test = "I'm local";
}

testScope();           // output: I'm local

console.log(test);     // output: I'm global
