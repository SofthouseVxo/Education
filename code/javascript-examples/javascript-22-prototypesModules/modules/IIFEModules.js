/**
 * 
 * Immediately Invoked Function Expression
 * 
 */
(function(){
  // This variable is private inside this closure scope
  let numbers = [93, 95, 88, 0, 55, 91];

  // This variable is private inside this closure scope
  let sumFunc = function() {
    let sum = 0;
    numbers.forEach((number)=> {
      sum = sum + number;
    })

    return sum;
  }

  console.log(sumFunc());
})();

// Try to access this function in the global scope...