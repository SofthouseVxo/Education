let myForm = document.getElementById('myForm');

// Fires when the form is submitted
myForm.addEventListener('submit', function(event){
  event.preventDefault(); // Preventing page reload
  console.log('the form', event.target);
  console.log('the form', myForm);
  console.log('the form', this);
  
  // console.log(this.elements.nameInput.value); // The value of the nameInput input
})