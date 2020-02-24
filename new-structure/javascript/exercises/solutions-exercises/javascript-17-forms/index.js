let myForm = document.getElementById('my-form');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();

  console.log(event.target.elements.fname.value);
  console.log(event.target.elements.femail.value);

  event.target.reset();
}

// -------------------------------------------------

// function onSubmit(event){
//   event.preventDefault();

//   // I'm mixing this and event only to show that its possible to use both
//   let form = this;
//   let error = validate([form.fname, form.fpassword]);
//   if(!error){
//     myForm.submit();
//   } else {
//     let errorParagraph = document.createElement('p');
//     errorParagraph.style.color = 'red';
//     errorParagraph.innerText = error;
//     document.body.appendChild(errorParagraph);
//   }

//   console.log(event.target.elements.fname.value);
//   console.log(event.target.elements.femail.value);

//   event.target.reset();
// }

// function validate(inputs){
//   let errorMsg;
  
//   inputs.forEach(input => {
//     errorMsg = input ? null : 'You need to fill all inputs!';
//   });

//   return errorMsg;
// }
