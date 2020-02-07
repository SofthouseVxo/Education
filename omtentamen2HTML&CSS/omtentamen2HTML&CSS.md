## Praktisk Omtentamen - HTML5 och CSS, 25 yrkeshögskolepoäng

### Beskrivning
Detta är en praktiskt tentamen som skrivs/utförs individuellt på plats i klassrummet.

### Regler:

* All form utav kommunikation online eller offline resulterar i ett underkänt betyg.
* Mobiltelefon skall stängas av innan tentamen börjar, om ni väntar ett viktigt samtal så skall detta meddelas innan tentamensstart.
* Det är ej tillåtet att använda hörlurar.

#### 

* Att besöka andra webbplatser än det 3 som nämns nedan resulterar i ett underkänt på tentamen.
  * [https://www.w3schools.com](https://www.w3schools.com)
  * [https://getbootstrap.com](https://getbootstrap.com/)
  * Denna sida på Github (i Utloggat läge!)
  * PingPong - ENDAST för att skicka in tentamen.

### Uppgifter och betyg

#### Uppgifter
Tentamen innehåller 9 uppgifter och maxpoäng är **21p**

#### Betygsgränser:
* För ett ***Godkänt(G)*** betyg krävs **14p**
* För ett ***Väl Godkänt(VG)*** betyg krävs **17p**

Man kan få poäng på påbörjade uppgifter.

### Inlämning/Redovisning

Inlämning sker genom att ni skapar ett repo på github som ni döper till **omtentamen2_html_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>** där ni lägger till filerna som ni skapade på tentamen (glöm inte att pusha slutgiltiga koden).

### Tentamen lämnas in senast **11:00**.

## Uppgifter för betyget Godkänt (24p)

### Uppgift 1 (2p)
Skapa en ny katalog innehållande följande filer:
* index.html
* style.css

Skapa nu nedan i index.html:
* basstruktur = dvs de grundläggande element som behövs för en html sida
* titel = ```tentamen1_html_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>```
* länka till style.css
* meta-taggar för (author, description & charset)

## 

### Uppgift 2 (3p)
* Skapa nu en navigationsmeny som består utav en lista med 3 hyperlänkar som leder till webbsidorna:
  * https://github.com
  * https://getbootstrap.com
  * https://www.w3schools.com

* Denna navigation skall se ut som:
  * Fig.1 om skärmen är 600px eller större
  * Fig.2 om skärmen är 599px eller mindre.

Detta skall lösas med media queries.

Fig.1<br>
<img src="media/menu1.png" alt="menu1" width="700"/>

Fig.2<br>
<img src="media/menu2.png" alt="menu2" width="400"/>

## 

### Uppgift 3 (2p)
* Skapa tabellen som i fig.3 (med samma styling).
* Tänk på att använda rätt semantiska element.

fig.3<br>
<img src="media/table.png" alt="drawing" width="300"/>

## 

### Uppgift 4 (2p)
* Kopiera nedan html-kod och styla denna så att den ser ut som fig.4
* Att färger och textstorlek inte ser ut **exakt** som på bilden är mindre viktigt.

```HTML
<div>
  <div>
    <h1>Above</h1>
  </div>
  <div>
    <h1>Under</h1>
  </div>
</div>
```

fig.4<br>
<img src="media/position.png" alt="positioning" width="700"/>

## 

### Uppgift 5 (2p)
Lägg till bootstrap på valfritt sätt och lägg sedan till:
* En ```Button``` utav typen "primary".
* En ```Spinner```.

## 

### Uppgift 6 (2p)
Skapa en rubrik med innehållet ```SEO```. Under denna skapar nu en **ordnad** lista med 6st list-items. 
Dessa items skall innehålla 6 olika åtgärder man kan ta för att sökmotor-optimera (SEO) sin sida 
(meta taggar räknas som 1 åtgärd).


## 

### Uppgift 7 (2p)
Skapa en rubrik med innehållet **SEO och nyckelord** och besvara följande frågor i en paragraf direkt under rubriken.
* Hur skall man tänka när man väljer sina nyckelord för att ranka högre på Google?

## 

### Uppgift 8 (2p)
Skapa en rubrik med innehållet **Responsiv webbdesign** och besvara följande frågor i en paragraf direkt under rubriken.
* Vad innebär responsiv webbdesign och varför är det viktigt?
* Vad innebär mobile first och varför är det vanligt idag?
* Det finns 2 ställen man kan ange/använda media queries på, vilka är dessa?

## 

### Uppgift 9 (4p)
Skapa en rubrik med innehållet **Review** och granska koden nedan och indentifiera fel och saker som bör göras annorlunda. Skriv dessa i en paragraf direkt under rubriken (det finns fler än 4 fel).

**Glöm inte att motivera varför.**

```
<!DOCTYPE html>
<head>
<style>
  body {
    background-color: powderblue;
  }
  h3 {
    color: blue;
  }
  p {
    color: red; 
    position: absolute;
    top: 0px; 
    bottom: 0px;
  }  
</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="keywords" content="John Doe, snickare, möbler, trä, stockholm">
<title>John Does möbelsnickeri</title>
</head>
  <body>
    <div id="nav">
      <ul>
        <a href="file:///Users/johnDoe/Desktop/index.html"><li class="list-item">Startsida</li></a>  
        <a href="file:///Users/johnDoe/Desktop/about.html"><li class="list-item">Om oss</li></a>
        <a href="file:///Users/johnDoe/Desktop/contact.html"><li class="list-item">Kontakt</li></a>
      </ul>
    </div>

  <section class="intro">
    <h1>Hej och välkomna!</h1>
    <p>John Doe's möbelsnickeri ligger i hjärtat av Småland. Klicka runt på sidan för att utforska vårt utbud.<p>
    <img width="300px" height="400px" src="image.png">
  </section>

    <form>
      Namn:<br>
      <input type="text" name="name"><br>
      Email:<br>
      <input type="text" name="lastname"><br>
      Ämne:<br>
      <textarea name="subject" rows="4" cols="50">
      </textarea> 
    </form>
    <footer style="color: green;">
      <div>Kontakta oss på:<span>Tel: 0470-99999</span></div>
    </footer>
<body>
```
# GLÖM INTE ATT COMMITA OCH PUSHA INNAN INLÄMNING!