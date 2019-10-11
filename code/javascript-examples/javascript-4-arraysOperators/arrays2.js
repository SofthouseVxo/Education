var prices = [2, 4, 15];
console.log('initial prices', prices);

var firstValue = prices[0];
var secondValue = prices[1];
var thirdValue = prices[2];

console.log('first value', firstValue);
console.log('first value', secondValue);
console.log('first value', thirdValue);

prices[2] = 1000;

console.log('prices after change', prices);



var users = [];
users.length = 3;
console.log('users', users);