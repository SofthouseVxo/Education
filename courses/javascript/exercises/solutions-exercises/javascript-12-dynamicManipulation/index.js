let paragraphRef = document.getElementById('awesome-paragraph');
paragraphRef.textContent = "I'm awesome";

// -----------------------------------------

paragraphRef.innerText = "I'm still awesome";

// -----------------------------------------

let divRef = document.getElementById('container');

divRef.innerHTML = `
  <div>
    <h1>Added with innerHTML</h1>
    <p>Some text</p>
  </div>
`;

// -----------------------------------------

console.log(document.getElementsByTagName('h1')[0]);
console.log(document.querySelector('p'));

// -----------------------------------------

let newDiv = document.createElement('div');

// document.body.appendChild(newDiv);
divRef.appendChild(newDiv);

// -----------------------------------------

document.body.removeChild(paragraphRef);
document.body.removeChild(divRef);

// -----------------------------------------

let newestSection = document.createElement('section');
let newestDiv = document.createElement('div');
let newestPara = document.createElement('p');
newestPara.textContent = 'Hello World!';

let newestButton = document.createElement('button');
newestButton.textContent = 'Press me!';

document.body.appendChild(newestSection);
newestSection.appendChild(newestDiv);
newestDiv.appendChild(newestPara);
newestDiv.appendChild(newestButton);

