var height = 190;

if(height > 100){
  console.log('higher than 100')
}
if(height < 180){
  console.log('lower than 180')
}
if(height == 190){
  console.log('exactly 190')
}
if(height === 190){
  console.log('exactly 190 and same type')
}

// ---------------------------------

if(height > 100){
  console.log('higher than 100')
}
else if(height < 180){
  console.log('lower than 180')
}
else if(height == 190){
  console.log('exactly 190')
}
if(height === 190){
  console.log('exactly 190 and same type')
}

// ---------------------------------

if(height.length > 10){
  console.log('height is longer than 10 words');
}

// ---------------------------------

var newValue = 15;

if(newValue < 50){
  console.log('height is less than 50');
}

// ---------------------------------

if(newValue <= 24){
  console.log('height is less than or equals to 24');
}

// ---------------------------------

var myValue = 'hello';

switch(myValue){
  case 'hello':
    console.log('Say Hello');
    break;
  case 'goodbye':
    console.log('Say goodbye');
    break;
  case 'seeya':
    console.log('Say see ya later aligator');
    break;
}

// ---------------------------------

function checkWord(word){
  if(typeof word === 'string' && word.charAt(0) === 'p' && word.length > 10){
    return word;
  }
}

function alertWord(word){
  if(word) alert(word);
  else alert('Incorrect word');
}

// word goes here
var checkedWord = checkWord();
alertWord(checkedWord);




// // Another alternative using startsWith instead
// function checkWord(word){
//   if(typeof word === 'string' && word.startsWith('p') && word.length > 10){
//     return word;
//   }
// }