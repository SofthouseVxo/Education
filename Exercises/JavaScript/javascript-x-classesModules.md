## JavaScript Classes and Modules

I denna övningsuppgift skall ni få träna på klasser och moduler i vanilla JavaScript. (för att vara säker på att allt stöds använd google chrome)

1. Skapa en ny mapp som ni döper till jsclasstest

1. cd jsclasstest

1. Initiera ett nytt npm projekt ```npm init``` (tryck bara enter på alla alternativ som kommer)

1. installera en live-server i projektet ```npm install live-server --save-dev```

1. Skapa en ```index.html``` fil ```touch index.html``` eller skapa en ifrån er IDE

1. Skapa en ```Main.js``` fil ```touch Main.js``` eller skapa en ifrån er IDE

1. Skapa en ```Polygon.js``` fil ```touch Polygon.js``` eller skapa en ifrån er IDE

1. Starta live servern från ert IDE

1. Vi börjar med att skapa vår index.html den är väldigt standard och vi importerar våra script filer.
```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>

   <script src="Polygon.js"></script>
   <script src="Main.js"></script>
</head>
<body>

</body>
</html>
```

10. Vi skall nu skapa vår Main klass. Och denna skall laddas när vårt window object har laddats. Så skriv följande:
```
class Main {
   constructor(){
       console.log(this);
   }
}

window.onload = function(){
   let mainInstance = new Main();
}
```

Det som händer är att när window har laddats så skapar vi en ny instans av vår Main class. (class Main = vår blueprint/ritning). This är nu en referens till vår class (vår instans). Så spara och kör och kolla i konsolen. Vi ser nu Main{ }. för vi har ju inte skapat några egenskaper eller metoder i vår Main class.

11. Lägg nu till ```myFirstProperty = 10;``` precis under ```class Main {``` spara och kolla i konsollen. Vi ser nu ```Main {myFirstProperty: 10}``` i konsolen. Detta är en egenskap bunden till denna Main klassen. Och i och med att this var en referens till klassen så kommer vi nu åt egenskapen genom ```this.myFirstProperty```. Så byt nu ut ```console.log(this);``` emot ```console.log(this.myFirstProperty);```. Och vi ser då 10 i konsolen.

12. Nu skall vi lägga till en metod (som är en funktion tillhörande en klass). Vi döper denna till checkValue och skriver om följande:
```
class Main {

   myFirstProperty = 10;

   constructor(){
       console.log('log inside constructor', this);
   }

   checkValue () {
       console.log('log inside checkValue', this);
   }
}
```

Spara och kolla i konsolen. Vi ser då att endast loggen i constructorn körs, och denna är:

13. Detta innebär att vi har en metod vid namn ```checkValue```, denna kan vi nu också komma åt via this men vi har inte kallat på den än. Så i vår constructor lägger vi nu till.
```
constructor(){
      console.log('log inside constructor', this);
      this.checkValue();
}
```

Spara och kör. Och nu ser vi att vi får bägge loggarna i konsolen. Och vi ser att this är en referens till den egna class i båda fallen. Dvs en referens till instansen av vår klass. Så nu kan vi även komma åt vår ```myFirstProperty``` inuti ```checkValue``` igenom:
```
this.checkValue () {
      console.log(this.myFirstProperty);
}
```
Spara och kör.

14. Vill vi passa in olika egenskaper för att bygga olika instanser utifrån samma klass gör vi detta när vi skapar en ny instans. Dessa tar vi emot i constructorn. Detta skall vi göra med en Polygon klass. Så i ```Polygon.js``` skriver ni följande:
```
class Polygon {
   constructor(height, width) {
     this.height = height;
     this.width = width;
   }

   checkHeight(){
     console.log('Height: ', this.height);
   }

   checkWidth(){
     console.log('Width: ', this.height);
   }
}
```

När man skapar en ny instans av denna kan man skicka med 2 värden. Height och width. Dessa sätts till egenskaper genom att använda this, som man sedan kommer åt i metoder genom att referera till this.

15. Så tillbaka till ```Main.js``` här kan vi skapa ny instanser av Polygon (Vi har tillgång till Polygon för att vi har lagt till ```<script src="Polygon.js">``` innan ```<script src="Main.js">```. Så i ```Main.js``` lägger vi till det markerade:
```
window.onload = function(){
   //let mainInstance = new Main();

   let myPoly1 = new Polygon(100,100);
   myPoly1.checkHeight();
   myPoly1.checkHeight();
}
```

16. Det vi gör nu är att skapa en ny instans av Polygon och sparar denna i myPoly1. Vi skickar med våra värden som sedan sätts i Polygons constructor. Vi anropar sedan metoderna genom myPoly1 som nu är en instans av Polygon klassen.

Låt oss låtsas att vi har 200 olika klasser i 200 olika .js filer. Som ni såg så har vi automatiskt tillgång till Polygon om vi har denna script-tagg före i index.html. Detta kan bli rörigt och ibland vill man inte dela sina klasser hur som helst. Detta löser man med att dela upp det i moduler. Vi skall nu göra Polygon till en modul, exportera denna inifrån Polygon.js och importera denna i ```Main.js```. (det finns bibliotek och hjälpmedel där vi kan lösa detta på olika sätt som commonJS, requireJS, webpack men vi kommer använda det stöd som följer med ES6).

Vi börjar med att ändra script taggarna in index.html
```
<body>
   <!-- <script src="Polygon.js"></script> -->
   <script type="module" src="Main.js"></script>
</body>
```

17. Vi har nu kommenterat bort den första script taggen, ni kan även ta bort den för den kommer vi inte behöva. Vi har lagt till type="module", detta måste göras för att webbläsaren skall förstå att vi jobbar med moduler. Spara och kör. Vi får nu ett för att Polygon inte är definierad, detta är för vi har inte berättat vart den finns.

18. Det vi behöver göra nu är att först exportera vår Polygon så att den kan vara tillgänglig för andra att använda. Och för att använda den måste vi importera den. Så vi börjar med att exportera den. Detta gör vi genom att lägga till export nyckelordet.
```
export class Polygon {
   constructor(height, width) {
     this.height = height;
     this.width = width;
   }
```

Sedan lägger vi till nedanstående överst i ```Main.js```
```import { Polygon } from './Polygon.js';```

Spara och kör och nu skall det fungera som tidigare. Om vi nu har 200 moduler istället så kan vi bestämma vilka som skall exporteras och endast importera dessa där det behövs. Det blir en bättre och tydligare struktur, allt ligger inte i det så kallade globala scopet.

Egna studier:
* [https://developer.mozilla.org/sv-SE/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/sv-SE/docs/Web/JavaScript/Reference/Classes)
* [https://www.sitepoint.com/understanding-es6-modules/](https://www.sitepoint.com/understanding-es6-modules/)


