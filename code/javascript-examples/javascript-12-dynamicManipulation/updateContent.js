let firstParagraphRef = document.getElementsByClassName('my-section')[0].firstElementChild

console.log(firstParagraphRef);

/**
 * setTimeout is a built in JavaScript method which we will look closer on later on.
 * For know all you need to know is that it runs the function which is passed as a parameter after 2000ms.
 * @param { function } 
 */
setTimeout(function(){
  firstParagraphRef.textContent = 'Updated the first paragrah!';
}, 2000);

setTimeout(function(){
  firstParagraphRef.innerHTML = '<h1>Updated the first paragrah AGAIN!</h1>';
}, 4000);