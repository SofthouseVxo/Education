let firstParagraphRef = document.getElementsByClassName('my-section')[0].firstElementChild;

/**
 * setTimeout is a built in JavaScript method which we will look closer on later on.
 * For know all you need to know is that it runs the function which is passed as a parameter after 2000ms.
 * @param { function } 
 */
setTimeout(function(){
  firstParagraphRef.textContent = 'Updated the first paragrah!';
}, 2000)

setTimeout(function(){
  firstParagraphRef.innerText = 'Updated the first paragrah AGAIN!';
}, 4000)