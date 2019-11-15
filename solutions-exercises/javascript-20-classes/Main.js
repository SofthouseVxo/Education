class Main {
  myFirstProperty = 10;
  
  constructor(){
    console.log(this.myFirstProperty);
    this.checkValue();

  }

  checkValue () {
    console.log('log inside checkValue', this.myFirstProperty);
  }

  createPolygon(){
    let myPoly1 = new Polygon(100,100);
    myPoly1.checkHeight();
    myPoly1.checkWidth();
  }
}

window.onload = function(){
  let mainInstance = new Main();
  mainInstance.checkValue();
  mainInstance.createPolygon();

  new Button('button1');
  new Button('button2');
  new Button('button3');
}