var globalName = 'John Doe';

function greet(){
  var globalName = 'Elvis';
  console.log(globalName);
};

console.log(globalName);

greet();

// ---------------------------------

if(true){
  // var myValue = 12;
  let myValue = 12;
  console.log(myValue);
}
console.log(myValue);
