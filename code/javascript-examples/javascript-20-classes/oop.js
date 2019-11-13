/**
 * Here we are using a self executing function to not pollute the global namespace.
 * What is returned is what can be accessed in the window object. (Main.createNewCoe()).
 */
let Main = (function(){
  function createNewInstanceOfCow(){
    let cow  =  new Cow('muuh');
    console.log(cow);
  
    cow.eat();
    cow.fart();

    let person = new Person();
  };

  return {
    createNewCow: createNewInstanceOfCow
  }
})();

window.onload = Main.createNewCow();