let globalVariable = [93, 95, 88, 0, 55, 91];

(function (globalVariable) {

  // Keep this variables private inside this closure scope
  let privateFunction = function() {
    console.log('Shhhh, this is private!');
  }

  globalVariable.sumFunc = function() {
    let sum = 0;
    numbers.forEach((number)=> {
      sum = sum + number;
    })

    return sum;
  }
 }(globalVariable));

 // globalVariable can be accessed in the global scope