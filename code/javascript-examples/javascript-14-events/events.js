let buttonRef = document.getElementById('my-btn');

buttonRef.addEventListener('click', cb);

function cb(e){
  console.log('event', e);
  console.log(e.target);
}

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

window.onload = function(){
  console.log('loaded');
}