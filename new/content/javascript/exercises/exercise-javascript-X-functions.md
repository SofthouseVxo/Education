## 21. JavaScript functions

Nedan följer uppgifter som handlar om att använda funktioner på olika sätt i JavaScript.

1. Börja med att skapa en ```ìndex.html``` och en ```index.js```

1. Importera ```index.js``` i bodyn inuti ```index.html```

1. Inuti ```index.js``` skapar ni en funktion som ni döper till ```add()```

1. Denna skall ta emot 2 parametrar, två nummer och sedan addera dessa. Logga och testa.

1. Värdet av dessa nummer skall spara i en variabel. Kalla på funktionen och spara resultatet i en variabel. Logga variabeln.

1. Om ni inte gjort det så testa göra ovanstående med en arrow function istället.

1. Nu skall ni kalla på en funktion som returneras från en funktion. Skapa en ny funktion som ni döper till ```digHole``` denna tar emot en parameter ```feetDeep``` (ett nummer). ```digHole``` skall returnera en ny funktion som ni döper till ```watchHole``` som i sin tur kör en ```console.log(`hole is ${feetDeep}`)```. Nu skall ni kunna köra ```const func = dighole(15)``` och sedan ```func()```. Detta skall logga 15 i consollen.

1. Skapa ett nytt object som ni döper till todo.

1. Detta object skall ha en "key" döpt till run med "value" ```function(){ console.log('running)}```

1. Nu skall ni kunna köra ```todo.run()``` och running skall loggas.

1. Om ni inte gjort det så gör ovanstående med en arrow function.

1. Nu skall vi göra en curried function. Curried function tar emot flera parametrar och returnerar en ny funktion för varje. Så skriv först ```const add = a => b => a + b;``` sedan ```const result = add(2)(3);``` uppföljt av ```console.log(result);```

1. Provkör ovan och testa att byta ut lite värden. Gör nu en likadan fast med multiplikation istället.

1. Nu kan vi testa att lägga till ytterliggare en.
```
const add = a => b => c => a + b + c;
const result = add(2)(3)(4);
console.log(result);
```

15. Nu skall vi skriva en Pure function. Dessa skall alltid returnera samma värde om de får samma parametrar. Skriv en funktion som tar emot 3 värden. Funktionen skall alltid returnera de två första värdena adderade, mulitplicerade med det tredje.

16. Skulle vi lägga till exempelvis ```console.log('hello);```i denna funktion innan vi returnerar så är blir det en impure function. Den har då s.k. side effects. Att vår funktion ändrar på/kallar på saker som påverkar saker utanför vårt funktion.

17. Se även följande exempel:
```
const value =  12;

function calc(param1, param2, param3){
	return (param 1 + param2) * this.value;
}
```

Detta är inte en pure function, då denna returnerar olika beroende på vad value är satt till.

Lägger vi till ```this.value = 15``` innan return så har vi funktion även side effects.

18. Nu skall vi mutera ett state, som i detta fall är ett objekt som innehåller information ifall användaren är inloggad eller inte.
```
let state = {
	isLoggedIn: true;
}

state.isLoggedIn = false;
```

Att göra såhär kallas för att mutera ett objekt. I funktionell programmering skall vi undvika att mutera state. Ni skall nu ändra state genom att skapa ett nytt object. Gör detta med hjälp av [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

19. Vi skall ha samma tänk då det kommer till arrayer.

```
let myArray = [1,4,3,5];
myArray[2] = 6;  // Mutating, Avoid!

let nyArray = myArray.map((item)=> {
	if(item === 3) return 6;
	return item;
})
```

.map returnerar en ny array, detta innebär att vi inte ändrar på den ursprungliga, dvs vi muterar INTE state.
