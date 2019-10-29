let firstSectionRef = document.getElementsByClassName('my-section')[0];
let secondSectionRef = document.getElementsByClassName('my-section')[1];

/**
 * setTimeout is a built in JavaScript method which we will look closer on later on.
 * For know all you need to know is that it runs the function which is passed as a parameter after 2000ms.
 * @param { function } 
 */
setTimeout(function(){
  firstSectionRef.innerHTML = '<h2>Updated the first contetnt to H2!</h2>';
}, 2000)

setTimeout(function(){
  secondSectionRef.innerHTML = `
  <div>
    <h2>Updated second to H2</h2>
    <p>And added a paragraph</p>
  </div>
  `
}, 4000)