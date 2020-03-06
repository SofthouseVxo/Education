
## UppgiftsBeskrivning - U1 Angular

I denna uppgift skall ni jobba med Angular och framförallt Komponenter och Direktiv (Components/Directives), med DataBinding.

Uppgiften består av att ni skall skapa Komponenter som kommunicerar och delar data mellan sig. Uppgiften består av att skapa en enkel dashboard där man lägger till och tar bort användare. Det skall även gå att skifta färg på användarna. Ni finner hur applikation skall fungera i den bifogade filmen "Uppgift1 video" som ligger som bifogad fil i på pingpong.

### För betyget Godkänd krävs följande:

1. Komponentstrukturen skall följa vad som presenteras i bild "Komponentstruktur" i denna mapp, där metoder delas upp i komponenterna som visas i "flödesschema".
1. Applikationen skall bete sig som den som presenteras i filmen bifogad i denna mapp. D.v.s. det skall vara möjligt att lägga till användare, ta bort användare (det räcker att ta bort sista användaren i listan). Det skall även vara möjligt att ändra färg på användarna genom att klicka på en "toggle" knapp.
1. Applikationen skall ha samma struktur rent visuellt som exemplet i filmen.  Utöver detta har ni fria händer när det kommer till styling (ni får använda bibliotek om så önskas).

Utöver ovanstående skall applikationen uppfylla följande:

1. När man kör applikationen med ng serve skall applikationen byggas helt utan felmeddelande.
1. Varje komponent ni skriver skall innehålla en kort beskrivning av dess funktionalitet.
1. Komplexa eller stora metoder skall ha en kort beskrivning av vad den gör.
1. Applikationen skall skapas med hjälp av Angular CLI och skall vara döpt till följande AngularU1- + första tre bokstäverna i förnamn + tre första i efternamn.
1. Applikationen redovisas genom att ni zippar ert projekt **(UTAN node_modules)** Döp zip-filen till AngularU1RobLun (byt ut RobLun mot ert namn).

### Deadline Sön 9/2 kl 24:00

#### Checklista inför inlämning:

* Min applikation kan köras i webbläsaren utan felmeddelande.
* Min applikation beter sig som angivits i beskrivningen ovan.
* Jag har inga console.logs i min kod.
* Jag har strukturerat upp min kod med indentations.
* Jag har inte döpt några metoder eller egenskaper till svenska namn.
* Jag använder beskrivande namn på metoder och egenskaper (inte för generella).
* Min projektmapp är döpt korrekt.
* Jag har inga egenskaper eller metoder som inte används.
* Jag har angivit typer för egenskaper och vad metoder returnerar.
* Alla mina klasser är kommenterade med vilken funktionalitet de innehåller samt dess syfte.
* Alla metoder som är komplexa eller stora har kommenterats.
* Min komponentstruktur följer nedan mönster där först i listan är längst upp.


```JavaScript
Imports { }
@Decorator
Class
Properties (egenskaper)
Constructor
Lifecycle methods
Methods (metoder)
```