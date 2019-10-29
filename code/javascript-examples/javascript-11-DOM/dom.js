// console.log(document);
document.write('Hello world!');

let headerRef = document.getElementById('main-header');
console.log('headerRef', headerRef);

let byTag = document.getElementsByTagName('p');

let byClass = document.getElementsByClassName('content');

let byQuerySelector = document.querySelector('p');

let byQuerySelectorAll = document.querySelectorAll("p.content");

let childrenOfBody = document.body.children;

let parentOfHeader = headerRef.parentElement;

console.log('byTag', byTag);
console.log('byClass', byClass);
console.log('byQuerySelector', byQuerySelector);
console.log('byQuerySelectorAll', byQuerySelectorAll);
console.log('childrenOfBody', childrenOfBody);
console.log('parentOfHeader', parentOfHeader);





