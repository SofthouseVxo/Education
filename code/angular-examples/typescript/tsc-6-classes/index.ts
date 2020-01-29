// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }

//     sayHello(){
//         alert('said hello');
//     }
// }

// let user = new Student("Jane", "M.", "User");
// console.log(user.firstName);

// window.onload = function(){
//     user.sayHello();
// };




// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }




// class Animal {
//     color:string = 'brown';
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();
// console.log(dog.color);