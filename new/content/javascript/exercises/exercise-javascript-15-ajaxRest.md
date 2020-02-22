<!doctype html>
<html>
	<head>
		<title>JavaScript Exercises</title>

       ## 15.JavaScript - AJAX & REST

### Steg för steg
				
        1. Skapa en ```index.html``` med basstruktur samt en ```index.js``` fil. Lägg dessa i en ny katalog.
        
        1. Importera ```index.js``` i botten av ```body```.
        
        1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.
        
        1. I index.html skapar ni en knapp med innehållet “Get some data!".
        
        1. Koppla på en eventlyssnare på knappen så att klickar man på den skall en ```getSomeData()``` funktion anropas.
        
        1. Inuti ```getSomeData()``` skall ni anropa <a href="JSONplaceholder API't" target="_blank">JSONplaceholder API't</a>. Detta är ett "fake" API som man kan anropa för att testa, en liten lekplats för att testa REST API'er helt enkelt.
        
        1. Börja med att göra ett anrop med hjälp av XMLHttpRequest objektet. ```var xhr = new XMLHttpRequest();```.
        
        1. Kör xhr.open och skicka med metoden, url (https://jsonplaceholder.typicode.com/todos/1) för att hämta en todo.
        
				1. Lägg nu till en eventlyssnare som lyssnar efter eventet ```'load'``` samt en callback funktion som körs när ```load``` eventet inträffar.
				
				1. Anropa sedan ```xhr.send()``` för att skicka förfrågan.
        
        1. Logga responsen. 
        
        1. Denna respons är nu i formatet json. För att vi skall kunna jobba med detta som ett objekt och inte en sträng kan vi använda oss av ```JSON.parse()``` och skicka in vår response dvs ```this.responseText```.
				
1. Spara den parsade responsen i en variabel (detta är nu ett objekt). Så nu kan vi plocka ut titeln och spara i en ny variabel.

1. Skapa en ny knapp med innehållet "Send some data!".

1. Vid klick på denna anropar ni en ny funktion som ni döper till ```sendSomeData```.

1. I ```sendSomeData``` använder ni <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONplaceholder API't</a> för att skapa en ny TODO med hjälp av POST. Se i kodexemplen tillhörande föreläsningen för inspiration. Innehållet i den nya TODO'n är valfritt men det skall följa samma struktur som anges på JSON placeholder.
