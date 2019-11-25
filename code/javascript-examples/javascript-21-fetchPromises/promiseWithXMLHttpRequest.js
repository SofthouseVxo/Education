
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