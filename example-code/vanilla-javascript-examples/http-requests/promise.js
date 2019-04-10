// Expects a function to be passed as parameter in this case we send a arrow function
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.

  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 2000);

  // setTimeout(function(){
  //     reject('rejected');
  // }, 2000)
});



myFirstPromise.then((successMessage) => {
  console.log("Yay! " + successMessage);
  return successMessage;
}).catch((error)=>{
  console.log(error)
})
// .then((successMessage2)=>{
//   console.log('yay2', successMessage2)
// })


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// // Promise returns new promise
// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000);

// }).then(function(result) {

//   console.log('result', result);
//   return result * 2;

// }).then(function(result) {

//   console.log('result', result);
//   return result * 2;

// }).then(function(result) {

//   console.log('result', result);
//   return result * 2;

// });

// XMLHttpRequest combined with promies
var url = "https://jsonplaceholder.typicode.com/todos/1";

var myPromise = function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

myPromise(url).then((response)=>{
  console.log('my response: ', response);
})