let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event){
  event.preventDefault(); // Preventing page reload
  if(validateform(this.fname, this.fpassword)){
    myForm.submit();
  } else {
    alert('There is an error!');
  }
})

function validateform(name, password){  
  if (name.value == null || name.value == ""){  
    return false;
  }else if(password.value.length < 6){  
    return false;  
  }

  return true;
}