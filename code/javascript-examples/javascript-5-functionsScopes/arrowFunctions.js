/**
 * @desc Ordinary function
 * @param string sentence 
 */
var greet = function greet(sentence){
  console.log(sentence);
}

/**
 * @desc Same function as above but as an arrow function
 * @param string sentence 
 */
var greet2 = (sentence)=>{
  console.log(sentence);
}

greet('Hello world!');
greet2('Hello Mom!');



/**
 * @desc timeout function accepting a function as param
 */
setTimeout(function(){
  console.log('called after 2 sec.')
}, 2000)


/**
 * @desc timeout function accepting an arrow function as param
 */
setTimeout(()=>{
  console.log('called after 1 sec.')
}, 1000)


