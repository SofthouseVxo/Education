var myBody = document.getElementsByTagName('body')[0];
var myDiv = document.getElementById('my-div');
var myButton = document.getElementById('my-button');

myBody.addEventListener('click', callback1);
myDiv.addEventListener('click', callback2);
myButton.addEventListener('click', callback3);

function callback1(e){
  console.log('1', e.target);
}
function callback2(e){
  console.log('2', e.target);
}
function callback3(e){
  console.log('3', e.target);
}