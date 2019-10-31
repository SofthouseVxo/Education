let Vehicle = {
  getModel: function () {
    console.log( "The model of this Vehicle is.." + this.model );
  }
};
 
// Throws and error becuase Vehicle is not a constructor and can't be instantiated.
let vehicle = new Vehicle();
console.log('car', car);