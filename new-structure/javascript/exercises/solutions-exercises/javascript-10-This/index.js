// var name = 'John Doe';
console.log('global object', window);
console.log('global name', window.name);

console.log('this global this', this);
console.log('this name global', this.name);

function sayName(){
  console.log('this in function', this);
}
sayName();
console.log('window.name = ', window.name);

// ---------------------------

let speaker = {
  name: 'John Doe',
  screamOutName: function(){
    console.log(this.name + '!!!!!');
  }
}

speaker.screamOutName();