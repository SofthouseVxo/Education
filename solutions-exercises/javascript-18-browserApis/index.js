let addButton = document.createElement('button');
addButton.innerText = 'add to storage';

let removeButton = document.createElement('button');
removeButton.innerText = 'remove to storage';

document.body.appendChild(addButton);
document.body.appendChild(removeButton);

addButton.addEventListener('click', addUser);
removeButton.addEventListener('click', removeUser);

function addUser(){
  let user = localStorage.getItem('user');

  if(user){
    console.log('user', user);
  } else {
    localStorage.setItem('user', 'Jane')
  }
}

function removeUser(){
  localStorage.removeItem('user');
}

// -------------------------------------------------

document.cookie = "user=Jane; expires=Thu, 24 Feb 2020 19:00:00 UTC; path=/";