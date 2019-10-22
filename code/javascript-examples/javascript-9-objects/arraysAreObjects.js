var users = ['Jane', 'John'];

// forEach is a method of the Array object
users.forEach(function(user) {
	console.log(users.length);  // length is a property
});

// To see all properties and methods of the special array object
console.log(users.__proto__);