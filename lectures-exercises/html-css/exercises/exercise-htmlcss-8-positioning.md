## 8.HTML & CSS - Positioning

1. Skapa en ny katalog.

1. I denna skapar ni en index.html med basstruktur.

1. Skapa ett styles.css dokument som ni lägger i samma katalog som index.html.

1. Importera styles.css i ```head``` index.html.

1. Skapa en ny ```section``` denna sätter ni till bredden 800px, höjden 600px, marginal 40px samt en border som är ```1px solid black```.

1. Inuti section skapar ni en ```div```, ge denna id "box1" Sedan sätter ni till bredden 150px, höjden 150px, ```1px solid red```.

1. Inuti section skapar ni en ```div```, ge denna id "box2" Sedan sätter ni till bredden 120px, höjden 120px, ```1px solid blue```.

1. Inspektera dem i webbläsaren och se vilken css display webbläsaren har gett dem default.

1. Ge nu box1 ```float:left;```. Spara och se resultat.

1. Ge nu även box2 ```float:left;```. Spara och se resultat.

1. Ge nu box1 ```float:right;```. Spara och se resultat. Vad kan ni dra för slutsatser? diskutera med din granne.

1. Ta bort alla floats. Prova nu att ge box1 ```position: absolute;```.

1. Sätt nu ```margin: 20px 20px; ``` på box1. Spara och se resultat.

1. Sätt nu ```margin: 70px 80px; ``` och ```position: absolute;``` och ```background: #ff00ff;``` på box2. Spara och se resultat.

1. Ge box 1 ```background: #0000ff;```. Spara och se resultat. Vilken box ligger överst?

1. Ge nu box1 ```z-index: 2``` och box2 ```z-index: 1;```. Spara och se resultat. Vilken box ligger överst? Vad kan ni dra för slutsatser? diskutera med din granne.

1. Ta nu bort z-index och position och margin. Prova att sätta box1 till ```position:fixed; bottom: 0;``` och box2 till ```position: relative;```.

1. Återskapa layouterna som visas på bilderna nedan. Dessa skall ligga under(inte bakom) varandra.

![Positioning exercise 1](new/lectures-exercises/media/exercises-images/position1.png "Positioning exercise 1")
![Positioning exercise 2](new/lectures-exercises/media/exercises-images/position2.png "Positioning exercise 2")
![Positioning exercise 3](new/lectures-exercises/media/exercises-images/position3.png "Positioning exercise 3")
![Positioning exercise 4](new/lectures-exercises/media/exercises-images/position4.png "Positioning exercise 4")

19. Skapa nu en div som alltid skall sitta fast i botten av sidan, en s.k. sticky footer. Detta innebär att även om du scrollar på sidan så skall denna sitta i fast i botten.

### Centering
#### Ett ständigt problem utvecklare stöter på är att centrera saker vertikalt och horisontellt.

1. Skapa en ny katalog.

1. I denna skapar ni en index.html med basstruktur.

1. Skapa ett styles.css dokument som ni lägger i samma katalog som index.html.

1. Importera styles.css i ```head``` index.html.

1. Prova på samtliga exempel på <a href="https://css-tricks.com/centering-css-complete-guide/" target="_blank">CSS tricks centering</a>

### W3schools övningar
* <a href="https://www.w3schools.com/css/exercise.asp?filename=exercise_positioning1" target="_blank">Positioning ex. 1-5</a>
* <a href="https://www.w3schools.com/css/exercise.asp?filename=exercise_display_visibility1" target="_blank">Display ex. 1-4</a>
* <a href="https://www.w3schools.com/css/exercise.asp?filename=exercise_overflow1" target="_blank">Overflow ex. 1-3</a>
* <a href="https://www.w3schools.com/css/exercise.asp?filename=exercise_align1" target="_blank">Align ex. 1-2</a>
