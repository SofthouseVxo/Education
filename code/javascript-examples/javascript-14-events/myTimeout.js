console.log('Im before timeout function');

setTimeout(function(){
  console.log('timeout completed after 2 seconds')
}, 2000)

console.log('Im after timeout function');
