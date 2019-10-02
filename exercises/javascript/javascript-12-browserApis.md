## 12.JavaScript - Browser API's

1. Skapa en index.html med bas-struktur samt en index.js fil och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i botten på ```<body>```.

1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.

1. I index.html skapar ni 2 knapper, en med innehållet 'add to storage' och en 'remove from storage'.

1. När man klickar på 'add' knappen skall ni spara en användare och med ```'user', 'id``` i localstorage. Använd ```setItem()```

1. När man klickar på 'remove' knappen skall ni ta bort denna en användare och dess id i localstorage.

1. Prova nu att lägga till användaren. Öppna devtools i chrome eller mozilla. Välj fliken "application" eller "storage" och kontrollera att det finns en användare i localstorage.

1. Stäng webbläsaren och öppna den igen, finns den kvar?

1. Ersätt nu localStorage med sessionStorage, kontrollera att det fungerar när webbläsaren är öppen. Testa sedan att stänga webbläaren när ni har en användare i storage. Finns den kvar när ni öppnar fönstret igen?

1. Testa de 2 olika fast denna gång med ett "privat" fönster, hur fungerar det nu?

1. Skapa nu en cookie med samma innehåll som tidigare.

1. Sätt expiration date på denna.

1. När skall man använda cookies och när skall man använda storage? Vad finns det för skillnader på dessa?


