let mySumerizer = (function () {
    
  // Keep this variable private inside this closure scope
  let numbers = [93, 95, 88, 0, 55, 91];

  let privateFunction = function() {
    console.log('Shhhh, this is private!');
  }

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block
  let sumFunc = function() {
    let sum = 0;
    numbers.forEach((number)=> {
      sum = sum + number;
    })

    return sum;
  }

  return {
    sum: sumFunc
  }
})();

console.log(mySumerizer.sum());
