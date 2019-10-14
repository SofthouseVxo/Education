var cars = ['volvo', 'saab', 'ford', 'bmw', 'fiat'];

/**
  * @desc a for loop where we define variable with var
*/
for (var i = 0; i < cars.length; i++) {
  for(var i = 0; i < cars.length; i++) {
    console.log(i);
  }
}

/**
  * @desc a for loop where we define variable with let
*/
for (let k = 0; i < cars.length; i++) {
  for(let k = 0; i < cars.length; i++) {
    console.log(i);
  }
}


/**
  * @desc Trying to overwrite a constant
*/
const USER_ID = '3423';

USER_ID = 'Nisse';