fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

// const data = {
//     userId: 10,
//     title: 'delectus aut autem',
//     completed: false
// };

// function postData(){
//   fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   })
//   .then(function(response) {
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//       })
//   .catch(err => console.log(error))
// }

// window.onload = postData();
