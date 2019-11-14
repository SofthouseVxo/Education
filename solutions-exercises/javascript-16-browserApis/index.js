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
  let user = localStorage.removeItem('user');
}