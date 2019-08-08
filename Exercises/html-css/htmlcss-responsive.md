## 13.HTML & CSS - Responsivt grid

Ni skall nu få ska ett responsivt grid

* [W3schools responsive grid documentation](https://www.w3schools.com/css/css_rwd_grid.asp)
* [W3schools media queries documentation](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

1. Skapa en ny katalog

2. I denna skapar ni en index.html med basstruktur

3. Skapa även en styles.css i samma katalog

4. I styles.css lägger ni nu till följande kod

```CSS
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

[class*="col-"] {
  float: left;
}

```

5. Lägg nu till en div med id "container". Denna ger ni bredd 1000px,höjd 50px samt en border som är grå, solid och 2px.

6. I denna skapar ni 3st divar med css klasserna left, middle & right.

7. Ge dessa 3 klasserna olika färger och en höjd på 50px.

8. Testa nu att ge de olika de olika klasserna som vi lade till i CSS dokumentet. col-

9. Nu skall ni göra så att det ser ut som följande:

![12 column grid](media/12c.png "12 column grid")

10. Detta funkar fint på en datorskärm, men på en mobil skulle kolumnerna blivit väldigt små. Jag vill nu att ni lägger till CSS så att om skärmen är mindre än 768px så skall alla columner vara 100% breda. Glöm inte att lägga till ```<meta name="viewport" content="width=device-width, initial-scale=1">``` inuti ```<head></head>```. När det är klart skall det så ut som nedan.

Använd Chrome developer tools (eller annan webbläsare) för att simulera skärmstorlekarna.

![Media Queries](media/mediaQ.png "Media Queries")

