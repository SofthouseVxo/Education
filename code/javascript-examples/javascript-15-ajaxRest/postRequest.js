let postUserButton = document.getElementById('post-user');

postUserButton.addEventListener('click', createUser);

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

	let jsonData = JSON.stringify(data);

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
	xhr.send(jsonData);
}