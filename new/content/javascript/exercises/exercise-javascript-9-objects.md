<!doctype html>
<html>
	<head>
		<title>JavaScript Exercises</title>

				## 9.JavaScript - Objects
				        
### Steg för steg
				
        1. Skapa en ```index.html``` med basstruktur samt en ```index.js``` fil. Lägg dessa i en ny katalog.
        
        1. Importera ```index.js``` inuti ```head```.
        
        1. Skapa nu ett nytt objekt som ni döper till ```boat``` med hjälp av object literal ```{}```.
        
				1. ```boat``` skall innehålla 2 egenskaper(properties) och en metod(method).
				<br>
color = 'white'<br>
speed = 120<br>
honk = en funktion som loggar "hoooonk".
				
        1. Ändra nu ```speed``` till 150 med hjälp av ```dot notation```.
        
        1. När man vill skapa flera instanser av ett objekt kan man skriva funktioner och instansiera dessa med **new** nyckelordet. Skapa en funktion likt följande:
        ```
        function SmartPhone(brand, year){
          this.brand = brand;
          this.year = year;
        }
				```
				
        1. Prova nu att skapa flera nya instanser av detta objekt genom att skriva ```var phone1 = new SmartPhone('samsung', 2017)``` osv. Logga dessa nya telefonerna i konsolen för att se objekten.
        
        1. Skapa en ny funktion som ni döper till ```run```. Lägg nu till en egenskap till denna funktion med hjälp av ```run.who = 'some dude';```. Logga nu ```run.who``` i konsolen, vad får du för resultat och vilka slutsatser kan vi dra?
        
				1. Skapa en ny array som ni döper till ```users```, lägg till 2 nya användare. Dessa användare skall vara objekt och innehålla namn, id, ålder och kön.
				
				Kör nu en ```console.log(typeof users)```. Vad får ni för resultat?
        
        ### Övningar externa källor
        * [W3schools - JavaScript Objects 1-3](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1)
        
        * [Learning Nerd on Github - point 19 - 29](https://github.com/LearnTeachCode/pair-partners/issues/42)
