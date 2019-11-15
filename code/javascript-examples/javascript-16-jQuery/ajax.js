$.get('https://jsonplaceholder.typicode.com/todos/1', function(responseData, status){
  console.log('status', status);

  console.log('response data', responseData);
  console.log('type', typeof responseData);
});