## Praktisk Omtentamen nr 2 - Javascript men jQuery, 25 yrkeshögskolepoäng

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
Tentamen innehåller 9 uppgifter och maxpoäng är **29p**

#### Betygsgränser:
* För ett ***Godkänt(G)*** betyg krävs **19p**
* För ett ***Väl Godkänt(VG)*** betyg krävs **24p**

### Inlämning/Redovisning

Inlämning sker genom att ni skapar en javascript fil som ni döper till **omtentamen1_js_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>.js** och denna skickar ni in på pingpong.

Dvs. om jag som heter <b>Robin Lundin</b> skulle döpt min fil skulle den heta ```tentamen1_js_rob_lun.js```

### Tentamen lämnas in senast **12:00**.

## 

Början med att skapa en ```index.html``` där ni importerar er JavaScript (som ni döpt till vad som nämns ovan) längst ner i ```body```.

# Uppgifter

### Uppgift 1 (2p)

Skapa en **Array** som ni döper till ```prices```. Denna skall innehålla 4st nummer (220, 55, 99, 123).

## 

### Uppgift 2 (4p)

Ni har 500kr med er till butiken och vill nu veta om ni har råd med varor som har priserna från uppgift 1.

1. Skapa en **funktion** som tar emot ```prices``` som <b>parameter</b>. Denna **funktion** skall **returnera**:
* ```true``` - om ni har råd att köpa <b>samtliga</b> varor.
* ```false``` - om ni inte har tillräckligt med pengar.

* Spara det som **returneras** i en **variabel** som ni döper till <b>canAfford</b>.

## 

### Uppgift 3 (5p)

Skapa en ny knapp ```<button>``` och lägg till denna på sidan. Detta skall göras dynamiskt med **JavaScript**.
* Innehållet i knappen skall vara ```Press me!```. 
* Om man klickar på knappen skall ```'button has been clicked!'``` skrivas ut i på sidan (i DOM'en dvs. ingen alert eller console log eller liknande).

## 

### Uppgift 4 (3p)

Skapa en ny <b>funktion</b>, om man anropar denna skall följande ske:
* Knappen från uppgift 3 skall få bakgrundsfärgen blå.
* ```body``` skall få padding 50px.
* Knappen från uppgift 3 skall få **klassen** ```custom-button```.

## 

### Uppgift 5 (4p)

1. Skapa ett nytt **objekt** som ni döper till ```computer```. ```computer``` skall bestå av två **egenskaper** som är ```ram``` och ```ssd```.
* ```ram``` skall vara satt till ```8```
* ```ssd``` skall vara satt till ```256```

2. **Efter** deklarationen av objektet skall ni nu lägga till en **metod** till ```computer```. Denna metod döper ni till ```upgrade```. Anropas ```upgrade``` skall ```computer```'s ```ram``` öka med ```8```.

3. Anropa <b>upgrade</b>.

## 

### Uppgift 6 (2p)
Skapa en ny <b>Block-kommentar</b> där ni svarar på vad som händer om vi flyttar importen av javascript filen i HTML-sidan till ```head``` istället för ```body```? Varför blir det så och vad kan vi göra för att fixa det?

## 

### Uppgift 7 (3p)
Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor <u>utförligt med egna ord</u>:

* Vad är det AJAX? 
* Hur använder man det med JavaScript (vilket objekt använder vi, vilka event finns osv) Går även att skriva kod här för att förklara de olika delarna.

Svara på frågan i en <b>block-kommentar</b> i er JavaScript fil.

## 

### Uppgift 8 (3p)
Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor <u>utförligt med egna ord</u>:
* Vad är viktigt att tänka på när man skall använda jQuery, potentiella nackdelar?
* Vad gör koden nedan?
```JavaScript
  $('div').addClass('primary-divs');
```

### Uppgift 9 (3p)
Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor:
* Vad gör koden nedan?
* Varför blir loggen 10mph och inte 70mph?

```
let speed = 50;

function createBoat(){
  let speed = 10;
  let buttonRef = document.createElement('button');
  buttonRef.id = 'drive';
  buttonRef.innerHTML = 'Press to drive';
  document.body.appendChild(buttonRef);

  buttonRef.addEventListener('click', function() {
    this.speed = '70mph';
    console.log(speed);
  });
}

createBoat();
```
