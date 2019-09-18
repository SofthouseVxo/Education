## 6.JavaScript - Decisions

I denna övningsuppgift skall ni träna på att ta beslut med if satser och switch case.

1. Skapa en index.html med bas-struktur samt en index.js fil och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i ```<head>```.

1. Skapa en ny variabel som ni döper till ```length``` och ge denna värdet ```180```.

1. Skriv nu en ```if```-sats där ni kontrollerar om ```length``` är större än ```190```.

1. Om värdet är större än ```190``` skall det loggas "Higher than 190".

1. Men om värdet är mindre än ```190``` skall det loggas "Lower than 190".

1. Spara, kör i webbläsaren och kontrollera resultatet i konsolen.

1. Lägg nu till en ```else if```för om värdet är högre än ```170```. Om detta villkoret uppfylls skall "Is lower than 190 but higher than 170" loggas. Spara och testa i webbläsaren.

1. Prova nu att sätt variabeln ```length``` till lite olika värden och se om er ```if sats``` fungerar som det är tänkt.

1. Skapa nu en ny ```if sats``` som kontrollerar om en sträng är längre än 10 karaktärer.

1. Skapa en ```if sats``` som körs om ett värde INTE är större än 50.

1. Skapa en ```if sats``` som kontrollerar om ett värde är mindre eller lika med 24.

1. Skapa en ```swich case``` som agerar utefter en variabel som ni döper till ```myValue```. Om denna är satt till:
*  'hello' -> logga "Say Hello"
*  'hello' -> logga "Say Hello"

### Loops

1. Skapa en ny array som ni döper till ```users``` och sätt denna till värdet ```[ 'Jane','John','Kitty','Kalle']```.

1. Skapa nu en ```for loop``` som itererar över användarna, dvs denna skall köra 4 gånger. Inuti loopen skall ni logga varje användare i konsolen.

1. Skapa nu en ```for each``` loop som gör samma sak.

1. Gör nu så att inuti loopen kontrollerar ni om användarens namn består av fler än 4 karaktärer, om detta är fallet logga "longer than 5" annars logga "shorter than 5".

1. Du skall nu skapa en funktion som returnerar det längsta ordet i en mening. För att dela upp en sträng så att orden hamnar i en array kan du använda ```str.split(" ");```. Nedan har ni ett skal på lösningen.

```
function longestWord(sentence) { 

  // Skriv din kod här
  return sentence; 
         
}

console.log(longestWord('I love pizza'));
```

## Exercises external sources
* [W3schools - JavaScript Conditions exercises 1-2](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_conditions1)
* [W3schools - JavaScript Switch exercises 1-2](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_switch1)
* [W3schools - JavaScript For Loops exercises 1-2](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loops1)
* [W3schools - JavaScript While Loops exercises 1-2](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loop_while1)
* [W3schools - JavaScript Break Loops exercises 1-2](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_break1)
* [FreeCodeCamp - Chaining Else If statements](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements)
* [FreeCodeCamp - Golf code exercise](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/golf-code)
* [FreeCodeCamp - Iterate Through an Array with a For Loop](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)
* [FreeCodeCamp - Nesting For Loops](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops)