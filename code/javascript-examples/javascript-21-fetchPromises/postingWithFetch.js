const data = {
    userId: 10,
    title: 'delectus aut autem',
    completed: false
};

var jsonData = JSON.stringify(data);

function postData(){
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData, // body data type must match 'Content-Type' header
  })
  .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      })
  .catch(function(err){ 
    console.log(error)
  })
}

window.onload = postData();