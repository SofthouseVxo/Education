let car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function(){
      console.log(this.registrationNumber + " " + this.brand);
  }
}

car.displayDetails();  // works

var myCarDetails =  car.displayDetails;
myCarDetails();


////////////////////////////////////////////////////////////////////////

var obj = {name:"Robin"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

// array of arguments to the actual function
var args = ["Robin","KOLKATA","WB"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));