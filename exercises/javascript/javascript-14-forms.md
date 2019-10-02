## 14.JavaScript Working forms

1. Skapa en index.html med bas-struktur samt en index.js fil och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i botten på ```<body>```.

1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.

1. Skapa nu ett HTML formulär innehållade 2 input-fält för text.

1. En av dessa skall vara av typen ```text``` och den andra ```email```.

1. Lägg även till en ```submit``` knapp.

1. När formuläret skickas dvs när knappen klickas på skall en ```mySubmit```-funktion anropas. Lös detta med en eventlyssnare.

1. Då vi inte vill att sidan skall laddas om så behöver vi förhindra default beteendet. Använd ```preventDefault()```.

1. Testa formuläret och kontrollera så att sidan in laddas om.

1. Du skall nu logga värdet av inputfältet (dvs vad de innehåller). Lägg till denna logik i din ```mySubmit``` funktion.

1. Implementera nu så att när man skickar formuläret så skall alla input-fält tömmas (reset).

1. Skapa nu en ```validate()``` funktion som tar emot innehållet i formuläret och kontrollerar så att bägge inputfälten inte är tomma. Om de är tomma skall ni skapa en ```<p>``` på sidan som är röd och innehåller texten "inputs can's be empty".

1. Om de inte är tomma skall ni skapa en ```<p>``` på sidan som är grön och innehåller texten "Good job it's valid!".