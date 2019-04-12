class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    get area() {
        console.log(this);
        return this.calcArea();

        window.setTimeout(function(){
          console.log(this);
        }, 3000)
    }

    calcArea() {
      return this.height * this.width;
    }
}

const square = new Polygon(10, 10);

console.log(square.height);

