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

    // // Ordinary function
    // checkThis() {
    //   setTimeout(
    //     function(){
    //        console.log(this);
    //       },
    //     3000);
    // }

    // // Arrow function binds to its originated context
    // checkThis() {
    //   setTimeout(() => {
    //        console.log(this);
    //       },
    //     10);
    // }
  }

const square = new Polygon(10, 10);
console.log(square);
console.log(square.calcArea());

// square.checkThis();

