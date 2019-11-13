// var i = 0;
// var numberOfLoops = 5;
// while(i < numberOfLoops){
//   console.log('i is ', i);
//   i++;
// }

// ---------------------------------

var x = 0;
var numberOfLoops = 8;
do{
  console.log('x is ', x);
  x++;
}
while(x < numberOfLoops);

// ---------------------------------

for(var k = 0; k < 8; k++){
  console.log('k is', k);
}

// ---------------------------------

let users = [ 'Jane','John','Kitty','Kalle'];

for(var j = 0; j < users.length; j++){
  console.log(users[j]);
}

users.forEach(function(user){
  if(user.length > 4) {
    console.log('Longer than 5');
  } else {
    console.log('shorter than 5');
  }
});

// ---------------------------------

let sentence = 'Skapa nu en funktion som returnerar det längsta ordet i en mening';

function longestWord(sentence){
  let arrayOfWords = sentence.split(' ');
  let longestWord = '';

  for(let i = 0; i < arrayOfWords.length; i++){ 
    if(arrayOfWords[i].length > longestWord.length){
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord;   //  return the longest word.
}

console.log(longestWord(sentence));