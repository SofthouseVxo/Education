function pay(price, money){
  let change = money - price; // Calculates how much change

  console.log('Cashier says: Your change is: ' + change);  // Cashier only says how much change you should have
  // return change;  // Cashier acctually gives you your change back
}

let myChange = pay(60, 100);  // Hands over the money to buy something
console.log('Change after first purchase: ' + myChange);

myChange = pay(30,myChange);  // Buys something else
console.log('Change after second purchase: ' + myChange);

