let firstBox = document.getElementById('bubbling-first');
let secondBox = document.getElementById('bubbling-second');
let thirdBox = document.getElementById('bubbling-third');
let fourthBox = document.getElementById('bubbling-fourth');

/**
 * Using Bubbling propagation by setting parameter to true
 */

firstBox.addEventListener('click', function(e){
  // e.stopPropagation();
  console.log('first box clicked!');
});

secondBox.addEventListener('click', function(){
  console.log('second box clicked!');
});

thirdBox.addEventListener('click', function(){
  console.log('third box clicked!');
});

fourthBox.addEventListener('click', function(){
  console.log('fourth box clicked!');
});

document.body.addEventListener('click', function(){
  console.log('Body clicked!');
});
