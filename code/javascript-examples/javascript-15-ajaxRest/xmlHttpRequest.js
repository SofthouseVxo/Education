let getUsersButton = document.getElementById('get-users');
let getUserButton = document.getElementById('get-user');
let postUserButton = document.getElementById('post-user');
let putUserButton = document.getElementById('put-user');
let deleteUserButton = document.getElementById('delete-user');

getUsersButton.addEventListener('click', getUsers);
getUserButton.addEventListener('click', getUser);
postUserButton.addEventListener('click', createUser);
putUserButton.addEventListener('click', updateUser);
deleteUserButton.addEventListener('click', deleteUser);

/**
  * @desc makes request to get all users using XMLHttpRequest object
*/
function getUsers(){
	let url  = "https://jsonplaceholder.typicode.com/users";
	let xhr  = new XMLHttpRequest()
	xhr.open('GET', url, true)
	xhr.onload = function () {
		let users = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
				console.table(users);
		} else {
				console.error(users);
		}
	}
	xhr.send(null);
}

/**
  * @desc makes request to get a specific user using XMLHttpRequest object
*/
function getUser(){
  let oReq = new XMLHttpRequest();
	oReq.addEventListener("progress", ()=>{console.log('onUpdateProgress')});
	oReq.addEventListener("load", ()=>{console.log('onTransferComplete')});
	oReq.addEventListener("error", ()=>{console.log('transferFailed')});
	oReq.addEventListener("abort", ()=>{console.log('transferCanceled')});

	oReq.addEventListener("load", reqListener);

	oReq.open("GET", "https://jsonplaceholder.typicode.com/users/1");
	oReq.send(); 
}

/**
  * @desc callback function that runs when response is loaded
*/
function reqListener () {
    console.log(JSON.parse(this.responseText));
}

/**
  * @desc makes request to create a new user using XMLHttpRequest object and POST method
*/
function createUser(){
	let url = "https://jsonplaceholder.typicode.com/users";

	let data = {
		id: 1,
		name: 'John Doe',
		username: 'hereComesJohnny',
		email: 'coolDude90@email.com',
	};

	let json = JSON.stringify(data);

	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.onload = function () {
		if (xhr.readyState == 4 && xhr.status == "201") {
			console.log(xhr.status);
			console.log(xhr.responseText);
		} else {
			console.error('fail');
		}
	}
	xhr.send(json);
}

/**
  * @desc makes request to update a user using XMLHttpRequest object and PUT method
*/
function updateUser(){
	let url = "https://jsonplaceholder.typicode.com/users";

	let data = {
		id: 1,
		name: 'John Doe',
		username: 'hereComesJohnny',
		email: 'coolDude90@email.com',
	};

	let json = JSON.stringify(data);

	let xhr = new XMLHttpRequest();
	xhr.open("PUT", url+'/1', true);
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.onload = function () {
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.log(xhr.status);
			console.log(xhr.responseText);
		} else {
			console.error('fail');
		}
	}
	xhr.send(json);
}

/**
  * @desc makes request to delete a user using XMLHttpRequest object and DELETE method
*/
function deleteUser(){
	let url = "https://jsonplaceholder.typicode.com/users";
	
	let xhr = new XMLHttpRequest();

	xhr.open("DELETE", url+'/1', true);
	xhr.onload = function () {
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.log(xhr.status);
			console.log(xhr.responseText);
		} else {
			console.error('fail');
		}
	}
	xhr.send(null);
}

	





