let boat = {
  color: "white",
  speed: 120,
  honk : function(){
    console.log("Hoooonk!");
  }
};

boat.speed = 150;

console.log(boat.color);
console.log(boat.speed);
boat.honk();

// ---------------------------------

function SmartPhone(brand, year){
  this.brand = brand;
  this.year = year;
}

let phone2 = new SmartPhone("Samsung", 2017);
let phone = new SmartPhone("Iphone", 2010);
let phone3 = new SmartPhone("Nokia", 2019);

console.log(phone);
console.log(phone2);
console.log(phone3);

// ---------------------------------

function run(){
}

run.who = "Some dude";

console.log(run);

// ---------------------------------

let users = [
  {
    id:'453523',
    name:'Jane',
    age: 28,
    gender: 'female'
  },
  {
    id:'134323',
    name:'John',
    age: 24,
    gender: 'male'
  }
];

console.log(typeof users);