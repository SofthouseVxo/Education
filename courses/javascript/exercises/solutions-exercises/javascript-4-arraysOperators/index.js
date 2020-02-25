var numbersArray = [3, 5];
console.log(numbersArray[0]);

// ---------------------------------

numbersArray.push(false);
console.log(numbersArray);

// ---------------------------------

console.log(numbersArray.length);

// ---------------------------------

var newArray = [2,'nisse', 7];
newArray[1] = 234;
console.log(newArray);

// ---------------------------------

var secondNewArray = [10, false, 'Hello'];
console.log(secondNewArray);
secondNewArray.pop();
console.log(secondNewArray);

// ---------------------------------

console.log('toString: ' + secondNewArray.toString());

// ---------------------------------

var user = 'John Doe';
var users = [];
users.push(user);
console.log(users);

// ---------------------------------

var numValue = 3;
numValue += 10;
numValue -= 20;
console.log(numValue);

// ---------------------------------

var value = 6;
var results = value * 18;
console.log(results);

// ---------------------------------

var value2 = 232;
value2 -= 22;
value2 /= 3;
console.log(value2);

// ---------------------------------

var firstName = 'John';
var lastName = 'Doe';

var fullName = firstName + ' '+ lastName;
console.log(fullName);

// ---------------------------------

var increase = 4;
var increaseBy = 3;

increase += increaseBy;
console.log(increase);

// ---------------------------------

var isTrue = 25 > 10;
console.log(isTrue);

// ---------------------------------

var intValue = '45';
var intValue2 = '65';
var intResult = intValue + intValue2;
console.log(intResult);

// ---------------------------------

var intValue3 = '20';
var intValue4 = '5';
var intResult2 = intValue3 * intValue4;
console.log(intResult2);

// ---------------------------------

var intValue5 = '90';
var intValue6 = '5';
var intResult3 = intValue5 + intValue6;
console.log(intResult3);
console.log(Number(intResult3));