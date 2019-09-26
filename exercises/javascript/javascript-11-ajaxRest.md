## 11.JavaScript - AJAX & REST

I denna övningsuppgift skall ni träna på att iterera med hjälp av loopar.

1. Skapa en index.html med bas-struktur samt en index.js fil och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i ```<head>```.

1. I index.html skapar ni en knapp med titeln “Promise it!". Klickar man på knappen skall en onPromiseTest() funktion köras.

1. I metoden skapar ni ett nytt promise. Denna skall resolvas med värdet 12 efter
5000ms. (resolve och reject är callbacks som ni passar in i new Promise).

1. Kör ```.then``` på promises för att logga värdet.

1. Detta promise skall returna 12. Detta innebär att det returnar ett nytt promise med värdet 12. Lägg sedan på 24 och logga.

1. Ersätt ditt promise resolve med en reject som rejectar efter 4000ms med ett valfritt felmeddelande. Lägg till en catch för att se värdet.

1. Nu skall vi göra en fetch, skapa en ny knapp med titeln “fetch it!" som ni binder till en metod ni döper till ```onFetchit()```.

1. I denna metod gör ni en fetch med URL'en [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)

1. Logga responsen.

1. Filterera ut valfritt värde från responsen och returnera detta i ett nytt promise.

1. Få ditt värde och logga detta med then( ).