var data = [];

/**
 * Lets pretend that we fetch some data which is returned as a string instead of an array
 */
data = 'some response data';

try {
  data.forEach(function(element) {
    console.log(element);
  });
} catch {
  console.log('incorrect data format');
}


/**
 * Try to change the responseUsers to null
 */
let responseUsers = ['John', 'Jane'];  // Users fetched from Backend.

document.addEventListener("DOMContentLoaded", function() {
  try {
    let firstUser = responseUsers[0];
    let body = document.getElementsByTagName('body')[0];
    body.innerHTML = firstUser;
  }
  catch(err) {
    document.getElementsByTagName('body')[0].innerHTML = err.message;
  }
});

/**
 * Same as above but with an if statement
 */
let responseUsers = ['John', 'Jane'];  // Users fetched from Backend.

document.addEventListener("DOMContentLoaded", function() {
    console.log(typeof responseUsers2)
  if(responseUsers2 && typeof responseUsers2 == 'object' && responseUsers2.length > 0){
    console.log('yes');
  }
  //   let firstUser = responseUsers[0];
  //   let body = document.getElementsByTagName('body')[0];
  //   body.innerHTML = firstUser;
  // }
  // catch(err) {
  //   document.getElementsByTagName('body')[0].innerHTML = err.message;
  // }
});
