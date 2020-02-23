## 20. JavaScript Classes and OOP

1. Skapa följande filer och lägg i en ny katalog.

* Main.js
* Polygon.js

2. Importera dessa i ```head```

3. Vi skall nu skapa vår Main klass. Och denna skall laddas när vårt window object har laddats. Så skriv följande:
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

Det som händer är att när window har laddats så skapar vi en ny instans av vår Main class. (class Main = vår blueprint/ritning). This är nu en referens till vår class (vår instans). Så spara och kör och kolla i konsolen. Vi ser nu Main{ }

4. Lägg nu till ```myFirstProperty = 10;``` precis under ```class Main {``` spara och kolla i konsolen. Vi ser nu ``` {myFirstProperty: 10}``` i konsolen. Detta är nu en egenskap bunden till denna Main klassen. Och i och med att this var en referens till klassen så kommer vi nu åt egenskapen genom ```this.myFirstProperty```. Så byt nu ut ```console.log(this);``` emot ```console.log(this.myFirstProperty);```. Kontrollera i webbläsaren.

5. Nu skall vi lägga till en metod (som är en funktion tillhörande en klass). Vi döper denna till checkValue och skriver lägger till följande i Main classen följande:
```
		checkValue () {
			console.log('log inside checkValue', this.myFirstProperty);
		}
```

Anropa metoden från instansen.

6. Detta innebär att vi har en metod vid namn ```checkValue```, denna kan vi nu också komma åt via this men vi har inte kallat på den än. Så i vår constructor lägger vi nu till.
```
constructor(){
			console.log('log inside constructor', this);
			this.checkValue();
}
```

7. Vill vi passa in olika egenskaper för att bygga olika instanser utifrån samma klass gör vi detta när vi skapar en ny instans. Dessa tar vi emot i constructorn. Detta skall vi göra med en Polygon klass. Så i ```Polygon.js``` skriver ni följande:
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

8. Så tillbaka till ```Main.js``` här kan vi skapa ny instanser av Polygon (Vi har tillgång till Polygon för att vi har lagt till ```script src="Polygon.js"``` innan ```script src="Main.js"```.

9. Så i ```Main.js``` skapar vi nu en ny metod som vi döper till createPolygon inuti Main klassen. Denna skall innehålla följande:
```            
let myPoly1 = new Polygon(100,100);
myPoly1.checkHeight();
myPoly1.checkHeight();
```

10. Anropa metoden och kontrollera att den skapas.

### Tänka själv

1. Skapa nu en ny class som ni döper till Button i ett nytt JS dokument. Glöm inte att importera denna i ```head```. 

1. Inuti denna lägger ni till funktionalitet för att rendera en ny ```button``` i DOMen.

1. Testa nu att skapa flera instanser av denna. Varje gång skall en ny knapp renderas på sidan.

1. Fixa nu satt att ni skickar med vad som skall stå i knappen.
