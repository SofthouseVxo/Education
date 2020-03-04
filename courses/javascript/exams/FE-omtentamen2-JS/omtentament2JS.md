## Praktisk Omtentamen 2 - Javascript, 40 yrkeshögskolepoäng

### Beskrivning
Detta är en praktiskt omtentamen som skrivs/utförs individuellt på plats i klassrummet.

### Regler:

* All form av kommunikation online och offline resulterar i ett underkänt betyg.
* Mobiltelefon skall stängas av innan tentamen börjar, om ni väntar ett viktigt samtal så skall detta meddelas innan tentamensstart.
* Det är ej tillåtet att använda hörlurar.

#### 

* Att besöka andra webbplatser än det 4 som nämns nedan resulterar i ett underkänt på tentamen.
  * [https://www.w3schools.com](https://www.w3schools.com)
  * [https://jquery.com/](https://jquery.com/)
  * Denna sida på Github (i Utloggat läge!)
  * PingPong - ENDAST för att skicka in tentamen.

### Uppgifter och betyg

#### Uppgifter
Tentamen innehåller 11 uppgifter och maxpoäng är **36p**

#### Betygsgränser:
* För ett ***Godkänt(G)*** betyg krävs **24p**
* För ett ***Väl Godkänt(VG)*** betyg krävs **30p**

Man kan få poäng på påbörjade uppgifter.

### Inlämning/Redovisning

Inlämning sker genom att ni skapar en JavaScript fil som ni döper till **omtentamen2_js_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>.js** och denna skickar ni in på pingpong.

Dvs. om jag som heter <b>Robin Lundin</b> skulle döpt min fil till ```omtentamen2_js_rob_lun.js```

### Tentamen lämnas in senast **12:00**.

## 

Börja med att skapa en ```index.html``` där ni importerar er JavaScript (som ni döpt till vad som nämns ovan) längst ner i ```body```. <b>Detta är det enda ni skall göra på html-sidan, dvs. allt innehåll som skapas och ändras görs i JavaScript-filen.</b>


## Uppgifter

### Uppgift 1 (3p)

1. Skapa en ny ```array``` innehållande 5st ```booleans```. Denna döper ni till <b>guesses</b> och innehåller följande: ```true```, ```true```, ```false```, ```true```, ```true```.

1. Skapa nu en valfri ```loop``` som itererar över <b>guesses</b> och skriver ut 'the guess is' + ```gissningen```. (så första varvet skall logga 'guess is true');

## 


### Uppgift 2 (4p)

Om en gissning är ```true``` betyder detta att man gissade rätt och då får man 1 poäng.

1. Skapa nu en ```function``` som tar emot <b>guesses</b> som ```parameter```. Denna ```function``` skall **returnera** hur många poäng man får beroende på antal korrekta gissningar. 

* Dvs om arrayen som skickas in består av ```true, true, false``` så skall ```2``` returneras.

* Spara det som returneras i en ```variable``` som ni döper till <b>points</b>.

## 

### Uppgift 3 (4p)

Skapa en ny ```<p>``` och lägg till denna i DOM-strukturen (inuti ```body```). Denna skall vara enligt nedan:
* bakgrundsfärg = blå
* färg = röd
* id = my-para
* innehåll = 'some random text!'

Detta gör ni på valfritt sätt **MED JAVASCRIPT** .

## 

### Uppgift 4 (3p)

Om man klickar på paragrafen ni skapade i  uppgift 3 skall följande ske:
* ```'text has been clicked'``` skall skrivas ut i konsolen.
* paragrafen skall få bakgrundsfärgen svart istället för blå.
* innehållet i paragrafen skall ändras till 'I have been clicked'.

## 

### Uppgift 5 (4p)

1. Skapa ett nytt **objekt** som ni döper till ```boat```. ```boat``` skall bestå av 2 **egenskaper** som är ```color``` och ```speed```.
* ```color``` skall vara satt till ```'green'```
* ```speed``` skall vara satt till ```64```

2. **Efter** deklarationen av objektet skall ni nu lägga till en **metod** till ```boat```. Denna metod döper ni till ```rePaint```. Anropas ```rePaint``` skall ```boat```'s ```color``` ändras till ```'red'```.

3. Anropa <b>rePaint</b>.

## 

### Uppgift 6 (2p)
Redogör <b>utförligt</b> för vad Document Object Model är och vad som är möjligt när man arbetar med denna.

## 

### Uppgift 7 (3p)

Vad finns det för för/nackdelar med att använda ```innerHTML``` för att lägga till element i DOM'en istället för ```createElement``` och ```appendChild```.

## 

### Uppgift 8 (4p)
* Nu skall ni använda AJAX. 
* Använd valfritt tillvägagångssätt för att göra en request till <a href="https://api.softhouse.rocks/users" target="_blank">https://api.softhouse.rocks/users</a>. Denna endpoint skickar tillbaka en lista med användare.

* Skapa en onumrerad lista ```<ul>``` och för varje användare skapar ni en ```<li>``` innehållande användarens namn.
* Lägg till listan i ```<body>```.
## 

### Uppgift 9 (3p)

Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor <u>utförligt med egna ord</u>:
* Vad är viktigt att tänka på när man skall använda jQuery, potentiella nackdelar?
* Vad gör koden nedan?
```JavaScript
  $('div').addClass('random-class');
```

## 

### Uppgift 10 (3p)
Lägg till raden ```console.log('body element:', document.getElementsByTagName('body')[0]);``` överst i er JavaScript-fil. <br/> <br/>
Om vi flyttar importen av JavaScript filen i ```index.html``` till ```<head>``` så kommer loggen att visa <br/>```body element: undefined```.

* Varför blir det så?
* Lägg till funktionalitet i JavaScript filen så att loggen visar ```<body>``` elementet istället för ```undefined```.

## 

### Uppgift 11 (3p)
Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor:
* Vad gör koden nedan?
* Varför blir loggen 0mph och inte 100mph?

```
var car = {
    speed: '0mph',
    initDrivebutton: function(){
        let buttonRef = document.createElement('button');
        buttonRef.id = 'drive';
        buttonRef.innerHTML = 'Press to drive';
        document.body.appendChild(buttonRef);
      
        buttonRef.addEventListener('click', function() {
            this.speed = '100mph';

            console.log(car.speed);
        });
    },
  }

  car.initDrivebutton();
```