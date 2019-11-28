let usernames = ['nisse', 'jane doe', 'john doe', 'elvis', 'bobby', '2pacy', 'biggie'];
let loginForm;
let loginInput;

function init(){
  initLoginForm();
  initLabel();
  initInputField();
  initFormButtons();
}

function initLoginForm(){
  loginForm = document.createElement('form');
  loginForm.setAttribute('id', 'login-form');

  document.body.appendChild(loginForm);
}

function initLabel(){
  let usernameLabel = document.createElement('label');
  usernameLabel.setAttribute('for', 'username');
  usernameLabel.textContent = 'Username';

  loginForm.appendChild(usernameLabel);
}

function initInputField(){
  loginInput = document.createElement('input');
  loginInput.className = 'login-input';
  loginInput.setAttribute('name', 'username');

  loginForm.appendChild(loginInput);
}

function initFormButtons(){
  let submitButton = document.createElement('button');
  submitButton.innerText = 'login';

  document.body.appendChild(submitButton);

  let resetFormButton = document.createElement('button');
  resetFormButton.innerText = 'reset';

  document.body.appendChild(resetFormButton);

  resetFormButton.addEventListener('click', function(){
    loginForm.reset();
  })

  submitButton.addEventListener('click', function(){
    let isValid = validate()
    if(isValid){
      loginForm.submit();
    } else {
      loginInput.style.border = '1px solid red';
    }
  })
}

function validate(){
  let input = loginInput.value;
  
  for(let i = 0; i < usernames.length; i ++){
    if(usernames[i] === input){
      return true;
    }
  }

  return false;
}

document.addEventListener('DOMContentLoaded', init);