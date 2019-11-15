let isVisible = true;

$(document).ready(function(){
  let myPara = $('p');
  let myButton = $('#btn');

  myButton.click(function(){
    if(isVisible){
      myPara.hide();
    } else {
      myPara.show(); 
    }
  
    isVisible = !isVisible;
  });

  // myButton = $('#btn').click(function(){
  //   myPara.toggle();
  // });

  $('body').append('<button class="new-btn">New button</button>');

  let newBtn = $('.new-btn');
  newBtn.click(function(){
    myButton.remove();
  })

  $('body').append('<button class="third-btn">Third button</button>');

  let thirdBtn = $('.third-btn');

  thirdBtn.click(function(){
    console.log(myPara)
    myPara.addClass('text-class');
    getUser();
  })
});

// ----------------------------------

function getUser(){
  $.get('https://jsonplaceholder.typicode.com/users/1', function(responseData, status){  
    console.log('response data', responseData);
  });
}

// -----------------------------------