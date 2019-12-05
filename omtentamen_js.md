## Praktisk Omtentamen - Javascript med jQuery , 25 yrkeshögskolepoäng

### Beskrivning
Detta är en praktiskt omtentamen som skrivs/utförs individuellt på plats i klassrummet.

### Regler:

* All form utav kommunikation online eller offline resulterar i ett underkänt betyg.
* Mobiltelefon skall stängas av innan tentamen börjar, om ni väntar ett viktigt samtal så skall detta meddelas innan tentamensstart.
* Det är ej tillåtet att använda hörlurar.

#### 

* Att besöka andra webbplatser än det 4 som nämns nedan resulterar i ett underkänt på omtentamen.
  * [https://www.w3schools.com](https://www.w3schools.com)
  * [https://jquery.com/](https://jquery.com/)
  * Denna sida på Github (i Utloggat läge!)
  * PingPong - ENDAST för att skicka in tentamen.

### Uppgifter och betyg

#### Uppgifter
Tentamen innehåller 11 uppgifter och maxpoäng är **47p**

#### Betygsgränser:
* För ett ***Godkänt(G)*** betyg krävs **32p**
* För ett ***Väl Godkänt(VG)*** betyg krävs **40p**

### Inlämning/Redovisning

Inlämning sker genom att ni skapar en javascript fil som ni döper till **omtentamen1_js_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>.js** och denna skickar ni in på pingpong.

Dvs. om jag som heter <b>Robin Lundin</b> skulle döpt min fil skulle den heta ```omtentamen1_js_rob_lun.js```

### Tentamen lämnas in senast **17:00**.

## 

Början med att skapa en ```index.html``` där ni importerar er JavaScript (som ni döpt till vad som nämns ovan) längst ner i ```body```.

## 

### Uppgift 1 (5p)

1. Skapa en ny ```array``` innehållande 5st ```booleans```. Denna döper ni till <b>guesses</b> och innehåller följande: true, false, false, true, true.

1. Skapa nu en valfri ```loop``` som itererar över <b>guesses</b> och skriver ut 'the guess is' + ```gissningen```. (så första varvet skall logga 'guess is true'). Detta skall skrivas ut i konsolen.
## 


### Uppgift 2 (6p)

Om en gissning är ```true``` betyder detta att man gissade rätt och då får man 5 poäng.

1. Skapa nu en ```function``` som tar emot <b>guesses</b> som ```parameter```. Denna ```function``` skall **returnera** hur många poäng man får beroende på antal korrekta gissningar. 

* Dvs om arrayen som skickas in består av ```true, true, false``` så skall ```10``` returneras.

* Spara det som returneras i en ```variable``` som ni döper till <b>points</b>.

## 

### Uppgift 3 (5p)

Skapa en ny knapp ```button``` och lägg till denna i DOM-strukturen med **JavaScript** (inuti ```body```).
* Texten i knappen skall vara 'press me if you dare'. 
* Om man klickar på knappen skall "Ive clicked the button!" skrivas ut i konsolen.

## 

### Uppgift 4 (3p)
Klistra in följande i din html kod:
```HTML
  <p>Hello coders!</p>
```

Ändra nu innehållet (texten) i ```paragrafen``` så att den blir "Hello world".

### Uppgift 5 (4p)

Gör nu så att ```paragrafen``` som ni skapade i **Uppgift4** får följande:
* Background color = 'green'
* Color = '#ff00ff'
* Class = 'btn-class'

<b>OBS! Detta skall göras i JavaScript koden!</b>

## 

### Uppgift 6 (5p)

1. Skapa ett nytt ```object``` som ni döper till <b>car</b>. <b>car</b> skall ha 2 egenskaper(```Properties```) som är ```wheels``` och ```cabriolet```.
* ```wheels``` = 4
* ```cabriolet``` = true

2. Efter att ni har deklarerat detta objekt skall ni nu lägga till en metod (method) till <b>car</b>. Denna metod döper ni till <b>honk</b>. Om man anropar <b>honk</b> så skall objektets egenskap ```wheels``` ändras till 8.

3. Anropa <b>honk</b>

## 

### Uppgift 7 (4p)
Berätta utförligt om AJAX, vad det betyder, hur det används och hur man använder det med JavaScript. Svara på frågan i en <b>block-kommentar</b> i er JavaScript fil. 

## 

### Uppgift 8 (3p)

Flytta javascript importen till ```head``` istället. Ändra i din javaScript fil så att din all kod fortfarande fungerar.

## 

### Uppgift 9 (4p)

Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor <u>utförligt</u>:
* Vad är viktigt att tänka på när man skall använda jQuery, potentiella nackdelar?
* Vad gör koden nedan?
```JavaScript
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
```

## 

### Uppgift 10 (4p)

Beskriv skillnaden mellan ```innerHTML``` och DOM manipulation med ```createElement``` och ```appendChild```? Svara på frågan i en <b>block-kommentar</b> i er JavaScript fil.

### Uppgift 11 (4p)
Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor <u>utförligt</u>:
* Vad är står DOM för och vad är det för något?
* Vad kan vi använda DOM'en till, dvs vilka möjligheter ger den oss?