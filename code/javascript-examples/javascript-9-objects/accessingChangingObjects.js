// Creating a new object
var car = { color: 'red' };

// Accessing the color property 
console.log(car['color']);
console.log(car.color);
          
// Creating a new object
var bike = {
  color: 'blue'
}

// Setting new properties
bike.hasFrontLight = true;
bike['hasBackLight'] = false;
console.log(bike);

// Deleting property
delete bike.hasFrontLight;
console.log('after deletion', bike);


// Mutating the object

bike.color = 'red';
console.log(bike);


var dog = { color: 'brown', legs: 4};

var x = dog;  // This will not create a copy of dog.

// The object x is not a copy of dog. It is dog. Both x and dog are the same object.
// Any changes to x will also change dog, because x and dog are the same object.

x.legs = 8; // This will change both x.legs and dog.legs 

console.log(x.legs) // 8
console.log(dog.legs) // 8
