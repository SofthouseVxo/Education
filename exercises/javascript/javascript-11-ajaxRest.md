## 11.JavaScript - AJAX & REST

1. Skapa en index.html med basstruktur samt en index.js fil. Lägg dessa i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i botten på ```<body>```.

1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.

1. I index.html skapar ni en knapp med titeln “Get some data!".

1. Koppla på en eventlyssnare på knappen så att klickar man på den skall en ```getSomeData()``` funktion anropas.

1. Inuti ```getSomeData()``` skall ni anropa [JSONplaceholder API't](https://jsonplaceholder.typicode.com/). Detta är ett "fake" API som man kan anropa för att testa, en liten lekplats för att testa REST API'er helt enkelt.

1. Börja med att göra ett anrop med hjälp av XMLHttpRequest objektet. ```var xhr = new XMLHttpRequest();```.

1. Kör xhr.open och skicka med metoden, url (https://jsonplaceholder.typicode.com/todos/1) för att hämta en todo.

1. Lägg nu till en onload samt anropa ```xhr.send()``` för att skicka förfrågan.

1. Logga responsen. 

1. Denna respons är nu i formatet json. För att vi skall kunna jobba med detta som ett objekt och inte en sträng kan vi använda oss av ```JSON.parse()``` och skicka in vår response dvs ```this.responseText```.

1. Prova nu att använda [JSONplaceholder API't](https://jsonplaceholder.typicode.com/) för att skapa en ny TODO med hjälp av POST. Se i kodexemplen tillhörande föreläsningen för inspiration.
