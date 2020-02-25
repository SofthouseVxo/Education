### 8. JavaScript
#### Loops


---

### Loops
#### Repeatedly run a blocks of code.


---

####  Looping
* Repeatedly run a block of code - until a certain condition is met.
* To iterate over something, an array for example.
* Could be a list of users, html-elements etc.

```JavaScript
let users = ['Jane', 'Roxy', 'John', 'Rex'];

let i = 0;

while (i < users.length) {
  // code block to be executed
  console.log(users[i]);
  i++;
}
```



---

####  Loop lifecycle
1. Loops check a condition, if it returns true a block of code will be executed.
1. After executing the block of code, checks again, if true then run code block again.
1. Repeat until condition is false, then stop.


---

####  3 basic type of loops
* **WHILE** loop
* **DO WHILE** loop
* **FOR** loop


---

####  While
* Will continue to run as long as the condition is true.
* Used when we DON'T know how many times something should run.

```JavaScript
let i = 1;
let numberOfTimes = 6;

// will run 5 times
while (i < numberOfTimes) {
  // code block to be executed
  console.log('i is ' + i);
  i++;
}
```



---

####  Do While
* Same as While however this will run ONCE even if the condition is false

```JavaScript
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);
```



---

####  For loop

* Will continue to run as long as **i** does **not** meet the condition.
* Used when we DO know how many times something should run.
* I this case **i** is smaller than 6.
```JavaScript
// First lap i is 0, it is lower than 6 so code runs, and when code ran we increase i with 1
// Second lap i is 1, it is lower than 6 so code runs, and when code ran we increase i with 1
// Third lap i is 2, it is lower than 6...
// Fourth lap i is 3, it is lower than 6...
// Fifth lap i is 4, it is lower than 6...
// Sixth lap i is 5, it is lower than 6...
// Seventh lap i is 6, it is NOT lower than 6, loop stops without running the code block inside
for(let i = 0; i < 6; i++){
  console.log('lap nr ' + i);
}
```


---

####  Stop the loop

```JavaScript
// Will log 0, 1, 2, 3
for (let i = 0; i < 6; i++) {
  console.log(i);
  if (i == 3) {
    break; // Loop will stop when i is 3.
  }
}
```


---

####  Jump to the next iteration

```JavaScript
// Will log 0, 1, 3, 4, 5, 
for (let i = 0; i < 6; i++) {
  if (i == 2) {
    continue;
  }
  console.log(i);
}
```


---

####  Nested loops

* It is possible to have loops inside loops as well.

```JavaScript
// Will log 0, 1, 3, 4, 5 how many times?
for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 6; k++) {
    console.log(k);
  }
}
```


---

####  Iterate over arrays

* Using the **while loop**.

```JavaScript
let index = 0; 
const arr = ['a', 'b', 'c'];
  
while (index < arr.length) { 
  console.log(arr[index]); 
  index++; 
}
```
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for">MDN Reference</a>


---

####  Iterate over arrays

* Using the **for loop**.

```JavaScript
const arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for">MDN Reference</a>


---

####  Iterate over arrays

* Using the **forEach** loop.

```JavaScript
let arr = ['a', 'b', 'c'];

arr.forEach(function(element) {
  console.log(element);
});
```
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">MDN reference</a>


---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>