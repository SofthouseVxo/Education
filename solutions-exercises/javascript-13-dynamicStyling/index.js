let newSection = document.createElement('section');
let newDiv = document.createElement('div');

let newH1 = document.createElement('h1');
newH1.textContent = "I'm awesome";

let newAnchor = document.createElement('a');
newAnchor.textContent = 'w3schools';

let newButton = document.createElement('button');
newButton.textContent = "Press me, or don't!";

document.body.appendChild(newSection);
newSection.appendChild(newDiv);

newDiv.appendChild(newH1);
newDiv.appendChild(newAnchor);
newDiv.appendChild(newButton);

// -------------------------------

console.log(newAnchor.hasAttribute('href'));

newAnchor.setAttribute('href', 'https://www.w3schools.com/jsref/dom_obj_attributes.asp');

// -------------------------------

let myButton = document.getElementsByTagName('button')[0];
myButton.style.backgroundColor = 'blue';
myButton.setAttribute('style', 'color: #fff; background-color: blue;');

// -------------------------------

newH1.className = 'my-header';