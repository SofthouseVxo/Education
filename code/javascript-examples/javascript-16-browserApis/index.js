let forwardButtonRef = document.getElementById('move-forward-button');
let backButtonRef = document.getElementById('move-back-button');
let pushNewStateButtonRef = document.getElementById('push-new-state-button');

forwardButtonRef.addEventListener('click', moveForward);
backButtonRef.addEventListener('click', moveBack);
pushNewStateButtonRef.addEventListener('click', pushNewState);

/**
  * @desc moves forward in the history object
*/
function moveForward(){
  history.forward();
}

/**
  * @desc moves back in the history object
*/
function moveBack(){
  history.back();

}

/**
  * @desc pushes a new state into the history object and reloads the page
*/
function pushNewState(){
  // pushState does not reload the page, url set to work when running live server on specific port 5500
  history.pushState({user: 'John'}, 'Hello', 'http://127.0.0.1:5500/code/javascript-examples/javascript-3-variablesDatatypes/index.html');
  
  // location.reload will reload the page
  location.reload();
}

window.addEventListener('popstate', function(e) {
  // console.log('happens');
  // e.state is equal to the data-attribute of the last image we clicked
});


/**
  * 
  * Localstorage examples
  * 
*/

// localStorage.setItem('myCat', 'Tom');

// let cat = localStorage.getItem('myCat');

// // console.log(cat);
// localStorage.removeItem('myCat');

// Clear all items
//localStorage.clear();


// sessionStorage.setItem('myDog', 'Betty');

//let cat = sessionStorage.getItem('myDog');

//sessionStorage.removeItem('myDog');

// Clear all items
//sessionStorage.clear();
