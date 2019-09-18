## JavaScript Classes

## 3.JavaScript - Basics

1. Skapa index.html och Main.js filer och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i ```<head>```.

1. Skapa en ```Polygon.js``` fil ```touch Polygon.js``` eller skapa en ifrån er IDE

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