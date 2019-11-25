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