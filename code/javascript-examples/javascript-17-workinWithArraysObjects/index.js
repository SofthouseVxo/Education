/**
 * Iterating over Arrays with for loop
*/
let array1 = [1, 4, 9, 16];
let newArray1 = [];

for(let i = 0; i < array1.length; i++){
    let newValue = array1[i] * 2;
    newArray1.push(newValue);
}

console.log('newArray1', newArray1);



/**
 * For...of loop
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/

const array2 = ['a', 'b', 'c'];

for (const element of array2) {
  console.log('element in array2', element);
}



/**
 * Iterating over Objects with For
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
*/

let string3 = "";
let object3 = {a: 1, b: 2, c: 3};

for (let property3 in object3) {
  string3 += object3[property3];
}

console.log('string3', string3);



/**
 * Array.map()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

let array4 = [1, 4, 9, 16];

// pass a function to map
const map4 = array4.map(function(x){
  return x * 2
} );

console.log('array4', array4);
console.log('map4', map4);



/**
 * Array.filter()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

let words5 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result5 = words5.filter(function(word){
  return word.length > 6
});

console.log('words5', words5);
console.log('result5', result5);



/**
 * Object.keys()
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/

const object6 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log('object keys in object6', Object.keys(object6));



/**
 * Object.values()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
*/

const object7 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log('object values in object7', Object.values(object7));



/**
 * Object.entries()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
*/

const object8 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log('object entries in object8',Object.entries(object8));



/**
 * Array.every()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/

let array9 = [1, 2, 3, 4, 5];

let even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log('some in array9', array9.some(even));



/**
 * Array.some()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
*/

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

let array10 = [1, 30, 39, 29, 10, 13];

console.log('every in array10', array10.every(isBelowThreshold));



/**
 * Array.sort()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

let months11 = ['March', 'Jan', 'Feb', 'Dec'];
months11.sort();
console.log('months11', months11);

let array11 = [1, 30, 4, 21, 100000];
array11.sort();
console.log('array11', array11);



/**
 * Array.concat()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
*/

let array12 = ['a', 'b', 'c'];
let array13 = ['d', 'e', 'f'];

console.log('concatinated arrays', array12.concat(array13));