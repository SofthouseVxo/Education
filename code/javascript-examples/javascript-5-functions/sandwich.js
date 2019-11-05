/**
 * @desc Makes a sandwich from ingredients from arguments
 * 
 * @param string ingredient1 
 * @param string ingredient2 
 * @param string ingredient3
 * @returns string the sandwich
 */
function makeSandwich(ingredient1, ingredient2, ingredient3) {
  var sandwich = ingredient1 + ingredient2 + ingredient3;
  return sandwich;
};

let sandwich = makeSandwich('lettuce ', 'cheese ', 'bread');
console.log('the sandwich consists of ', sandwich);