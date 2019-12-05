let getUsersButton = document.getElementById('get-users');
let getUserButton = document.getElementById('get-user');

getUsersButton.addEventListener('click', getUsers);
getUserButton.addEventListener('click', getUser);

/**
  * @desc makes request to get all users using XMLHttpRequest object
*/
function getUsers(){
  let url  = 'https://jsonplaceholder.typicode.com/users';
  
	let xhr  = new XMLHttpRequest();
  
  xhr.open('GET', url, true);
  
  xhr.addEventListener('load', function () {
		let users = JSON.parse(xhr.responseText);
		
		if (xhr.readyState == 4 && xhr.status == '200') {
				console.table(users);
		} else {
				console.error(users);
		}
	});
	
	xhr.send(null);
}


/**
  * @desc makes request to get a specific user using XMLHttpRequest object
*/
function getUser(){
  let xhr = new XMLHttpRequest();

  // More examples of events we can listen to when making requests
	xhr.addEventListener('progress', ()=>{console.log('onUpdateProgress')});
	xhr.addEventListener('load', ()=>{console.log('onTransferComplete')});
	xhr.addEventListener('error', ()=>{console.log('transferFailed')});
	xhr.addEventListener('abort', ()=>{console.log('transferCanceled')});

	xhr.addEventListener('load', reqListener);

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
	xhr.send(); 
}

/**
  * @desc callback function that runs when response is loaded
*/
function reqListener () {
  console.log(JSON.parse(this.responseText));
}