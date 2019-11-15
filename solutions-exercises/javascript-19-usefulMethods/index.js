let users = ['Benny', 'Jane', 'Scotty', 'Emma', 'Johnnnny'];

let newUsers = users.map(function(user){
  if(user.length <= 4){
    return user.toUpperCase();
  } else {
    user = user.split('');
    user = user.reverse();
    user = user.toString();
    user = user.replace(/,/g, '');

    return user;
  }

  // Slim version
  // return user.length <= 4 ? user.toUpperCase() : user.split('').reverse().toString().replace(/,/g, '');
});

console.log(newUsers);

// ----------------------------------------------------------

let newerUsers = newUsers.filter(function(user){
  if(user.length == 6){
    return user;
  }
})

console.log(newerUsers);

// ----------------------------------------------------------

let fetchedUsers = ['Bob', 'Clair', 'Sarah'];

let allUsers = users.concat(fetchedUsers);

console.log(allUsers);

// ----------------------------------------------------------

let usersAsObjects = allUsers.map(function(user,i){
  return {
    id: i,
    name: user
  }
});

console.log(usersAsObjects);

// ----------------------------------------------------------

let filteredUsers = usersAsObjects.filter(function(user){
  if(user.id < 3){
    return user;
  }
});

console.log(filteredUsers);

// ----------------------------------------------------------

const animal = {
  type: 'tiger',
  name: 'Cat Stevens',
  speed: 40,
  mood: 'angry'
};

let tiger = Object.assign({}, animal);

console.log(tiger);
console.log(animal);

const keys = []; 
const values = [];

for (let property in tiger) {
  keys.push(property);
  values.push(tiger[property]);
}

// ---------------------------