## 8.JavaScript - Document Object Model

I denna övningsuppgift skall ni träna på att iterera med hjälp av loopar.

1. Skapa en index.html med bas-struktur samt en index.js fil och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i ```<head>```.

1. Skapa nu en knapp med id="myButton" i html koden.

1. I index.js sparar ni denna knapp i en variabel med getElementById. Denna variabel funkar nu som en referens till knappen. Dvs om ni gör ändrar variablen så kommer elementet att förändras. ```var myButton = document.getElement...```

1. Skapa nu 3st divar med klassen "myDivs". Testa nu att logga dessa genom att använda getElementsByClassName. ```console.log(documents.getElementsByCl..);``` 

1. Spara nu ni denna listan i en variabel som ni döper till myThreeDivs.

1. Plocka nu ut den första ur myThreeDivs och spara denna i en ny variabel som ni döper till ```firstDivRef```.

1. Spara nu den andra av dessa i en ny variabel som ni döper till ```secondDivRef```. Men denna gång kommer ni åt den genom att använda getElementsByTagname.

1. Och nu skall ni spara den tredje i en ny variabel som ni döper till ```thirdDivRef```. Men denna gång kommer ni åt den genom att använda querySelector.

1. Skapa nu en ordnad```<ol>``` lista med 5 list-element```<li>```. Dessa listitems skall innehålla 5 olika namn.

1. Spara en referens till listan i en variabel som ni döper till "myList". Ni kan komma åt denna genom att använda getElementsByTagname och sedan välja den första [0].

1. Logga nu det första elementet genom att använda ```console.log(myList.childNodes[0])```.

1. Spara denna i en ny variabel som ni döper till ```firstListItemRef```.

1. Logga nu innehållet i det list elementet genom att använda ```firstListItemRef.innerHTML```.

1. Ni skall ni skapa ett nytt element dynamiskt, dvs ett element som inte finns innan din javaScript kod har körts. Detta gör ni genom att skriva ```document.createElement()``` där ni skickar med vilket element ni vill skapa till ```createElement``` funktionen. Spara denna nya paragrafen i en variabel som ni döper till ```myParagraphRef```.

1. Paragrafen skall ha klassen 'texts" och innehållet "lorem ipsum".

1. Lägg till den i DOM strukturen för rendering genom ```document.body.appendChild(myParagraph)```. Spara och kontrollera så att den syns i webbläsaren.

1. Ni skall nu plocka bort knappen som ni skapade i html koden i punkt 3. Detta skall ni dock göra dynamiskt. Detta gör man genom att identifiera vilket element som är förälder till det element ni vill ta bort. Inspektera DOM'en för att se detta.

1. Skapa nu en 