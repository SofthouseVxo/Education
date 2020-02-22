<!doctype html>
<html>
	<head>
		<title>JavaScript Exercises</title>

       ## 10.JavaScript - This

### Steg för steg

        1. Skapa nu en variabel i det globala scopet, dvs inte i ett objekt eller i en funktion. Denna kan ni döpa till ```myName``` och ge den värdet ```'John Doe'``` (obs använd ```var```).
        
        2. Under denna skriver ni ```console.log('global object', window)```. Kolla i konsolen och inspektera vad ```window``` innehåller.
        
        3. ```window``` är det globala objektet, vad som finns här kan nås överallt i JavaScript koden. Testa nu ```console.log('global myName', window.myName)```.
        
        4. Testa nu ```console.log('global this', this)```. Vad får ni för resultat?
        
        5. Testa nu ```console.log('this name global', this.name)```. Vad får ni för resultat?
        
        6. Skapa nu en funktion som ni döper till ```sayName```. Inuti ```sayName``` lägger ni till ```console.log('this in function', this)```, anropa funktionen och kontrollera vad ni får i konsolen.
        
        7. Plocka bort ```myName``` variabeln och skriv nu istället ```this.myName = 'Jane Doe';``` inuti funktionen. Och under funktionsanropen skriver ni ```console.log(window.myName);```. Kontrollera vad ni får för resultat.
        
        8. Slutligen skapar ni ett nytt objekt som ni döper till ```speaker```, inuti detta objekt skapar ni en metod som ni döper till ```screamOutName```. Inuti ```screamOutName``` skriver ni ```console.log(this)```.
        
        9. Anropa metoden ```speaker.screamOutName()``` och kontrollera vad ni får i konsolen.
        
        10. Lägg nu till egenskapen ```myName: 'Johnny doe'``` och lägg nu istället till ```console.log(this.myName + '!!!!!')```. Spara och kontrollera vad resultatet blir i konsolen.
        
        ### Övningar externa källor
