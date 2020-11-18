# Inlämning 1 (Deadline: 2020-11-23 kl 00:00)

## Inledning

Du skapa ett enkelt program för ett bibliotek, där användaren kan bestämma antalet böcker som ska läggas till och informationen om böckerna en efter en.

#### Checkpoints

1. Skapa ett Book konstruktur (constructor function) med följande properties och methods:

   1. Namn
   2. Ämne
   3. Antal sidor
   4. ISBN nummer
   5. getBookInfo (method)

2. Skapa en array med namnet books och lägg till 3 böcker (book objekt) i array:n books (hårdkoda).
3. Låt användaren mata in antal böcker som ska läggas till. (Tip: använd prompt())
4. Låt användaren mata in informationen en efter en d.v.s bookens namn, ämne, antal sidor och två ISBN nummer. (Tip: använd prompt())
5. Lägg till böckerna i array:n (books).
6. Skriv ut alla böcker till konsolen med hjälp av getBookInfo metoden.

### För betyget Godkänd krävs följande:

1. Book konstruktorn ska vara enligt kraven ovan.
2. Samtliga punkter i Checkpoints ovan ska vara utförda och i ordning.
3. getBookInfo ska skriva ut informationen enligt bilden nedan (måste se exakt likadan som på bilden):
   <img style="max-width: 700px" src="media/javascript-images/javascript-s1/book-output.png" alt="layout example">

### Inlämning:

- Du ska endast lämna in js filen (ingen zip/rar filer).
- Döp filen till ditt förnamn följt av understreck efternamn t.ex (yazeen_jasim.js)

### TIPS & Hjälp

1. Använd prompt() (https://www.w3schools.com/jsref/met_win_prompt.asp).
2. Använd forEach.
3. Använd "\n" för radbrytning.
