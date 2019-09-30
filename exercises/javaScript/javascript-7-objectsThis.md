## 7.JavaScript - Objects & This

### Objects

1. Skapa en index.html med bas-struktur samt en index.js fil och lägg i en ny katalog.

1. Importera index.js genom att skriva ```<script src="index.js"><script>``` i ```<head>```.

1. Skapa nu ett nytt objekt som ni döper till ```boat``` med hjälp av object literal ```{}```.

1. ```boat``` skall innehålla 2 egenskaper(properties) och en metod(method).
* color = 'white; 
* speed = 120;
* honk = en funktion som loggar "hoooonk".

5. Ändra nu ```speed``` till 150 med hjälp av "dot notation".

6. När man vill skapa flera instanser av ett object kan man skriva funktioner och instansiera dessa mer **new** nyckelordet. Skapa en funktion likt följande:
```
function SmartPhone(brand, year){
  this.brand = brand;
  this.year = year;
}
```
7. Prova nu att skapa nya instanser av detta objekt genom att skriva ```var phone1 = new SmartPhone('samsung', 2017)``` osv. Logga dessa nya telefonerna i konsolen för att se objekten.

8. Skapa en ny funktion som ni döper till ```run```. Lägg nu till en egenskap till denna funktion med hjälp av ```run.who = 'some dude';```. Logga nu run i konsolen, vad får du för resultat och vilka slutsatser kan vi dra?

9. Skapa en ny array som ni döper till ```users``` fyller denna med 2 användare. Kör nu en ```console.log(typeof users)```. Vad får ni för resultat?

### This

1. Skapa nu en variabel i det globala scopet, dvs inte i ett objekt eller i en funktion. Denna kan ni döpa till ```name``` och ge den värdet ```'John Doe'```.

2. Under denna skriver ni ```console.log('global object', window)```. Kolla i konsolen och inspektera vad ```window``` innehåller.

3. ```window``` är det globala objektet, vad som finns här kan nås överallt i JavaScript koden. Testa nu ```console.log('global name', window.name)```.

4. Testa nu ```console.log('global this', this)```. Vad får ni för resultat?

5. Testa nu ```console.log('this name global', this.name)```. Vad får ni för resultat?

6. Skapa nu en funktion som ni döper till ```sayName```. Inuti ```sayName``` lägger ni till ```console.log('this in function', this)```, anropa funktionen och kontrollera vad ni får i konsolen.

7. Plocka bort ```name``` variabeln och skriv nu istället ```this.name = 'Jane Doe';``` inuti funktionen. Och under funktionsanropen skriver ni ```console.log(window.name);```. Kontrollera vad ni får för resultat.

8. Slutligen skapar ni ett nytt objekt som ni döper till ```speaker```, inuti detta objekt skapar ni en metod som ni döper till ```screamOutName```. Inuti ```screamOutName``` skriver ni ```console.log(this)```.

9. Anropa metoden ```speaker.screamOutName()``` och kontrollera vad ni får i konsolen.

10. Lägg nu till egenskapen ```name: 'Johnny doe'``` och lägg nu istället till ```console.log(this.name + '!!!!!')```. Spara och kontrollera vad resultatet blir i konsolen.


## Exercises external sources
* [W3schools - JavaScript Objects 1-3](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1)

* [Learning Nerd on Github - point 19 - 29](https://github.com/LearnTeachCode/pair-partners/issues/42)