let myInput = document.getElementsByTagName('input')[0];

myInput.addEventListener("input", event => {
    console.log('Value of input field', event.target.value);
});