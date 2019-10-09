## 10.JavaScript - Document Object Model Styling and Events

1. Skapa en index.html med basstruktur samt en index.js fil. Lägg dessa i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i botten på ```<body>```.

1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.

1. Skapa nu nedan struktur med hjälp av ```createElement()```, ```appendChild()``` och  att sätta ```textContent```.

```HTML
<section>
  <div>
    <h1>I'm awesome</h1>
    <a>w3schools</a>
    <button>Press me, or don't!</button>
  </div>
</section>
```

5. Kontrollera nu om ```<a>``` elementet har ett "href" attribut med hjälp av ```.hasAttribute();```.

6. Använd ```setAttribute``` för att ge ```<a>``` en href som ni anger till att vara 'https://www.google.se'.

7. Vi skall nu ge knappen en ny bakgrundsfärg dynamiskt. Dvs efter att sidan har laddats. Spara nu en referens till knappen i en variabel och använd den för att ge knappen en ny ```style.backgroundColor``` och sätt denna till blå.

8. Sätt nu knappens textfärg till vit så att vi ser texten tydligt. Testa först att göra detta med ```setAttribute()``` och passa in ```'style'``` och ```'color: #FFF;'``` som argument. Vad får du för resultat?

9. Lös detta genom att direkt efter ```'color: #FFF;``` ange ```background-color: blue;'```. Spara och se att ni får önskat resultat. Vilka slutsatser kan ni dra?

10. Skapa nu en ```style.css``` och länka denna inuti ```<head>```. I denna skapar ni en selector av typen klass som ni döper till ```.my-header```.

11. Ge nu er ```<h1>``` denna klassen genom att använda ```.className```.

12. Ni skall ni ändra backgrundsfärgen på hela sidan när vi klickar på knappen. Börja med att koppla en eventlyssnare på knappen som lyssnar efter när någon KLICKAR på denna. Gör detta med ```addEventlistener```.

13. Vid klick skall en ```toggle()``` funktion anropas. Denna funktion skall toggla bakgrundsfärgen på ```<body>```. 

14. Börja med att logga ifall funktionen körs. När detta har bekräftats så lägger ni in logik för följande.

* Är bakgrundsfärgen ```.style.backgroundColor``` en tom sträng = sätt till färgen grön.
* Är bakgrundsfärgen satt till grön = sätt till rosa.
* Är bakgrundsfärgen satt till rosa = sätt till grön.

15. Skriv nu så att din ```toggle(event)``` funktion tar emot en parameter som skrivet här på samma rad. Prova ```console.log(event)```. Inspektera vad detta event innehåller.

16. Använd nu ```event.target``` för att ändra färgen på knappen om man trycker på den.

17. Slutligen ta bort så att det inte lyssnas på eventet längre med ```removeEventListener```.

