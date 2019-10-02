// console.log(window.jQuery);
// console.log(window.$);
// console.log(jQuery);
// console.log($);


// console.log($('button.primary-button'))


// Hides the current element.
$('p').on('click', (evt) => {
  console.log('happens');
  $(this).hide(); // does not run a DOM query
  $('p').hide() // runs a DOM query
}); 

document.addEventListener("DOMContentLoaded", function() {
  console.log('content ready');
});

// hides all <p> elements.
// $("p").hide()

// hides all elements with class="test".
// $(".test").hide()

// hides the element with id="test".
// $("#test").hide()