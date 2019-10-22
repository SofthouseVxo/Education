var greet = function(){
	console.log('Hi!');
}

greet.language = 'swedish';
greet.sayHello = function(){
	console.log('Hello!');
}

console.log(greet.language);
greet.sayHello();