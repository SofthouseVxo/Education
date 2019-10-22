
/**
 * Composition
 * @param {*} state 
 */
const barker = (state) => ({
  bark: () => console.log('Woof, I am', state.name)
})

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

// barker({name: 'karo'}).bark();


/**
 *  We have some behaviors
 */
const canSayHi = self => ({
  sayHi: () => console.log(`Hi! I'm ${self.name}`)
});

const canEat = () => ({
  eat: food => console.log(`Eating ${food}...`)
});

const canPoop = () => ({
  poop: () => console.log('Going to 💩...')
});

// Combined previous behaviours
const socialBehaviors = self => Object.assign({}, canSayHi(self), canEat(), canPoop());

const be = socialBehaviors();

const alligator = name => {
  const self = {
    name
  };

  const alligatorBehaviors = self => ({
    bite: () => console.log("Yum yum!")
  });

  return Object.assign(self, socialBehaviors(self), alligatorBehaviors(self));
};


const jack = alligator("jack");
// jack.sayHi(); // Hi! I'm jack
// jack.eat("Banana"); // Eating Banana...
// jack.bite(); // Yum yum!





const canDrive = speed => ({
	drive: () => {
		console.log('Driving in ' + speed + ' mph');
	}
})

const car = (make, model, year,speed) => {
  const state = {
    make,
    model,
    year,
    speed
  };

  const honk = () => ({
    honk: () => console.log('Tuuut! Im going in ' + state.speed + ' mph')
  });

  return Object.assign(state, canDrive(state.speed), honk());
};

let car1 = car('Eagle', 'Talon TSi', 1993, 50);
car1.honk();
car1.drive();