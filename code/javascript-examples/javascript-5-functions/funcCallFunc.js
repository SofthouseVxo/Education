/**
 * @desc Function calling a function
 *
 * @param string word 
 *
 * @returns number
 */
function sayWord(word) {
  var allWords = word + getWord();
  console.log(allWords);
}

function getWord() {
  return ' world!';
}

sayWord('hello');