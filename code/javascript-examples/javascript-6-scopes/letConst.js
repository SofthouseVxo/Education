var cars = ['volvo', 'saab', 'ford', 'bmw', 'fiat'];


/**
  * @desc a for loop where we define variable with var
*/
for(var i = 0; i < cars.length; i++) {
  console.log('i  outer', i);
  for(var i = 0; i < cars.length; i++) {
    console.log('i inner', i);
  }
}


/**
  * @desc a for loop where we define variable with let
*/
for (let i = 0; i < cars.length; i++) {
  for(let i = 0; i < cars.length; i++) {
    console.log(i);
  }
}

const isTrue = true;

/**
  * @desc Trying to overwrite a constant
 */
if(isTrue){
  const isFalse = false;
  console.log(isTrue);
}
console.log(isFalse);

// /**
//   * @desc Trying to overwrite a constant
// */
// const USER_ID = '3423';

// USER_ID = 'Nisse';

