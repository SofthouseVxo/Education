$(document).ready(function(){
  $('#bottom-div').append('<p>Some appended text.</p>');
  $('#bottom-div').prepend('<p>Some prepended text.</p>'); 
  $('#bottom-div').after('<p>Some text after</p>');
  $('#bottom-div').before('<p>Some text before</p>');
});