var prices = [2, 4, 15];
console.log('initial prices', prices);

prices = [];
console.log('prices after setting it to []', prices);

prices = [5,6,8];
console.log('prices after refill', prices);

prices.length = 0;
console.log('prices after setting length to 0', prices);