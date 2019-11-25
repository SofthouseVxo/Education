let deleteUserButton = document.getElementById('delete-user');

deleteUserButton.addEventListener('click', deleteUser);

/**
  * @desc makes request to delete a user using XMLHttpRequest object and DELETE method
*/
function deleteUser(){
	let url = 'https://jsonplaceholder.typicode.com/users';
	
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', url + '/1', true);

	xhr.addEventListener('load', function () {
		if (xhr.readyState == 4 && xhr.status == '200') {
			console.log(xhr.status);
			console.log(xhr.responseText);
		} else {
			console.error('fail');
		}
	});

	xhr.send(null);
}