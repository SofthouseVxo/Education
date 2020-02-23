### 9. JavaScript
#### Objects

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### What is an object?

* A product that can do things and contains information about its current state.
* Each Object has a purpose and a task.
* Real world examples could be  a **lamp** or a **human**.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### <i>In JavaScript, objects are king. If you understand objects, you understand JavaScript.</i> - W3Schools

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Objects can have <u>Properties</u> and <u>Methods</u>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Properties

* A property is a variable connected to a specific object.
* A property contains information about the object.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Methods

* A method is a function connected to a specific object.
* Methods are actions that can be performed on objects.
* Methods are used to give an object functionality.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Real world properties & methods

* What properties does a human have?
* What methods does a human have?

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Exercise

* Pair up with the one next to you.
* Pick 2 objects from the real world, could be anything (plants, people, vehicles, furniture).
* Identify properties and methods of all these.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Objects in JavaScript

* An object consists of a group of values(properties, methods) compiled under one name.
* These are name Value pairs.
* Objects are like variables. But objects can contain many values.

```JavaScript
let obj = { 
  color: 'red', // color = name, red = value
  run: function(){
    console.log('running');
  }
};
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Creating an object using an object literal

```JavaScript
let car = { color: 'red' };
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Creating an object using the **new** keyword

```JavaScript
let car = new Object();

car.color = "red";
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Accessing an object

```JavaScript
let car = { color: 'red' };

console.log(car.color); // red "dot notation"
console.log(car['color']); // red "bracket notation"
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Objects - Methods

* When a function is tied to an object it is called a **Method**.

```JavaScript
let person = {
  firstName: 'John',
  lastName: 'Doe',
  // getFullName is a method
  getFullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Objects - Calling Methods

```JavaScript
let person = {
  firstName: 'John',
  lastName: 'Doe',
  // getFullName is a method
  getFullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

let name = person.getFullName(); // John Doe
let name2 = person['getFullName'](); // John Doe
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Dot notation vs bracket notation

```JavaScript
const variable = 'name';

const obj = {
name: 'value'
};

obj[variable]; // 'value'
obj.variable; // undefined
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### <u>Dot</u> notation vs bracket notation

```JavaScript
obj.123;        // SyntaxError
obj.123name;    // SyntaxError
obj.name123;    // works
obj.$name;      // SyntaxError
obj.'name-123'; // SyntaxError
obj.NAME;       // works
obj.name;       // works
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Dot notation vs <u>bracket</u> notation

```JavaScript
obj['123'];          // works
obj['123value'];     // works
obj['value123'];     // works
obj['$value'];       // works
obj['value'];        // works 
obj['value value'];  // works 
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Dot notation vs <u>bracket</u> notation

```JavaScript
let myObj = {};

for (var i = 0; i < 10; i++) {
myObj['key' + i] = i;
}

console.log(myObj);
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Adding to an object after declaration

* If the property does not exist from before it will be added.

```JavaScript
let bike = {
  color: 'blue'
}

bike.hasFrontLight = true; // { color: 'blue', hasFrontLight: true }
bike['hasBackLight'] = false; // { color: 'blue', hasFrontLight: true, hasBackLight: false }

```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Removing from an object

* delete will remove the property or method from the object.

```JavaScript
let bike = {
  color: 'blue',
  hasFrontLight:true
}

delete bike.hasFrontLight; // { color: 'blue'}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Mutating JavaScript Objects

* An immutable value is one that, once created, can never be changed.
* Objects are mutable.
* They are also addressed by reference, not by value.

```JavaScript
let bike = { color: 'blue' };

bike.color = 'red';

console.log(bike.color); // red
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Objects - addressed by reference, not by value

```JavaScript
let car = { color: 'red', wheels: 4};

let x = car;  // This will not create a copy of car.

// The object x is not a copy of car. It is car. Both x and car are the same object.

// Any changes to x will also change car, because x and car are the same object.

x.wheels = 8; // This will change both x.wheels and car.wheels 

console.log(x.wheels) // 8
console.log(car.wheels) // 8
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Object in an object

```JavaScript
let bike = {
  color: 'blue',
  pedal: function(){
    console.log('I pedal')
  },
  frontLight: {
    color: 'yellow'
  }
}

let hasFrontLight = bike.frontLight.color; // yellow
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Creating many objects: constructor notation

* The **new** keyword followed by a call to a function creates a new Object.
* For every time the **new** keyword is used a new instance of the objects is created.

```JavaScript
function Person(name){
  this.name = name;
};

let user1 = new Person('John Doe'); // Person { name: 'John Doe' }
let user2 = new Person('Jane Doe'); // Person { name: 'Jane Doe' }
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### In JavaScript, almost "everything" is an object.

* **Booleans, Numbers & Strings** can be objects(if they are defined with the **new** keyword)
* **Dates** - are always objects
* **Maths** - are always objects
* **Regular expressions** - are always objects
* **Arrays** - are always objects
* **Functions** - are always objects
* **Objects** - are always objects

All JavaScript values, except primitives, are objects.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Functions are Objects

* Functions are a special kind of Object.
* You can attach primitives and other functions.
* Functions have a "code" property which is the code that runs when the function is invoked.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Functions are Objects

* Example just to show that it works.

```JavaScript
let greet = function(){
  console.log('Hi!');
}

greet.language = 'swedish';

console.log(greet.language); // swedish
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Arrays are a special type of Objects

```JavaScript
let users = ['Jane', 'John'];

// forEach is a method of the Array object
users.forEach(function(user) {
  console.log(users.length);  // length is a property
});
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Iterating over Objects

* The for...in statement iterates over all non-Symbol, enumerable properties of an object.

```JavaScript
let string1 = "";
let object1 = {a: 1, b: 2, c: 3};

for (let property1 in object1) {
string1 += object1[property1];
}

console.log(string1);  // "123"
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>
