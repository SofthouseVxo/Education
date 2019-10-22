// One way to create an object
var car = { color: 'red' };


// Another
var dog = new Object();
dog.color = "brown";


// More advanced object with properties and methods
var person = {
	// firstName and lastName are properties
	firstName: 'John',
	lastName: 'Doe',

	// getFullName is a method
	getFullName : function() {
		return this.firstName + " " + this.lastName;
	}
};

var name = person.getFullName();