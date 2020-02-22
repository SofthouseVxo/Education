<!doctype html>
<html>
	<head>
		<title>JavaScript Exercises</title>

			## 16.JavaScript - jQuery

			### Steg för steg
							
			1. Skapa en ```index.html``` med basstruktur samt en ```index.js``` fil. Lägg dessa i en ny katalog.
					
			1. Importera ```index.js``` och jQuery inuti ```head```.

			1. Skapa nu en ny ```button``` med ```id="btn"``` och även en paragraf i er HTML-kod.

			1. Prova först att komma åt knappen via javascript med ```getElementById```. Funkar det?

			1. Använd nu jQuery och ```ready``` functionen för att lyssna på att DOMen är redo. Funktionen ni passar in kommer att köras när den är redo.
			
			1. Inuti denna funktion sparar ni knappen i en variabel som ni döper till ```myButton``` (detta skall göras med jQuery, dvs INTE getElementById).

			1. Spara nu även en referens till paragrafen i en variabel med jQuery.
			
			1. Lägg nu till en jQuery eventlyssnare på denna knapp som vid ```click``` togglar paragrafen synlig och osynlig. GÖR DETTA UTAN ```toggle()``` metoden.

			1. Gör det nu med ```toggle()```

			1. Lägg nu till en ny knapp dynamiskt med jQuery, denna skall se ut som följande ```<button class="new-btn">New button</button>```.

			1. Vid klick på den nya knappen skall ni ta bort den första knappen.

			1. Lägg nu till en tredje knapp. Klickar man på denna skall ni ge paragrafen en ny klass. Denna klass skall finnas i en ```style.css``` och innehåller styling för att sätta bakgrundsfärgen till röd.

			1. Slutligen skall vi använda jQuery för att göra en ```GET``` request. Kopiera funktionen ```getSomeData()``` från föregående uppgift (javascript-15-ajaxRest) och lägga till den i ```index.js```.

			1. Döp OM denna till ```getUser``` istället för ```XMLHttpRequest``` använder ni nu jQueries ```get``` metod.

			1. Denna skall köras när efter att ni satt bakgrundsfärgen på paragrafen.

			1. Logga så att ni får rätt respons.

			### Tänka själv

			1. Ni skall nu implementera så att ```getUser``` hämtar en slumpad unik användare med ett id mellan 1-15 vid varje klick. Dvs man kan max hämta 15 användare. Hämtade användare sparas i en array.

			### Övningar externa källor

* <a href="https://www.w3resource.com/jquery-exercises/jquery-core-exercises.php" target="_blank">jQuery core - w3resource</a>
* <a href="https://www.w3resource.com/jquery-exercises/jquery-events-exercises.php" target="_blank">jQuery events - w3resource</a>
* <a href="https://www.w3resource.com/jquery-exercises/jquery-css-exercises.php" target="_blank">jQuery CSS - w3resource</a>
* <a href="https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_selectors1" target="_blank">W3schools exercises</a>

