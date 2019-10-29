$(document).ready(function(){
  let buttonRef = $('#my-button');
  let contentRefs = $('.content');

  console.log('contentRef', contentRefs);
  console.log('buttonRef', buttonRef);

  setTimeout(function(){
    buttonRef.addClass('btn-success');
  }, 2000);

  setTimeout(function(){
    buttonRef.hide();
    contentRefs.hide();
  }, 4000);
});