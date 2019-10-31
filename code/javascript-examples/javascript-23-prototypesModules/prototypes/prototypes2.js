var vehicle = {
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model );
  }
};

var car = Object.create(vehicle, {
  "model": {
    value: "Ford",
    enumerable: true
  }
});

console.log(car);
car.getModel();
