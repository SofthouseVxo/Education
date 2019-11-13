let myHeaderRef = document.getElementById('my-header');

console.log('myHeaderRef', myHeaderRef);
console.log('nodeValue of myHeaderRef', myHeaderRef.firstChild.nodeValue);

myHeaderRef.firstChild.nodeValue = "Hi i'm updated";