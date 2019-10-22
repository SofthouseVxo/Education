console.log('this in global scope', this);

function testFunc() {
  console.log('this in function scope', this);
}

testFunc();

let testObject = {
  func: function(){
    console.log('this in a function in object', this);
  }
}

testObject.func();


function anotherTestFunc() {
  console.log('this in function scope', this);
}

/**
 * Since the "new" keyword creates and object instance "this" 
 * will not be window anymore and instead the object
 */
let func = new anotherTestFunc();