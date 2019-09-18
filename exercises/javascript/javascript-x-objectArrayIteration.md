## JavaScript Iterating through Arrays and Objects

Nedan följer uppgifter som handlar om att använda funktioner på olika sätt i JavaScript.

1. Börja med att skapa en ```ìndex.html``` och en ```index.js```

1. Importera ```index.js``` i bodyn inuti ```index.html```

1. Börja med att skapa en variabel som ni döper till ```users```. Denna skall innehålla följande ```['Benny', 'Jane', 'Scotty', 'Emma']```.

1. Nu vill vi modifiera våra users och få de nya användarna i en NY array. Detta kan vi göra med ```users.map()```. Så kör en ```.map()```, skicka med en funktion som tar emot en användare som parameter.
* Om användarens namn består av 4 karaktärer eller mindre skall namnet skrivas med stora bokstäver.
* Bonus: Om användaren har fler än 4 karaktärer så vänd denna sträng, så att 'Benny' blir 'ynneB'.

1. Nu skall vi filtrera ut användare, detta kan vi göra med ```users.filter()```, filter tar precis som map emot en funktion med varje item som argument. Och returnerar en ny array med de items fyllt våra kriterier. I denna nya array skall endast användare med 6 karaktärer finnas.

1. Tänk er att vi hämtar nu nya användare från en backend, dessa spara vi en i en ny array som ni döper till ```newUsers``` och i denna finns ```['Bob', 'Clair', 'Sarah']```. Vi vill nu ha en ny array med allihopa. Lös detta genom att göra en ```users.concat()```.

1. Det är väldigt sällan en user objekt endast består av en lista med namn, så nu skall vi lägga till ett ```id``` till varje användare. Detta kan vi göra med ```users.map()``` i vilken vi får med ett index som andra argument. Så gör nu en ```.map()``` på dina users och returnera ett object innehållande ```{id: <användarens index>, name:<användarens namn>}```.

1. Filtrera nu så att endast användare med ett id under 3 finns kvar.

1. Bonus: Då alla ovanstående metoder returnerar en ny array kan vi nu chaina dessa.

1. Skapa nu ett nytt objekt lika följande
```
  const animal = {
    type: 'tiger',
    name: 'Cat Stevens',
    speed: 40,
    mood: 'angry'
  };
```

11. Nu skall vi skapa ett helt nytt objekt med ```Object.assign()``` och det skall se ut precis som vårt animal objekt. Spara detta i en variabel som ni döper till 'tiger'. Logga både er tiger och animal.

12. Nu har vår tiger blivit gammal och hans nya egenskaper ligger i ett annat objekt likt följande ```const props = {speed: 4, mood: 'tired'};``` Merga nu in de nya egenskaperna i tiger objektet med ```Object.assign()```. Logga resultatet som skall se ut som följande:

```
  const animal = {
    type: 'tiger',
    name: 'Cat Stevens',
    speed: 4,
    mood: 'tired'
  };
```

13. Nu skall vi loopa igenom vårt tiger objekt med for..in, gör detta och logga varje ```key``` och ```value``` i objektet.

14. Skapa två nya arrayer, ```const keys = []; const values = [];``` och spara tigers keys i ```keys``` och values i ```values```.

15. Kommentera bort det ni nyss gjorde och lös det med ```Object.keys``` och ```Object.values``` istället.

16. Föreställ är att ni gör en request mot en backend och hämtar användare. Ni får responsen som ligger längst ner på sidan. Vi skall utföra 3 saker med denna respons:
* Vi behöver ha en array som vi kan använda som endast innehåller alla användarnamn.
* Vi behöver plocka ut användare beroende på vilken stad de bor i, detta behöver vi en function för, funktionen skall returnera en array med användare som bor på det ställe ni passat med som parameter till funktionen.
* Vi behöver nu skapa en array med objekt som består av endast name, username och zipcode
* Nu skall användaren med id 3 sparas i en variabel (object);
* Bonus: Föreställ dig att denna användaren (objektet) skickas in i en komponent, där vi skall lista dennes egenskaper med ```<li>```taggar på ett lite krångligare klurigare sätt. Så gör nu om detta objekt till en array som set ut som följande ```['name', 'Clementine Bauch', 'Samantha', {zipcode: '59590-4157'}]```.


```
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      city: "Gwenborough",
      zipcode: "92998-3874",
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      city: "Wisokyburgh",
      zipcode: "90566-7771"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      city: "Gwenborough",
      zipcode: "59590-4157",
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      city: "South Elvis",
      zipcode: "53919-4257"
    }
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      city: "Gwenborough",
      zipcode: "33263"
    }
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      city: "South Christy",
      zipcode: "23505-1337"
    }
  }
];
```



