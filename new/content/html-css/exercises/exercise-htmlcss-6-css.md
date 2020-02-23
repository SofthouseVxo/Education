## 6.1 HTML & CSS - Börja styla

1. Skapa en ny katalog.

1. I denna skapar ni en index.html med basstruktur.

1. Lägg till en ```button``` och en paragraf som ligger i den sektion.

1. Börja med att sätta en ny färg samt bakgrundsfärg på dessa element med hjälp av inline styling.

1. Flytta nu samma styling till en intern styling-tagg (inuti ```head```).

1. Kopiera denna styling och lägg i ett externt stylesheet (styles.css) som ni importerar i HTML ```head```.

1. Ändra färgerna i det externa stylesheetet, spara och se vilka som gäller i webbläsaren.

1. Skapa nu 2 olika divar med en paragraf i varje, i paragrafen lägger ni till texten "div1" respektive "div2".

1. Den första diven sätter ni id="div1", sätt nu bakgrundfärgen till blå i det externa style-dokumentet och koppla stilen till id't.

1. Gör nu likadant fast sätt färgen rosa på div2.

1. När ni fått det att funka så ersätter ni id'n med en class och ge bägge divarna färgen grön.

1. Ändra nu färgen på paragraferna inuti divarna med hjälp av en ```Child Selector``` i css'en. Se föreläsningsmaterialet för att se hur man gör.

1. Default så har exempelvis ```body``` elementet en margin på 8px, vanligt är att man sätter margin 0 och padding 0 på allt så att man skall veta vilken utgångspunkt man har. Så lägg nu till i CSS'en att alla element skall ha margin och padding 0.

1. Högerklicka på sidan och välj 'inspect' alternativt 'cmd + shift + c' alternativt öppna developer tools ifrån menyn längst upp till höger (denna kan ligga i en undermeny).

1. Lokalisera all styling som sidan har fått default. I Firefox developer tools måste du gå till settings i devtools och aktivera "show browser styles".

1. Lokalisera att ändra och lägg till styling för några element.

1. Skapa nu en lista med 4 listitems. Gör ni så att alla items hamnar jämte varandra med hjälp av ```display inline```. Vad får de för stil default?

### 6.2 HTML & CSS - Styling fortsättning

1. Skapa nu en sektion, denna skall ha bredden 300px, höjden 200px, backgrundfärg: grön.

1. För att det skall fungera bättre på olika skärmstorlekar och upplösningar är det rekommenderat att använda relativa värden. Prova nu att ange bredd och höjd med hjälp av ```em``` och ```rem``` istället. Läs på [w3schools](https://www.w3schools.com/cssref/css_units.asp) om de olika enheterna.

1. Skapa nu en paragraf, ge den ```id="my-para"```, ge den färgen röd genom att ange detta i din externa ```style.css```, spara och se att färgen ändras till röd.

1. Skapa nu ett nytt CSS-dokument, detta döper ni till second-style.css

1. Importera ```second-style.css``` nedanför ```style.css``` inuti ```head```. Ange nu så att ```#my-para``` skall få färgen blå i ```second-style.css```. Spara och se resultat. Vad kan ni dra för slutsatser?

1. Element kan ärva styling från sina föräldrar. Skapa nu en div inuti en div som ligger inuti en div.

1. Ge den första ```id="parent"``` den andra "child" och  den tredje "grandchild". Inuti grandchild skapar ni en paragraf. Ändra färgen på paragrafen genom att ange detta för ```#parent``` i css'en. Vad kan du dra för slutsatser? Vad händer om du anger en ny färg i ```#child```?

1. Ange hur mycket specificeringspoäng nedanstående styling ger: <br>```.myClass { padding: 15px; }``` <br> ```* { padding: 15px; }``` <br> ```#myDiv.myClass { padding: 15px; }``` <br> ```h5 { padding: 15px; }``` <br> ```h6 { padding: 15px !important}```

1. Skapa nu en knapp och ge denna färgen röd. Exprimentera med att använda olika selectors (klass, id, element, !important, flera klasser, klass & id). Undersök vilken prioritet de får och när.

1. Skapa en div med innehållet "hello world" som ni ger bredden 100% och höjden 100% samt bakgrundsfärg grön. Spara och se resultatet i webbläsaren.

1. Ange nu istället höjden till ```100vh```. Spara och se resultatet.

1. Skapa en ny div med innehållet "hello space" som ni ger bredden 100% och höjden 100vh samt bakgrundsfärg blå. Spara och se resultat (scrolla ner på sidan).

1. Nu skapar ni en ```section``` som ni ger bredden 800px och höjden 600px samt en border som är ```1px solid red```.

1. Inuti ```section``` skapar ni en div som ni ger bredden 50% och höjden 300px samt en bakgrundsfärg som är rosa. Vilken bredd får den? Vad kan vi dra för slutsatser kring %-enheten?

### W3schools övningar
* <a href="https://www.w3schools.com/html/exercise.asp?filename=exercise_html_styles1" target="_blank">Styles ex. 1-6</a>
* <a href="https://www.w3schools.com/html/exercise.asp?filename=exercise_html_css1" target="_blank">CSS ex. 1-6</a>
* <a href="https://www.w3schools.com/html/exercise.asp?filename=exercise_html_id1" target="_blank">Id ex. 1-2</a>
* <a href="https://www.w3schools.com/html/exercise.asp?filename=exercise_html_classes1" target="_blank">Classes ex. 1-3</a>

### Extrauppgifter - Skapa nedanstående med HTML & CSS

![extra1](../media/extra1.png "extra exercise 1")
<br>
![extra2](../media/extra2.png "extra exercise 2")
<br>
![extra3](../media/extra3.png "extra exercise 3")
