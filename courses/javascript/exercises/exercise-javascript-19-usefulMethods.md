## 19.JavaScript Userful methods

1. Börja med att skapa en ```ìndex.html``` och en ```index.js```.

1. Importera ```index.js``` i ```index.html```.

1. Börja med att deklarera en variabel som ni döper till ```users```. Denna skall innehålla följande ```['Benny', 'Jane', 'Scotty', 'Emma', 'Johnnnny']```.

1. Nu vill vi mappa våra users mot speciella kriterier och spara dessa i en NY array.

1. Detta kan vi göra med ```users.map()```. Så kör en ```.map()```, skicka med en funktion som tar emot varje användare som parameter, spara detta i en ny array.
<br>
-Om användarens namn består av 4 eller färre karaktärer eller mindre skall namnet skrivas med stora bokstäver.
<br>
-BONUS: Om användaren har fler än 4 karaktärer så vänd denna sträng, så att 'Benny' blir 'ynneB'.

1. Nu skall vi filtrera ut användare, detta kan vi göra med ```users.filter()```, filter tar precis som ```map``` emot en funktion med varje item som argument. Och returnerar en ny array med de items fyllt våra kriterier. I denna nya array skall endast användare med 6 karaktärer finnas.

1. Tänk er att vi nu hämtar nya användare från en backend, dessa skall vi spara en ny array som ni döper till ```newUsers``` och i denna finns ```['Bob', 'Clair', 'Sarah']```. Vi vill nu ha en ny array med allihopa. Lös detta genom att göra en ```users.concat()```.

1. Det är väldigt sällan användare endast består utav en lista med namn, så nu skall vi lägga till ett ```id``` till varje användare. Detta kan vi göra med ```users.map()``` i vilken vi får med ett index som andra argument. Så gör nu en ```.map()``` på dina users och returnera ett object innehållande ```{id: "användarens index", name: "användarens namn"}```.

1. Filtrera nu så att endast användare med ett id under 3 finns kvar med ```filter()```.
        
1. Skapa nu ett nytt objekt lika följande
```
  const animal = {
    type: 'tiger',
    name: 'Cat Stevens',
    speed: 40,
    mood: 'angry'
  };
```
10. Nu skall vi skapa ett helt nytt objekt med ```Object.assign()``` och det skall se ut precis som vårt animal objekt. Spara detta i en variabel som ni döper till 'tiger'. Logga både er tiger och animal.

1. Nu skall vi loopa igenom vårt tiger objekt med for..in, gör detta och logga varje ```key``` och ```value``` i objektet.

1. Skapa två nya arrayer, ```const keys = []; const values = [];``` och spara tigers keys i ```keys``` och values i ```values```.

### Tänka själv

1. Föreställ är att ni gör en request mot en backend och hämtar användare. Ni får responsen som ligger längst ner på sidan. Vi skall utföra 3 saker med denna respons:
* Skapa en array som endast innehåller alla användarnamn.
* Vi behöver plocka ut användare beroende på vilken stad de bor i, detta behöver vi en ```function``` för, funktionen skall returnera en array med användare som bor på det ställe ni passat med som parameter till funktionen.
* Vi behöver nu skapa en array med objekt som består av endast name, username och zipcode

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
