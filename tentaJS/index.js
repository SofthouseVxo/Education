window.addEventListener('DOMContentLoaded', function(){
  var prices = [220, 55, 99, 123];

  // ---------------------- 

  function shop(_prices){
    let sum = 0;
    for(let i = 0; i < _prices.length; i++){
      sum = sum + _prices[i];
    }
    
    if(sum <= 500){
      return true
    } else {
      return false;
    }
  }

  var canAfford = shop(prices);

  // ---------------------- 

  let btnRef = document.createElement('button');
  btnRef.innerText = 'Press me';
  document.body.appendChild(btnRef);

  btnRef.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.innerHTML = 'button has been clicked!';
    document.body.appendChild(paragraph);
  })

  // ---------------------- 

  function styleStuff(){
    btnRef.style.backgroundColor = 'blue';
    document.body.style.padding = '50px';
    btnRef.className = 'custom-buttom';
  }

  // ---------------------- 

  var boat = {
    color: 'green',
    speed: 64
  }

  boat.rePaint = function(){
    this.color = 'red';
  }

  boat.rePaint();

  // ---------------------- 

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      for(let i = 0; i < 3; i++){
        let str = '';
        let itemRef = document.createElement('li');
        str = todos[i].title + ' ' + todos[i].completed;
        itemRef.innerText = str;
        document.body.appendChild(itemRef);
      }
    })

  let xhr =  new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

  xhr.addEventListener('load', function(response){
    let res = JSON.parse(xhr.responseText);

    for(let i = 0; i < 3; i++){
      let str = '';
      let itemRef = document.createElement('li');
      str = res[i].title + ' ' + res[i].completed;
      itemRef.innerText = str;
      document.body.appendChild(itemRef);
    }
  })

  xhr.send();

  // ---------------------- 

  console.log('body element:', document.getElementsByTagName('body')[0]);

})

var val3 = 10;

function calc(val1, val2){
  
  let sum = val1 + val2 + this.val3;

  val3 = 35;  // Removed var

  for(let i = 0; i < 3; i++){
    val3 += i;
  }

  return sum + val3;
}

let result = calc(100, 223);