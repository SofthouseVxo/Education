## 9.JavaScript - Document Object Model

I denna övningsuppgift skall ni träna på att iterera med hjälp av loopar.

1. Skapa en index.html med bas-struktur samt en index.js fil och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i ```<head>```.

1. Ni skall ni skapa ett nytt element dynamiskt, dvs ett element som inte finns innan din javaScript kod har körts. Detta gör ni genom att skriva ```document.createElement()``` där ni skickar med vilket element ni vill skapa till ```createElement``` funktionen. Spara denna nya paragrafen i en variabel som ni döper till ```myParagraphRef```.

1. Paragrafen skall ha klassen 'texts" och innehållet "lorem ipsum".

1. Lägg till den i DOM strukturen för rendering genom ```document.body.appendChild(myParagraph)```. Spara och kontrollera så att den syns i webbläsaren.

1. Ni skall nu plocka bort knappen som ni skapade i html koden i punkt 3. Detta skall ni dock göra dynamiskt. Detta gör man genom att identifiera vilket element som är förälder till det element ni vill ta bort. Inspektera DOM'en för att se detta.

1. Skapa nu en 