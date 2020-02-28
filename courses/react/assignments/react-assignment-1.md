## UppgiftsBeskrivning - U1 React

I denna uppgift skall ni arbeta med react och de delar denna uppgift täcker är.

* Components
* Composition
* Conditional Rendering
* JSX
* Rendering lists
* Styling with css modules
* Handling input fields

I denna applikation krävs det att ni har minst 3 komponenter (ni kan ha fler om ni vill). Dessa komponenter är:

* DashboardComponent.js
      * Class Component
      * State: Användare, färg
      * Syfte/logik:
         * Lägga till användare
         * Ta bort användare
         * Hantera vårt inputfält
         * Knapp för att toggla färg
         * Renderar en lista med UserComponents
* WrapperComponent.js
      * Class Component
      * State =  showContent (true, false)
      * Syfte: Fungerar som en wrapper för våra cards
         * Saker som renderas i denna wrapper skall hamna i ett kort (card)
         * Innehåller knapp för att toggla state showContent
         * Denna renderar vad som passas in som children (om state showContent är true)
* UserComponent.js
   * Function Component
   * Props: färg, användare
   * Syfte: renderar en användare


### För betyget Godkänd krävs följande:

#### Applikationen skall bete sig som den som presenteras i filmen Video Godkänt bifogad i denna mapp.

* Det skall vara möjligt att lägga till användare
* Ta bort användare (det räcker att ta bort sista användaren i listan).
* Det skall även vara möjligt att ändra färg på användarna genom att klicka på en "toggle" knapp.
* Innehållet i varje kort skall kunna döljas/visas med en toggle-knapp.
* Wrapper komponenten skall använda css-modules.
* Utöver ovanstående oavsett betyg skall applikationen uppfylla följande:

* När man kör applikationen med npm start alternativt yarn start skall applikationen byggas helt utan felmeddelande.
* Varje komponent (klass, funktion) ni skriver skall innehålla en kort beskrivning av dess funktionalitet.
* Varje metod(komplexa sådana) ni skriver skall ha en kort beskrivning av vad den gör.
* Applikationen redovisas genom att ni zippar ert projekt (UTAN node_modules) Döp mappen till ReactU1RobLun (byt ut RobLun mot ert namn)

### Deadline Söndag 8/3 24:00
#### Checklista inför inlämning:

* Min applikation kan köras i webbläsaren utan felmeddelande
* Min applikation beter sig som angivits i beskrivningen ovan
* Jag har inga console.logs i min kod
* Jag har strukturerat upp min kod med indentations
* Jag har inte döpt några metoder eller egenskaper till svenska namn
* Jag använder beskrivande namn på metoder och egenskaper (inte för generella)
* Mitt repo är döpt korrekt
* Jag har inga egenskaper eller metoder som inte används
* Alla mina klasser och metoder har kommenterats (förklaring på vad de gör och innehåller)
* Min komponentstruktur följer nedan mönster där först i listan är längst upp

### Komponentstruktur:

```
Imports { }
Class
Properties (egenskaper)
Constructor
Lifecycle methods
Methods (metoder)
Render
```