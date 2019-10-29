let firstBox = document.getElementById('capturing-first');
let secondBox = document.getElementById('capturing-second');
let thirdBox = document.getElementById('capturing-third');
let fourthBox = document.getElementById('capturing-fourth');

/**
 * Using capturing propagation by setting parameter to true
 */
firstBox.addEventListener('click', function(e){
  console.log('first box clicked!');
},true);

secondBox.addEventListener('click', function(){
  console.log('second box clicked!');
},true);

thirdBox.addEventListener('click', function(){
  console.log('third box clicked!');
},true);

fourthBox.addEventListener('click', function(){
  console.log('fourth box clicked!');
},true);

document.body.addEventListener('click', function(){
  console.log('Body clicked!');
},true);