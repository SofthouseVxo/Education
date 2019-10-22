/** 
  * @desc this class is a class containing functionality for a person.
  * @author Robin.lundin@softhouse.se
*/
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    if(typeof newName === 'string') this._name = newName;   // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    console.log(this._name + ' is walking.');
  }
}
         
let bob = new Person('Bob');

console.log(bob.name);  // Outputs 'BOB'

bob.name = 42;

console.log(bob.name);
