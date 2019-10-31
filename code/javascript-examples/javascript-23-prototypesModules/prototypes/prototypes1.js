function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

const CarPrototype = {
	drive: function(speed){
		console.log('Driving in ' + speed + ' mph');
	}
}

Car.prototype = CarPrototype;

let car1 = new Car('Eagle', 'Talon TSi', 1993);
let car2 = Car('Opel', 'Vectra', 1991);

console.log(car1);
console.log(car2);

car1.drive(40);