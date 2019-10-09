## 5.JavaScript - Functions and scopes

### Functions
1. Skapa en index.html med basstruktur samt en index.js fil. Lägg dessa i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` inuti ```<head>```.

1. Skapa en ny funktion som ni döper till ```speak```.

1. Inuti denna skriver ni ```alert('Helloooo!')```;

1. Anropa nu ```speak```. Spara och testa i webbläsaren, kontrollera att alerten visas.

1. Gör nu så att funktionen ni nyss skapat tar emot en parameter, och istället för att ```'Helloooo!'``` så ska alerten innehålla parametern.

1. Anropa nu denna funktionen med valfritt argument. Spara och kör i webbläsaren.

1. Nu skall nu skapa en liten miniräknare som kan addition och subtraktion. Börja med att skapa 2 olika funktioner, den ena döper ni till ```add``` och den andra till ```subtract```.

1. ```add``` skall ta emot 2 parametrar. Inuti add skall dessa två parametrarna läggas ihop med ```+``` och sparas i en lokal variabel som ni döper till ```addedValues```.

1. Längst ner inuti ```add```funktionen lägger ni till ```console.log(addedValues);```. Spara och testa i webbläsaren och kontrollera så att ni får rätt värde i konsolen.

1. Istället för att logga värdet inuti funktionen så skall ni spara det som returneras ifrån ```add``` och nu loggar ni istället denna.

1. Gör ni likadant fast med ```subtraction``` och denna skall subtrahera det den första parametern med den andra.

1. Nu skall vi testa den inbyggda metoden ```Math.random()```(en metod är en funktion som tillhör ett object, exakt vad detta kommer vi kika närmre på senare i kursen.)

1. Information om hur denna fungerar finns på [w3schools](https://www.w3schools.com/jsref/jsref_random.asp) prova exemplen samtliga exempel inklusive dem som även använder ```Math.floor```.

1. Skriv nu en egen ```Math.floor((Math.random();``` som returnerar ett värde mellan 1 och 30.

### Scopes

1. Deklarera en variabel i det globala scopet. Döp denna till ```globalName``` och ge den värdet ```John Doe```;

1. Skapa nu en funktion, i denna skall ni logga ```globalName```.

1. Deklarera nu en ny variabel inuti funktionen som ni också döper till ```globalName``` men ger värdet 'kitty'. Logga denna i funktionen.

1. Logga nu ```globalName``` nedanför/utanför funktionen. Var får ni för värde och vilka slutsatser kan ni dra?

1. Vad är skillnaden på en konstant och en vanlig variabel?

## Exercises external sources
* [W3schools - JavaScript Functions exercises 1-3](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1)
* [FreeCodeCamp - Basic functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)
* [FreeCodeCamp - Passing values to functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments)
* [FreeCodeCamp - Global scope and functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
* [FreeCodeCamp - Local scope and functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)
* [FreeCodeCamp - Global vs. Local Scope in Functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)