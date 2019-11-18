let myInput = document.getElementsByTagName('input')[0];
let myParagraph = document.getElementsByTagName('p')[0];

console.log(myInput);

myInput.addEventListener("input", function(event) {
    myParagraph.textContent = myInput.value;
});