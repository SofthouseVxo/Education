# Inlämning 2 (Deadline: 2020-12-09 kl 00:00)

## Inledning

Ni skapa ett enkelt inloggningssystem, där användaren kan logga in med username bara (Titta på Gif bilden längst ner).
Till er hjälp så finns det två filer index.html och index.js. Ni får bara skriva kod på index.js filen, index.html får ni inte modifiera.
Det finns fem funktioner på index.js filen som ni ska färdig implementera, varje funktion är kommenterad om vad den ska göra/innehålla.
Det finns också init funktion den ska ni bara anropa en gång längst ner på koden, usernames array:n består av användarenamn som användaren kan logga in med.

#### Checkpoints

1. På initLoginForm funktionen: skriv kod för att skapa form element och lägg till det i DOM. (TIP: använd createElement och appendChild).
2. På initLabel funktionen: skriv kod för att skapa label element med texten "username" och lägg till det i form elementet som vi skapade på initLoginForm funktionen.
3. På initInput funktionen: skriv kod för att skapa input element med required attributet och lägg till det i form elementet (TIP: använd .required = true).
4. validateLoginInfo: skriv kod för att hämta input från användaren med hjälp av input elementet som vi skapade på initInput och returnera sant eller falskt beroende på om användarnamnet finns i usernames array:n eller inte.
5. på initButton funktionen: skriv kod för att skapa button element med texten "login", och lägg till click eventListener som anropar funktionen validateLoginInfo. kontrollera om validateLoginInfo retunerar true så ska användaren få en alert med texten "Welcome" och om validateLoginInfo retunerar false lägg till en border style på input elmenetet (3px solid red)
6. Skriv kod för att anropa funktionen init efter att DOM har laddats klart (TIP: titta på "DOMContentLoaded" eventet).

### För betyget Godkänd krävs följande:

1. “use strict”; ska vara på första raden.
2. Samtliga punkter i Checkpoints ovan ska vara utförda och i ordning.
3. Du har använt index.js filen som är bifogad.
4. Du har inte ändrat index.html filen.
5. Du har inte ändrat init funktionen på index.js filen.

### Inlämning:

- Du ska endast lämna in js filen (ingen zip/rar filer).
- Döp filen till ditt förnamn följt av understreck efternamn t.ex (yazeen_jasim.js)

### TIPS & Hjälp

1. För att få tillgång till form och input elementet överallt i koden, skapa två globla variabler där du spara dem. (d.v.s du sparar det som createElement returnerar)
2. Input required: https://www.w3schools.com/jsref/prop_text_required.asp
3. DOMContentLoaded: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
4. CreatElement: https://www.w3schools.com/jsref/met_document_createelement.asp
5. appendChild: https://www.w3schools.com/jsref/met_node_appendchild.asp

### Resultatet

  <img style="max-width: 700px" src="/media/javascript-images/javascript-s1/runexample.gif" alt="run example">
