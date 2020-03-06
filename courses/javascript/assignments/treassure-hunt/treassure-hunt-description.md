## Inlämningsuppgift JavaScript - Treassure hunt

Ni skickar inte in uppgiften förrens HELA uppgiften är klar, dvs del 1 och 2!

I denna uppgift skall ni arbeta med JavaScript och skapa ett litet spel. I spelet öppnar man kistor för att leta efter en skatt. Spelet skall fungera som på filmer som finns bifogade här på ping pong.

Uppgiften är uppdelad i två delar, där första delen består endast av logik och loggar i konsolen medans i den andra skall ni börja arbeta med grafiska element.

### Uppgift del 1

#### Checkpoints

1. Du skall skapa en lista med 3 kistor där du slumpar ut en diamant i en av dessa tre.
1. Du skall sedan gissa i vilken kista denna diamant ligger i.
1. Detta gör du genom att anropa en guess funktion där du skickar in 1,2 eller 3 beroende på vilken kista du tror att den ligger i.
1. Gissar du rätt får du 5poäng.
1. Gissar du fel så får du -5 poäng.
1. När du gissat så loggar du i konsolen:
  1. Om du hittade diamanten (se film nedan).
  1. Hur mycket poäng du har sammanlagt (se film nedan).
  1. Samt en array som visar var diamanten låg (se film nedan).
1. När du har gissat och fått poäng så slumpar du ut diamanten igen.

### Uppgift del 2

I education repot på Github ligger det nu 3 filer i mappen treasure-hunt. Dessa är index.html, style.css, index.js samt en mapp med bilder. Den enda fil ni skall röra är index.js. Inuti index.js finns lite funktioner som kan fungera lite som guidning, notera att dessa är inte ett måste att använda!
För betyget Godkänd krävs följande:

1. Applikationen skall bete sig som den som presenteras i filmen längst ner på denna sida dvs:
  1. Skatten skall placeras slumpartat i en av skattkistorna.
  1. Vid funnen skatt så får man 5 poäng. Dessa poäng skall renderas på sidan.
  1. När användaren klickar på en skattkista som innehåller skatten skall ni hämta en bild från Pexels.com genom att använda deras API. Se guide längre ner.
  1. När man klickat på en kista skall det inte gå att klicka vidare utan då måste man trycka på "refresh" knappen för att rendera ut kistorna igen och skatten slumpas ut igen.
1. Allt innehåll på sidan som inte finns från början i HTML dokumentet skall läggas till dynamiskt med JavaScript.
1. Ni skall beskriva följande i kommentarer i koden.
  1. Beskrivning av funktioner.
  1. Beskrivning av variabler.

#### Pexels guide

* Registrera ett konto på pexels.com
* Be om en api nyckel (request access) på https://www.pexels.com/api/
* API dokumentation -> https://www.pexels.com/api/documentation/
* I dokumentationen står det att in skall använda API nyckeln i en "HTTP Authorization header" detta gör ni följande:


```JavaScript
var xhr = new XMLHttpRequest();

xhr.setRequestHeader('Authorization', 'här lägger ni in er API-nyckel');
```
* Nästa steg är att skapa en URL där responsen blir den ni önskar. I detta fallet en bild på en skatt eller liknande. Det ni skall skapa en är URL där ni skickar med parametrar (query string). Syntax för sådana är som följande: https://myserver.com/resource-name?param1=value1&param2=value2
* Dvs man inleder med ? och sedan vilka parametrar och för varje ny parameter använder ni &. Med hjälp av detta skall ni hämta flera bilder utifrån sökord och sedan filtrera ut så att ni visar 1 av dessa vid funnen skatt.

### Inlämning
#### Inlämning sker genom att ni skickar in 2 JavaScript filer som ni döper till:

```u1_js_pt1_<tre_första_förnamn>_<tre_första_efternamn>.js``` och den andra döper ni till ```u1_js_pt2_<tre_första_förnamn>_<tre_första_efternamn>.js```

### Deadline Söndag 8e December 24:00

### Checklista inför inlämning:

* Jag har kommenterat vad alla funktioner och variabler gör och innehåller.
* Min applikation kan köras i webbläsaren utan felmeddelande.
* Min applikation beter sig som angivits i beskrivningen ovan.
* Jag har inga loggar kvar i min kod (gäller ej del 1)
* Jag har strukturerat upp min kod med indentations.
* Jag har inte döpt några funktioner eller variabler till svenska namn.
* Jag använder beskrivande namn på funktioner och variabler (inte för generella).
* Mitt repo är döpt korrekt.

Kommentera som nedan, det är pingping som gör så att det blir höga radbrytningar nedan, ni har nomala i er kod: