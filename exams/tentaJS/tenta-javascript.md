## Praktisk Tentamen - Javascript, 40 yrkeshögskolepoäng

### Beskrivning
Detta är en praktiskt tentamen som skrivs/utförs individuellt på plats i klassrummet.

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
Tentamen innehåller 11 uppgifter och maxpoäng är **34p**

#### Betygsgränser:
* För ett ***Godkänt(G)*** betyg krävs **22p**
* För ett ***Väl Godkänt(VG)*** betyg krävs **28p**

Man kan få poäng på påbörjade uppgifter.

### Inlämning/Redovisning

Inlämning sker genom att ni skapar en JavaScript fil som ni döper till **tentamen1_js_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>.js** och denna skickar ni in på pingpong.

Dvs. om jag som heter <b>Robin Lundin</b> skulle döpt min fil till ```tentamen1_js_rob_lun.js```

### Tentamen lämnas in senast **12:00**.

## 

Börja med att skapa en ```index.html``` där ni importerar er JavaScript (som ni döpt till vad som nämns ovan) längst ner i ```body```. <b>Detta är det enda ni skall göra på html-sidan, dvs. allt innehåll som skapas och ändras görs i JavaScript-filen.</b>

## 

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

### Uppgift 3 (4p)

Skapa en ny knapp ```<button>``` och lägg till denna på sidan. Detta skall göras dynamiskt med **JavaScript**.
* Innehållet i knappen skall vara ```Press me!```. 
* Om man klickar på knappen skall ```'button has been clicked!'``` skrivas ut i på sidan (i DOM'en dvs. ingen alert eller console log eller liknande).

## 

### Uppgift 4 (2p)

Skapa en ny <b>funktion</b>, om man anropar denna skall följande ske:
* Knappen från uppgift 3 skall få bakgrundsfärgen blå.
* ```body``` skall få padding 50px.
* Knappen från uppgift 3 skall få **klassen** ```custom-button```.

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

När passar det att använda ```innerHTML``` respektive DOM manipulation med ```createElement``` och ```appendChild```? Svara på frågan i en <b>block-kommentar</b> i er JavaScript fil. 

OBS! det som efterfrågas är inte en beskrivning av dessa.

## 

### Uppgift 8 (4p)
* Använd valfritt tillvägagångssätt för att hämta **3st todos** från <a href="https://jsonplaceholder.typicode.com" target="_blank">https://jsonplaceholder.typicode.com</a>

* För varje todo skapar ni en ```<li>``` med innehållet **title** och **completed**. Lägg till dessa i ```<body>```.

## 

### Uppgift 9 (3p)

Skapa en ny <b>Block-kommentar</b> där ni svarar på följande frågor <u>utförligt med egna ord</u>:
* Vad är viktigt att tänka på när man skall använda jQuery, potentiella nackdelar?
* Vad gör koden nedan?
```JavaScript
  $('button').addClass('primary-button');
```

## 

### Uppgift 10 (3p)
Lägg till raden ```console.log('body element:', document.getElementsByTagName('body')[0]);``` överst i er JavaScript-fil. <br/> <br/>
Om vi flyttar importen av JavaScript filen i ```index.html``` till ```<head>``` så kommer loggen att visa <br/>```body element: undefined```.

* Varför blir det så?
* Lägg till funktionalitet i JavaScript filen så att loggen visar ```<body>``` elementet istället för ```undefined```.

## 

### Uppgift 11 (3p)
* Vad blir innehållet i **variabeln** ```result``` i koden nedan? 

* Funktionen skall **returnera** 371. 

* Vad behöver vi ändra i ```calc()``` för att uppnå detta och <u>varför</u>? Svara på frågan <b>utförligt</b> i en <b>block-kommentar</b> i er JavaScript fil.

```
var val3 = 10;

function calc(val1, val2){
  
  let sum = val1 + val2 + val3;

  var val3 = 35;

  for(let i = 0; i < 3; i++){
    val3 += i;
  }

  return sum + val3;
}

let result = calc(100, 223);
```