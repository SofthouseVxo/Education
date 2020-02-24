## 17.JavaScript Handling forms

### Steg för steg
				
1. Skapa en ```index.html``` med basstruktur samt en ```index.js``` fil. Lägg dessa i en ny katalog.
          
1. Importera ```index.js``` i botten av ```body```.
  
1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.
  
1. Skapa nu ett HTML formulär innehållade 2 input-fält för text.
  
1. En av dessa skall vara av typen ```text``` och den andra ```email```.
  
1. Lägg även till en ```submit``` knapp.
  
1. När formuläret skickas dvs när knappen klickas på skall en ```onSubmit```-funktion anropas. Lös detta med en eventlyssnare.
  
1. Prova att skicka formuläret, vad händer?
  
1. Då vi inte vill att sidan skall laddas om så behöver vi förhindra default beteendet. Använd ```preventDefault()```.
  
1. Testa att skicka formuläret igen och kontrollera så att sidan in laddas om i webbläsarens developer tools.
  
1. Du skall nu logga värdet ```.value``` av bägge inputfälten (dvs vad de innehåller). Lägg till denna logik i din ```onSubmit``` funktion.
  
1. Implementera nu så att när man skickar formuläret så skall alla input-fält tömmas (reset).
  
### Tänka själv
  
1. Skapa nu en ```validate()``` funktion som tar emot innehållet i formuläret och kontrollerar så att bägge inputfälten inte är tomma. Om något fält är tomt skall ni rendera ut ett felmeddelande på sidan som berättar vad användaren har gjort fel.