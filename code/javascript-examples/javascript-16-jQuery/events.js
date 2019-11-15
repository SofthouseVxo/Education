$(document).ready(function(){
  $('#my-button').on('click', (evt) => {
    console.log(evt.target)
    $('p').hide()


    // $('p').hide(2000, function(){
    //   console.log('Is now hidden!');
    // })


    // $('p').toggle(2000, function(){
    //   console.log('Is now hidden!');
    // })
  });
});





