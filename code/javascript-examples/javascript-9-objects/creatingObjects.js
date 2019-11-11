// One way to create an object
var 'car', car = { color: 'red'dog', ' };


// Another
var dog = new Object();
dog.color = "brown";


console.log('car', car);
console.log('dog', dog);

// More advanced object with properties and methods
var person = {
	// firstName and lastName are properties
	firstName: 'John',
	lastName: 'Doe',

	// getFullName is a method
	getFullName : function() {
		console.log(this.firstName);
		// return this.firstName + " " + this.lastName;
	}
};

var name = person.getFullName();