console.log(window.history);

let forwardButtonRef = document.getElementById('move-forward-button');
let backButtonRef = document.getElementById('move-back-button');
let pushNewStateButtonRef = document.getElementById('push-new-state-button');

forwardButtonRef.addEventListener('click', moveForward);
backButtonRef.addEventListener('click', moveBack);
pushNewStateButtonRef.addEventListener('click', pushNewState);


function moveForward(){
  history.forward();
}

function moveBack(){
  history.back();

}

function pushNewState(){
  // pushState does not reload the page
  history.pushState({user: 'John'}, 'Hello', 'http://127.0.0.1:5500/code/javascript-examples/javascript-3-variablesDatatypes/index.html');
  
  // location.reload will reload the page
  location.reload();
}

window.addEventListener('popstate', function(e) {
  console.log('happens');
  // e.state is equal to the data-attribute of the last image we clicked
});

// localStorage.setItem('myCat', 'Tom');

// var cat = localStorage.getItem('myCat');

// // console.log(cat);
// localStorage.removeItem('myCat');

// Clear all items
//localStorage.clear();


// sessionStorage.setItem('myDog', 'Betty');

//var cat = sessionStorage.getItem('myDog');

//sessionStorage.removeItem('myDog');

// Clear all items
//sessionStorage.clear();
