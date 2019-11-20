// console.log(document);
// document.write('Hello world!');

// //--------------------------------------------------------

// let headerRef = document.getElementById('main-header');
// console.log('headerRef', headerRef);

// //--------------------------------------------------------

// let byTag = document.getElementsByTagName('p');
// console.log(byTag);

// //--------------------------------------------------------

// let byClass = document.getElementsByClassName('content');
// console.log(byClass);

// //--------------------------------------------------------

let byQuerySelector = document.querySelector('p');
// console.log(byQuerySelector);

// //--------------------------------------------------------

let byQuerySelectorAll = document.querySelectorAll("p.content");
let firstItem = byQuerySelectorAll[3];

for(let i = 0; i < byQuerySelectorAll.length; i++){
  byQuerySelectorAll[i].style.color = 'blue';
}

// //--------------------------------------------------------

let childrenOfBody = document.body.children;
let parentOfHeader = headerRef.parentElement;

// //--------------------------------------------------------

// console.log('byTag', byTag);
// console.log('byClass', byClass);
// console.log('byQuerySelector', byQuerySelector);
// console.log('byQuerySelectorAll', byQuerySelectorAll);
// console.log('childrenOfBody', childrenOfBody);
// console.log('parentOfHeader', parentOfHeader);