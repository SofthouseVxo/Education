* Vad kan jag spara värden i? Vilka olika typer finns det och hur fungerar dessa?
Variabler.

Sträng, Nummer, Boolean, Undefined, Null, Array, Objekt

* Om jag vill anropa kod flera gånger bör jag använda mig av?

Funktion

* Om jag vill gå igenom exempelvis en array kan jag använda?

Loopar (for loop, while) - Vi bestämmer exakt hur många gånger något skall göras
.foreach() - Körs endast det antal gånger som en array har items.

* Om jag vill göra något flera gånger utan att skriva koden flera gånger kan jag använda mig av?
Loop (for loop, while), Funktion
```
for(let i = 0; i < 30; i++){
  calc(5,6);
}

function calc(val, val2){ 
  console.log(val, val2);
}
```

* Om jag vill kontrollera om något är sant eller falskt använder jag mig av?
```
if(value === 1){

} if else(value === 2){
  
} else {

}

// switch case
```

* Beskriv hur en funktion fungerar.

```
function shop(list){  
  var groceries = '';
  list.forEach(function(item){
    groceries = groceries + ' ' + item;
  });

  groceries = groceries + ' in a bag with reciept';

  return groceries;
}

var cart = shop(['apple', 'pear', 'lime']);

var biggerBag = shop(['apple', 'pear', 'lime']);

console.log(biggerBag);
```

* Hur använder jag något i ett objekt?

```
var person = {
  age: 20,
  run: function(){
    console.log('run');
    this.speak();
  },
  speak: function(){
    console.log('speak');
  }
}
```

* Hur kan jag lägga till något i ett objekt?

```
let age = person.age;
person.run();
```