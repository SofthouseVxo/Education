let myHeaderRef = document.getElementById('my-header');

myHeaderRef.style.color = '#FF00FF'; // Changes the color
myHeaderRef.style.backgroundColor = 'green'; // Sets a new background-color

setTimeout(function(){
  myHeaderRef.setAttribute('style', 'color: red; font-size: 40px; background: black');
}, 2000)

setTimeout(function(){
  myHeaderRef.setAttribute('style', 'color: purple;');
}, 4000)


setTimeout(function(){
  myHeaderRef.className = 'im-blue'; // why is it not changing?
}, 6000)

setTimeout(function(){
  myHeaderRef.className = 'im-yellow'; // why is it not changing?
}, 8000)



