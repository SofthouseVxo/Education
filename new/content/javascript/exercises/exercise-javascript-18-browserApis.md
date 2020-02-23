## 18.JavaScript - Browser API's

### Steg för steg

1. Skapa en ```index.html``` med basstruktur samt en ```index.js``` fil. Lägg dessa i en ny katalog.

1. Importera ```index.js``` i botten av ```body```.

1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.

1. I ´´´index.html``` skapar ni 2 knapper dynamiskt, en med innehållet "add to storage" och en "remove from storage".

1. När man klickar på ```add``` knappen skall ni spara en "user" i localstorage, denne skall innehålla ```'Jane'```. Använd ```setItem()```

1. Om man klickar på ```add``` och det redan finns en ```user``` i localstorage så kan ni logga denna i konsolen.

1. När man klickar på ```remove``` så skall ni plocka bort användaren från localstorage.

1. Prova nu att lägga till användaren. Öppna devtools i chrome eller mozilla. Välj fliken "application" eller "storage" och kontrollera att det finns en användare i localstorage.

1. Stäng webbläsaren och öppna den igen, finns den kvar?

1. Ersätt nu localStorage med sessionStorage, kontrollera att det fungerar när webbläsaren är öppen. Testa sedan att stänga webbläaren när ni har en användare i storage. Finns den kvar när ni öppnar fönstret igen?

1. Testa de 2 olika fast denna gång med ett "privat" fönster, hur fungerar det nu?

1. Skapa nu en cookie med samma innehåll som tidigare.

1. Sätt expiration date på denna till 24 februari 2020 kl 19:00.

1. När skall man använda cookies och när skall man använda storage? Vad finns det för skillnader på dessa?
