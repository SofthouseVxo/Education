let username = 'Jane Doe';
let age = 16;

if(age > 18){
  console.log('Allowed to enter the pub');
} else {
  console.log('Stop, turn around, leave.');
}

/**
  * @desc Checks how many characters the username string consists of
  * and takes action thereafter.
  * @returns string
*/
function checkUsername(){
  if(username.length > 5){
    console.log('name is longer than 5 characters');
  } else {
    console.log('name is 5 or shorter');
  }
}

/**
  * @desc Works just like checkUsername since the function returns and 
  * remaining code doesn't run.
  * @returns string
*/
function checkUsername2(){
  if(username.length > 5){
    console.log('name is longer than 5 characters');
    return;
  }

  console.log('name is 5 or shorter');
}

checkUsername();
checkUsername2();


if(age > 18 && username === 'John'){
  console.log('Correct age and correct name');
}

if(age > 18 || username === 'Jane'){
  console.log('Correct age or correct name2');
}