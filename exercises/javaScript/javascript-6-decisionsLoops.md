## 6.JavaScript - Decisions

I denna övningsuppgift skall ni träna på att ta beslut med if satser och switch case.

1. Skapa index.html och index.js filer och lägg i en ny katalog.

1. I ```<head``` kopplar ni på index.js genom att skriva ```<script src="index.js"><script>```. Denna innebär att javascript koden kommer köras när script taggen körs.

1. Skapa en ny variabel som ni döper till ```length``` och ger värdet ```180```.

1. Skriv nu en ```if``` sats som där ni kontrollerar om ```length``` är större än ```190```.

1. Om värdet är större än ```190``` skall det loggas "Higher than 190".

1. Men om värdet är mindre än ```190``` skall det loggas "Lower than 190".

1. Spara och test i webbläsaren.

1. Lägg nu till en ```else if```för om värdet är högre än ```170```. Om detta vilkoret uppfylls skall "Is lower than 190 but higher than 170" loggas. Spara och test i webbläsaren.

1. Prova nu att ange length till lite olika värden och se om er ```if sats``` fungerar som den är tänkt.

1. Skapa en ```if sats``` som  testar om en sträng är längre än 10 karaktärer.

1. Skapa en ```if sats``` som körs om ett värde INTE är större än 50.

1. Skapa en ```if sats``` som kontrollerar om ett värde är mindre eller lika med 24.

1. Skapa en ```swich case``` som agerar utefter en variabel som ni döper till ```myValue```. Om denna är satt till:
*  'hello' -> logga "Say Hello"
*  'hello' -> logga "Say Hello"

1. Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false. The call isEven(2) should return true and isEven(3) should return false.

### Loops

1. Skapa en ny array som ni döper till ```users```. Lägg till 4 namn i denna.

1. Skapa nu en ```for loop``` som för varje användare loggar denna i konsolen.

1. Gör samma sak fast med en ```for each```.

1. Gör nu så att inuti loopen kontrollerar ni om användarens namn är mer än 5 karaktärer långt, om detta är fallet logga "longer than 5" annars logga "shorter than 5".

1. Du skall nu skriva en funktion som returnerar det längsta ordet i en mening. För att dela upp en sträng så att orden hamnar i en array kan du använda ```str.split(" ");```. Nedan har ni ett skal på lösningen.
```
function longestWord(sentence) { 

  // Skriv din kod här
  return sentence; 
         
}

console.log(longestWord('I love pizza'));
```

