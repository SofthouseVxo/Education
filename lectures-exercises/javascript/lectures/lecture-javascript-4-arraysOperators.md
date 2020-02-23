### 4. JavaScript
#### Arrays & Operators

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  What is an Array?

* Arrays are used to store multiple values in a single variable.
* Use arrays when you have a list of related values.

```JavaScript
var prices = [59, 132, 99];
var vehicles = ['car', 'motorcycle', 'bus'];
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
  

####  Creating arrays

```JavaScript
var vehicles = ['car', 'motorcycle', 'bus'];
```

```JavaScript
var vehicles = new Array('car', 'motorcycle', 'bus');
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Arrays
* Arrays start with index 0

```JavaScript
var prices = [2, 4, 15];
var firstValue = prices[0]; // firstValue = 2
var secondValue = prices[1]; // secondValue = 4
var thirdValue = prices[2]; // thirdValue = 15
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
        

####  Array properties and methods

* Arrays have built in methods and properties.
* In simple words they have functionality that we can access and stuff we can do with them.
* We will talk alot about these concepts later on.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---        


####  Length of an Array
* length is a property of arrays that returns or sets the number of elements in a given array.

```JavaScript
var prices = [2, 4, 15];
console.log(prices.length); // 3
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Set the length of an Array
* length is a property of arrays that returns or sets the number of elements in a given array.

```JavaScript
var prices = [];
prices.length = 3;
console.log(prices); // [undefined, undefined, undefined]
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Changing values in an array

```JavaScript
var prices = [2, 4, 15];

prices[2] = 18;
console.log(prices); // [2, 4, 18]
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Empty an array

```JavaScript
var prices = [2, 4, 15];

/** 
* Option 1
* Assigns a reference to a new array to a variable, while any other references are unaffected. 
* Which means that references to the contents of the previous array are still kept in memory, leading to memory leaks.
*/ 
prices = [];

// Option 2
prices.length = 0;
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Adding and Removing elements in arrays

* Array.push() & Array.pop()

```JavaScript
var numbersArray = [2, 4, 15];

// .push() adds a value in the end of the array
numbersArray.push(99); // [2, 4, 15, 99]

// .pop() removes the last value in the array
numbersArray.pop(); // [2, 4, 15]
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Remove a certain part from an array

* Splicing arrays in JavaScript removes a certain part from an array to create a new array, made up from the part we took out. 
* array.splice(index, howmany, item1, ....., itemX)

```JavaScript
var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5);
  
console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9
```

[W3schools reference](https://www.w3schools.com/jsref/jsref_splice.asp)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Convert an Array to a string

* toString() converts an array to a string of (comma separated) array values.

```JavaScript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruitString = fruits.toString();

console.log(fruitString); // Banana,Orange,Apple,Mango
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Operators

* A symbol that tells the compiler or interpreter to perform specific mathematical, relational or logical operation and produce final result.

```JavaScript
var user = 'John Doe'; // = is the operator
var nrOfUsers = 10 + 3 + 5; // nrOfUsers = 18 and + is the operator
var result = 5 * 3; // result = 15 and * is the operator
var bigger = 10 > 5; // bigger = true and > is the operator
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Operators

```JavaScript
var color = 'red'; // Assignment operator
var result = 5 * 8; // Arithmetic operator
var name = 'John ' + 'Doe' ; // String operator
var bigger = 10 > 5; // Comparison operator
var buy = (5 > 3) && (2 < 4) // Locical operator
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Arithmetic operators

```JavaScript
8 + 2;  // 10
8 - 4;  // 4
8 - 10; // -2
8 / 2;  // 4
8 * 4;  // 32
8++;    // 9 , adds 1
8--;    // 7 , subtracts by 1
20%3;   // 2 , the remainder = how much is left after 20/3 = 18 and (2) is left
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Arithmetic operators

```JavaScript
var result = 8 // 8
result = result + 2 // 10

// Same as above
var result2 = 8 // 8
result2 += 2 // 10

// Also works with -=   *=   /=
var result2 = 8 // 8
result2 -= 2 // 6
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  String operator

* NaN = Not a Number

```JavaScript
var result = '4' + '5';           // '45'
var result2 = '4' * '5';          // 20
var sentence = 'I ' + 'am ' + 45; // 'I am 45'
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>