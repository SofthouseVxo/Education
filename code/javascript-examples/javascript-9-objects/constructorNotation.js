function Person(name){
  this.name = name;
};

var user1 = new Person('John Doe');
var user2 = new Person('Jane Doe');

console.log(user1);
console.log(user2);

// Try to remove the "new" keyword and se what happens