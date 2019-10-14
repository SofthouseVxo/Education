var cars = ['volvo', 'saab', 'ford', 'bmw', 'fiat'];

/**
  * @desc a for loop
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
*/
var text = '';
for (var i = 0; i < cars.length; i++) {
    text += i +'.' +  cars[i] + ' ';
}


/**
  * @desc a forEach Loop
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/ 
cars.forEach(function(car) {
    console.log(car);
});