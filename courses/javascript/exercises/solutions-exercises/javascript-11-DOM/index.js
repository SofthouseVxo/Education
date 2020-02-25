let myButtonRef = document.getElementById('my-button');

let myThreeDivs = document.getElementsByClassName('my-divs');

let firstDivRef = myThreeDivs[0];
console.log(firstDivRef);

// --------------------------------------

let secondDivRef = document.getElementsByTagName('div')[1];
console.log(secondDivRef);

// --------------------------------------

let thirdDivRef = document.querySelector('.my-divs');  // NOT working as intended will recieve the first div.
console.log(thirdDivRef);

// --------------------------------------

let myList = document.getElementsByTagName('ol');

let firstListItemRef = myList[0].childNodes[1];
console.log(firstListItemRef.innerHTML);