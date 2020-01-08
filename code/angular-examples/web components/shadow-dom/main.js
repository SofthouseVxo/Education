// Define the new element
customElements.define('popup-info', PopUpInfo);

let popupInfoRef = document.getElementsByTagName('popup-info')[0];

// console.log(popupInfoRef.childNodes); // Uncomment, does it have any children?

// console.log(popupInfoRef.shadowRoot.childNodes);  // Try changing to this.attachShadow({mode: 'closed'});  inside PopUpInfo