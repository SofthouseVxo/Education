function one(one){
  two = two(one, 2);
  return two;
}

function two(one,two){
  two = three(one, two);
  return two;
}

function three(one, two){
  return one+two;
}

let val = one(1);