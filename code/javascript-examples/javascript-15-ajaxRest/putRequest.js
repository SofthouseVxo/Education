let putUserButton = document.getElementById('put-user');

putUserButton.addEventListener('click', updateUser);

/**
  * @desc makes request to update a user using XMLHttpRequest object and PUT method
*/
function updateUser(){
	let url = 'https://jsonplaceholder.typicode.com/users';

	let data = {
		id: 1,
		name: 'John Doe',
		username: 'hereComesJohnny',
		email: 'coolDude90@email.com',
	};

	let json = JSON.stringify(data);

	let xhr = new XMLHttpRequest();
	
	xhr.open('PUT', url + '/1', true);
	
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	
	xhr.addEventListener('load', function () {
		if (xhr.readyState == 4 && xhr.status == '200') {
			console.log(xhr.status);
			console.log(xhr.responseText);
		} else {
			console.error('fail');
		}
	});

	xhr.send(json);
}