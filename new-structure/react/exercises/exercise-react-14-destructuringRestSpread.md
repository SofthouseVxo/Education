##  14. React - Destructoring, Rest & Spread

1. Skapa en ny ```index.js``` fil.

1. Skapa nu en ny function.

1. Anropa denna med 4 argument: 'nisse', 'kalle', 2, 434.

1. Använd ...rest för att logga 2 och 434.

1. Gör nu likdant fast nu skickar ni in ett objekt: {name: 'stina', name2: 'kalle', val1: 2, val2: 434};

1. Din logg skall nu se ut som följande ```{ val1: 2, val2: 434 }```.

1. Skapa nu två arrayer (arr1, arr2): ```[10, 20]``` & ```['nisse', 'stina']```.

1. Använd nu spread för att skapa en ny array (arr3) av dessa som skall se ut som följande: ```[10, 20, 'nisse', 'stina']```.

1. Logga sedan samtliga arrayer sist i din kod. Har arr1 eller arr2 muterats?

1. Gör nu likadant fast med tre objekt.
```
let obj1 = {val:1, va2:2};
let obj2 = {val3:3, val4:4};
```
</br>
Skall bli ```{ val: 1, va2: 2, val3: 3, val4: 4 }```

11. Logga sedan samtliga objekt, har dessa muterats?

12. Lös nu detta med ```Object.assign()``` istället. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" target="_blank">Object Assign</a>

13. Använd destructuring för att plocka ut värdena name och age från objektet nedan.
```
const obj = {
	name: 'Jane Doe',
	address: {
		zipcode: 23434
	},
	info: {
		age: 54
	}
};
```
