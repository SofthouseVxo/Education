/**
  * @desc Immediately Invoked Function Expression(IIFE)
  * @return { object }
*/
var area = (function() {
  var width = 5;
  var height = 10;

  return width * height;
}());

console.log('area', area);