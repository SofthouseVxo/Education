let myImg =  document.getElementsByTagName('img')[0];

console.log(myImg.hasAttribute('src')); // true
console.log(myImg.getAttribute('src')); // profile-image

setTimeout(function(){
  myImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLvHHRN2I-TX6lxzsYKm9c2i1cjDNxLDvchu6hhAiI2_hjL8U6');
  console.log(myImg);
}, 2000)


// let myImgs =  document.getElementsByClassName('profile-image'); // <img class="profile-image">
// console.log(myImgs);
// myImgs[0].setAttribute('class', 'new-class'); // <img class="new-class">
// console.log(myImgs);
// myImgs = document.getElementsByClassName('new-class'); // Why do I need to get it again?
// console.log(myImgs);
// myImgs[0].setAttribute('src', 'profile.png');  // <img class="new-class" src="profile.png">
// console.log(myImgs);
// myImgs[0].removeAttribute('src'); // <img class="new-class">