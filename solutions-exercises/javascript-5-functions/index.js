function speak(word){
  alert(word);
};
speak('Hello world!');

// ---------------------------------

function add(val1, val2){
  var addedValues = val2 + val2;
  return addedValues;
};

function subtract(val1, val2){
  var subtractedValues =  val1 - val2;
  return subtractedValues;
}

var addedNumbers = add(2,5)
var subbedNumbers = subtract(2,5)

console.log('Added numbers = ', addedNumbers);
console.log('Subtracted numbers = ', subbedNumbers);

// ---------------------------------

var randomNr = Math.floor(Math.random() * 30) + 1
console.log(randomNr);


