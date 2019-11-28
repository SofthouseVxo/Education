## Praktisk Tentamen - Javascript med jQuery , 25 yrkeshögskolepoäng

### Beskrivning
Detta är en praktiskt tentamen som skrivs/utförs individuellt på plats i klassrummet.

### Regler:

* All form utav kommunikation online eller offline resulterar i ett underkänt betyg.
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
Tentamen innehåller 11 uppgifter och maxpoäng är **42p**

#### Betygsgränser:
* För ett ***Godkänt(G)*** betyg krävs **30p**
* För ett ***Väl Godkänt(VG)*** betyg krävs **36p**

### Inlämning/Redovisning

Inlämning sker genom att ni skapar en javascript fil som ni döper till **tentamen1_js_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>.js** och denna skickar ni in på pingpong.

Dvs. om jag som heter <b>Robin Lundin</b> skulle döpt min fil skulle den heta ```tentamen1_js_rob_lun.js```

### Tentamen lämnas in senast **17:00**.

## 

### Uppgift 1 (1p)

Skapa en ```index.html``` samt en ```index.js``` fil:

```index.html``` skall innehålla:
* basstruktur = dvs de grundläggande element som behövs för en html sida
* titel = ```tentamen1_js_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>```
* En **import** av ```index.js``` längst ner i ```body```.

## 

### Uppgift 2 (5p)

1. Skapa en ny ```array``` innehållande 4st ```strings```. Denna döper ni till <b>groceries</b> och innehåller följande: 'mjöl', 'potatis', 'äpple' och 'ägg'.

1. Skapa nu en valfri ```loop``` som itererar över <b>groceries</b> och skriver ut varje vara i konsolen.

## 

### Uppgift 3 (1p)

Skapa en ny ```array``` som ni döper till <b>prices</b>. Denna skall innehålla 4st ```numbers``` detta är priserna varorna som är: 220, 55, 99, 123.

## 

### Uppgift 4 (6p)

Ni har 500kr med er till butiken och vill nu veta om ni har råd med varorna.

1. Skapa nu en ```function``` som tar emot <b>prices</b> som <b>parameter</b>. Denna ```function``` skall **Returnera**:
* ```true``` - om ni har råd att köpa <b>samtliga</b> varor.
* ```false``` - om ni inte har tillräckligt med pengar.

* Spara det som returneras i en ```variable``` som ni döper till <b>canAfford</b>.

## 

### Uppgift 5 (5p)

Skapa en ny knapp (button) och lägg till denna i DOM-strukturen (inuti ```body```). Detta gör ni på valfritt sätt med **JavaScript**.
* Texten i knappen skall vara 'press me'. 
* Om man klickar på knappen skall 'button has been clicked' skrivas ut i konsolen.

## 

### Uppgift 6 (4p)

Gör nu så att knappen som ni skapade i Uppgift 5 får följande:
* Background color = 'blue'
* Color = 'red'
* Id = 'my-button'

<b>OBS! Detta skall göras i JavaScript koden!</b>

## 

### Uppgift 7 (5p)

1. Skapa ett nytt ```object``` som ni döper till <b>boat</b>. <b>boat</b> skall ha 2 egenskaper(```Properties```) som är ```color``` och ```speed```.
* ```color``` = 'green'
* ```speed``` = 75

2. Efter att ni har deklarerat detta objekt skall ni nu lägga till en metod (method) till <b>boat</b>. Denna metod döper ni till <b>drive</b>. <b>drive</b> skall innehålla funktionalitet för att skriva ut <b>boat's</b> color i konsolen.

3. Anropa <b>drive</b>

## 

### Uppgift 8 (4p)
Berätta utförligt om AJAX:
* Vad det står AJAX för?
* Vad är det? 
* Hur använder man det med JavaScript (vilket objekt använder vi, vilka event finns osv) Går även att skriva kod här för att förklara de olika delarna.

Svara på frågan MED EGNA ORD i en <b>block-kommentar</b> i er JavaScript fil.

## 

### Uppgift 9 (3p)
Vad blir **result** i koden nedan? Varför blir det så och inte ```81```? Vad behöver vi ändra för att det skall funka och <u>varför</u>? Svara på frågan MED EGNA ORD i en <b>block-kommentar</b> i er JavaScript fil.

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

let result = calc(10, 23);
```

## 

### Uppgift 10 (4p)

Skapa en ny <b>Block-kommentar</b> där ni svarar MED EGNA ORD på följande frågor <u>utförligt</u>:
* Vad är jQuery, och dess syfte?
* Vad är viktigt att tänka på när man skall använda jQuery, potentiella nackdelar?
* Vad gör koden nedan?
```JavaScript
  $('button').addClass('primary-button')
```

## 

### Uppgift 11 (4p)

När passar det att använda ```innerHTML``` respektive dom manipulation med ```createElement``` och ```appendChild```? Svara på frågan i en <b>block-kommentar</b> i er JavaScript fil. 