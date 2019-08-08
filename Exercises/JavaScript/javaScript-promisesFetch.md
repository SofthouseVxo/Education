
## XMLHttpRequest , Promises, Fetch & Angular http

I denna uppgift skall ni leka med promises, fetch och att hämta data med hjälp av angulars HttpClient. Använd exemplen från dagens föreläsning för att lösa uppgifterna.

1. Skapa ett nytt angular projekt med Angular CLI ```ng new httptest```

1. ```cd httptest```

1. Starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```

1. Öppna en ny tabb eller ett nytt teminal/commandLine fönster och navigera till httptest projektet

1. Skapa en component som ni döper till promiser ```ng g c promiser```

1. Rensa templaten i ```app.component.html``` och rendera ```app-promiser```

1. I Promiser komponenten skapar ni en knapp med titeln “Promise it!". Klickar man på knappen skall en onPromiseTest() metod köras.

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

1. Slutligen skall vi hämta samma data med angular.

1. Ni lägger till en ny knapp som ni kallar “get with angular". Vi click skall denna kalla på en metod.

1. I denna metod gör ni samma anrop fast med angulars HttpClient (get).

1. Denna returnerar en observable och för att något över huvud taget skall hända så måste ni subscriba (prenumerera) på denna. Detta gör ni genom att lägga på ```.subscribe()``` på er ```.get()``` funktionen.

1. ```.subscribe()``` förväntar sig en observer, och en observer är en samling callbacks (funktioner). Man kan skicka med 3st som körs när:
* Vi får ett nytt värde (next)
* Något går snett (error)
* Den är klar (complete)

Så skicka med en av varje och med en logg inuti.

Spara och kör och se vad du får i loggen.

