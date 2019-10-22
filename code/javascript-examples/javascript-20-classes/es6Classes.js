/** 
  * @desc this class is a class containing som calculating and test methods
  * @author Robin.lundin@softhouse.se
*/
class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    get area() {
      return this.calcArea();
    }

    calcArea() {
      return this.height * this.width;
    }

    // Ordinary function
    checkThis() {
      setTimeout(
        function(){
           console.log(this);
          },
        3000);
    }

    // Arrow function binds to its originated context
    checkThis2() {
      setTimeout(() => {
           console.log(this);
      },10);
    }
  }

const square = new Polygon(10, 10);
console.log(square);
console.log(square.calcArea());
console.log(square.checkThis());
square.checkThis2();

