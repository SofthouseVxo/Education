## Praktisk Omtentamen - Javascript, 40 yrkeshögskolepoäng

### Beskrivning
Detta är en praktiskt omtentamen som skrivs/utförs individuellt på plats i klassrummet.

### Regler:

* All form utav kommunikation online eller offline resulterar i ett underkänt betyg.
* Mobiltelefon skall stängas av innan tentamen börjar, om ni väntar ett viktigt samtal så skall detta meddelas innan tentamensstart.
* Det är ej tillåtet att använda hörlurar.

#### 

* Att besöka andra webbplatser än de fyra som nämns nedan resulterar i ett underkänt på tentamen.
  * [https://www.w3schools.com](https://www.w3schools.com)
  * [https://jquery.com/](https://jquery.com/)
  * Denna sida på Github (i Utloggat läge!)
  * PingPong - ENDAST för att skicka in tentamen.

### Uppgifter och betyg

#### Uppgifter
Tentamen innehåller 10 uppgifter och maxpoäng är **33p**

#### Betygsgränser:
* För ett ***Godkänt(G)*** betyg krävs **21p**
* För ett ***Väl Godkänt(VG)*** betyg krävs **28p**

### Inlämning/Redovisning

Inlämning sker genom att ni skapar en javascript fil som ni döper till **omtentamen1_js_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>.js** och denna skickar ni in på pingpong.

Dvs. om jag som heter <b>Robin Lundin</b> skulle döpt min fil skulle den heta ```tentamen1_js_rob_lun.js```

### Tentamen lämnas in senast **12:00**.

## 

Början med att skapa en ```index.html``` där ni importerar er JavaScript (som ni döpt till vad som nämns ovan) längst ner i ```body```.

# Uppgifter

### Uppgift 1 (3p)


1. Skapa en ny **array** som ni döper till ```items```. ```items``` skall innehålla följande: ```'john', 143, false, null```.

1. Skapa nu en valfri **loop** som itererar över ```items``` och skriver ut varje ```item```i konsolen.

## 

### Uppgift 2 (4p)

1. Skapa ett nytt **objekt** som ni döper till ```computer```. ```computer``` skall bestå av tre **egenskaper** som är ```color```, ```memory``` och ```memoryLeft```.
* ```color``` skall vara satt till ```'black'```
* ```memory``` skall vara satt till ```'512gb'```
* ```memoryLeft``` skall vara satt till ```'154gb'```

2. **Efter** deklarationen av objektet skall ni nu lägga till en **metod** till ```computer```. Denna metod döper ni till ```format```. Anropas ```format``` skall ```computer```'s ```memoryLeft``` ändras till ```'452gb'```.

3. Anropa ```format``` metoden.

## 

### Uppgift 3 (4p)

1. Skapa nu en **function** som tar emot ```items``` från uppgift 1, som <b>parameter</b>. Denna **function** skall **Returnera**:
* ```'is truthy'``` - om <b>något värde</b> i ```items``` är ett truthy värde.
* ```'is falsy'``` - om <b>något värde</b> i ```items``` är ett falsy värde.

* Spara det som returneras i en **variable** som ni döper till ```value```.

## 

### Uppgift 4 (4p)

Skapa en ny div och lägg till denna i DOM-strukturen (inuti ```body```). Denna div skall ha stylingen:
* Background color = blue
* Color = red
* Id = my-button
* Width = 300px
* Height = 200px

Detta gör ni på valfritt sätt **MED JAVASCRIPT** .

### Uppgift 5 (3p)

Om man klickar på diven från uppgift 4 skall följande ske:
* ```'div has been clicked'``` skall skrivas ut i konsolen.
* ```div```'en skall få bakgrundsfärgen svart.

## 

### Uppgift 6 (4p)
* Använd ```XMLHttpRequest``` eller ```fetch``` för att hämta **todos** från <a href="https://jsonplaceholder.typicode.com" target="_blank">https://jsonplaceholder.typicode.com</a>

* För varje todo skapar ni en ```<li>``` med innehållet **title** och **completed**. Lägg till dessa i ```<body>```.

## 

### Uppgift 7 (2p)
Redogör <b>utförligt</b> för vad Document Object Model är och vad som är möjligt när man arbetar med denna.

Svara på frågan i en block-kommentar i er JavaScript fil.

## 

### Uppgift 8 (3p)

När passar det att använda ```innerHTML``` respektive dom manipulation med ```createElement``` och ```appendChild```? Svara på frågan i en <b>block-kommentar</b> i er JavaScript fil. 

OBS! det som efterfrågas är inte en beskrivning av dessa.

## 

### Uppgift 9 (3p)

Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor <u>utförligt med egna ord</u>:
* Vad är jQuery?
* Vad är viktigt att tänka på när man skall använda jQuery, potentiella nackdelar?
* Vad gör koden nedan?
```JavaScript
  $('.button').addClass('primary-button');
```

### Uppgift 10 (3p)
Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor:
* Vad gör koden nedan?
* Varför blir loggen 0mph och inte 70mph?

```
var boat = {
    speed: '0mph',
    initDrivebutton: function(){
        let buttonRef = document.createElement('button');
        buttonRef.id = 'drive';
        buttonRef.innerHTML = 'Press to drive';
        document.body.appendChild(buttonRef);
      
        buttonRef.addEventListener('click', function() {
            this.speed = '70mph';

            console.log(boat.speed);
        });
    },
  }

  boat.initDrivebutton();
```