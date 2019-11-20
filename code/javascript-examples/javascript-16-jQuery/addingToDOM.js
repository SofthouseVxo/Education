$(document).ready(function(){
  let bottomDiv = $('#bottom-div');

  bottomDiv.append('<p>Some appended text.</p>');
  bottomDiv.prepend('<p>Some prepended text.</p>'); 
  bottomDiv.after('<p>Some text after</p>');
  bottomDiv.before('<p>Some text before</p>');
});