/**
 * Custom element already added in the HTML page
 */
// document.addEventListener('DOMContentLoaded', () => {
//   let customElementRef = document.querySelector('custom-element');

//   console.log('Custom element:', customElementRef);

//   customElementRef.addEventListener('click', onClickCustomElement);
// })

// function onClickCustomElement(){
//   console.log('The custom element was clicked!');
// }

/**
 * Custom element created and added here in JS file
 */
class CustomElement extends HTMLElement {
  constructor(){
    super();
    console.log('This logged inside custom element constructor', this);
  }
}
window.customElements.define('custom-element', CustomElement);

document.addEventListener('DOMContentLoaded', () => {
  let customElement = document.createElement('custom-element');
  document.body.appendChild(customElement);
  customElement.className = 'custom-class';
  
  customElement.addEventListener('click', onClickCustomElement);
})

function onClickCustomElement(){
  console.log('The custom element was clicked!');
}