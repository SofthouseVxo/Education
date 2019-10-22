/**
 * @desc Alerts string
 */
function sayHello() {
  alert('hello world!')
};

// invoking/calling the function
sayHello();


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

let sandwich = makeSandwich('lettuce', 'cheese', 'bread');
// console.log(sandwich);


/**
 * @desc Area is an functionAn expression is any valid unit of code that resolves to a value.
 * 
 * @param number width 
 * @param number height 
 * 
 * @returns number
 */
var area = function(width, height) {
  return width * height;
}

var size = area(5,7);
console.log(size);


/**
 * @desc Function calling a function
 *
 * @param string word 
 *
 * @returns number
 */
function sayWord(word) {
  var allWords = word + getWord();
  console.log(allWords);
}

function getWord() {
  return ' world!';
}

sayWord('hello');