/**
 * @desc Makes a sandwich from ingredients from arguments
 * 
 * @param string ingredient1 
 * @param string ingredient2 
 * @param string ingredient3
 * @returns string the sandwich
 */
function makeSandwich(ingredient1, ingredient2, ingredient3, ingredient4) {
  var sandwich = ingredient1 + ingredient2 + ingredient3 + ingredient4;
  return sandwich;
};

var sandwich = makeSandwich('lettuce ', 'cheese ', 'bread');
var sandwich2 = makeSandwich('meat ', 'tomatoes ', 'bread', ' cucumber');

console.log('the sandwich consists of ', sandwich);
console.log('the second sandwich consists of ', sandwich2);
