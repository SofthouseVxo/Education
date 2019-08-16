## 6.HTML & CSS - Börja styla

1. Skapa en ny katalog.

1. I denna skapar ni en index.html med basstruktur.

1. Lägg till diverse element, buttons, divs, paragrafer etc.

1. Börja med att sätta en ny färg samt bakgrundsfärg på några element med hjälp av inline styling.

1. Flytta samma styling till en intern styling-tagg (inuti ```<head>```).

1. Flytta nu detta till ett externt stylesheet (styles.css) som ni importerar i HTML ```<head>```.

1. Skapa nu 2 olika divar med en paragraf i varje, i paragrafen skriver ni div1 respektive div2.

1. Den första diven sätter ni id="div1", sätt nu bakgrundfärgen till blå i det externa style-dokumentet och koppla stilen till id't.

1. Gör nu likadant fast sätt färgen rosa på div2.

1. När ni fått det att funka så ersätter ni id'n med en class och ge bägge divarna färgen grön.

1. Ändra nu färgen på paragraferna inuti divarna med hjälp av en ```Child Selector``` i css'en. Se föreläsningsmaterialet för att se hur man gör.

1. Skapa nu en ny div, denna skall ha bredden 300px, höjden 200px, backgrundfärg: grön.

1. För att det skall fungera bättre på olika skärmstorlekar och upplösningar är det rekommenderat att använda relativa värden. Prova nu att ange bredd och höjd med hjälp av ```em``` och ```rem``` istället. Läs på [w3schools](https://www.w3schools.com/cssref/css_units.asp) om de olika enheterna.

1. Skapa nu en paragraf, ge den ```id="myPara"```, ge den färgen röd genom att ange detta i din externa style.css, spara och se att färgen ändras till röd.

1. Skapa nu ett nytt CSS-dokument, detta döper ni till second-style.css

1. Importera denna nedanför style.css inuti ```<head>```, ange nu så att ```#myPara``` skall få färgen blå. Spara och se resultat. Vad kan ni dra för slutsatser?

1. Skapa nu en knapp och ge denna färgen röd. Exprimentera med att använda olika selectors (klass, id, element, !important, flera klasser, klass & id). Undersök vilken prioritet de får och när.
