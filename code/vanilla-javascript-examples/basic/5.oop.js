function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;

	function func1(){
			console.log('func1', this);
	}

	this.func2 = function(){
			console.log('fun2',this);
	}
}

var car1 = new Car('Eagle', 'Talon TSi', 1993);
var car2 = Car('Opel', 'Vectra', 1991);

car1.model = 'robn';
console.log(car1);