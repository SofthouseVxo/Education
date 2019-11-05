/**
 * @desc Area is an functionAn expression is any valid unit of code that resolves to a value.
 * 
 * @param number width 
 * @param number height 
 * 
 * @returns number
 */
var area = function(width, height) {
  return width * height;
}

var size = area(5,7);
console.log('size', size);