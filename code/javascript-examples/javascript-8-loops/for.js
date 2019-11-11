var cars = ['volvo', 'saab', 'ford', 'bmw', 'fiat'];

/**
  * @desc a "for" loop
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
*/
var text = '';
for (var i = 0; i < cars.length; i++) {
    text += i +'.' +  cars[i] + ' ';
}

/**
  * @desc a for loop where we define variable with var
*/
for(let i = 0; i < cars.length; i++) {
  console.log('car  outer', cars[i]);
  for(let k = 0; k < cars.length; k++) {
    console.log('car inner', cars[k]);
  }
}

/**
  * @desc a for loop where if i = 3 we continue and ignores that lap
*/
for(let i = 0; i < cars.length; i++ ){
  if(i === 3){
    continue;
  }
  console.log(cars[i]);
}

/**
  * @desc a for loop where if i = 3 we stop the loop
*/
for(let i = 0; i < cars.length; i++ ){
  if(i === 3){
    break;
  }

  console.log(cars[i]);
}

