console.log('window.jQuery', window.jQuery);
console.log('window.$', window.$);
console.log('jQuery', jQuery);
console.log('$', $);

// With jQuery
$(document).ready(function(){
  console.log('DOM loaded and ready');
});

// Vanilla JS
document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM loaded and ready');
});