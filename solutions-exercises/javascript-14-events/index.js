let myButtonRef = document.getElementsByTagName('button')[0];

let body = document.body;

myButtonRef.addEventListener('click', toggleBackground);

function toggleBackground(event){
  if (body.style.backgroundColor === 'green'){
    body.style.backgroundColor = 'pink';
  } else if(body.style.backgroundColor === 'pink'){
    body.style.backgroundColor = 'green';
  } else {
    body.style.backgroundColor = 'green';
  }

  console.log(event);
  event.target.style.background = 'yellow';
}

// ------------------------------------

let stopButtonRef = document.getElementsByTagName('button')[1];
stopButtonRef.addEventListener('click', removeListener);

function removeListener(){
  myButtonRef.removeEventListener('click', toggleBackground);
}