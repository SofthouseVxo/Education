## 9.JavaScript - Document Object Model adding and removing stuff

I denna övningsuppgift skall ni träna på att iterera med hjälp av loopar.

1. Skapa en index.html med bas-struktur samt en index.js fil och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i botten på ```<body>```.

1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.

1. Skapa nu en paragraf med ```id="awesome-paragraph"``` i html koden.

1. Ni skall nu lägga in innehållet "I'm awesome" inuti denna paragraf genom att använda ```textContent```.

1. Ändra nu innehållet till "I'm still awesome" med hjälp av att sätta ```innerText```.

1. Skapa nu en ny ```<div>``` som ni ger ```id="container```. Ni skall ni lägga till följande html element med hjälp av att ange detta som ```innerHTML```. För att skapa en sträng på flera rader kan du använda dig av multi line string dvs "``" tecknen.

```HTML
  <div>
    <h1>Added with innerHTML</h1>
    <p>Some text</p>
  </div>
```

8. Nu kan du prova att logga något av de nya elementet du precis skapat, exempelvis ```h1``` elementet.

9. Skapa nu ett en ny ```<div>``` men denna gång skall du skapa detta med hjälp av ```document.createElement()```. 

10. Elementet kommer inte att renderas på i webbläsaren utan att vi kör ```appendChild```. Elementet kommer att skapas i den noden som du kör ```appendChild```. Börja med att lägga till diven i ```<body>```.

11. Prova nu att istället lägga till den inuti diven du skapade med id't "container".

12. Nu skall du ta bort allt innehåll på sidan med hjälp av ```removeChild```.

13. Skapa nu nedan struktur med hjälp av ```createElement()```, ```appendChild()``` och  att sätta ```textContent```.

```HTML
<section>
  <div>
    <p>Hello World!</p>
    <button>Press me!</button>
  </div>
</section>
```

14. När skall man inte använda ```innerHTML```?

15. Vad finns det för nackdelar samt fördelar med "vanlig" DOM manipulation? 