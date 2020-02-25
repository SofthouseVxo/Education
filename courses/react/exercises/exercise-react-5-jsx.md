## 5. React - JSX

I denna uppgift skall ni få börja jobba med React och skriva JSX.

1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app jsx-playground```

1. ```cd jsx-playground```

1. starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```

1. Börja med att gå till filen ```app.js``` och kika på ```render()``` metoden. Denna metod körs när komponenten skapas och varje gång komponentens state uppdateras. Vi kommer att titta närmre på state & lifecycle hooks senare i kursen. Det vi vill göra nu är att rensa all inuti ```<div className="App">```.

1. Lägg till en ny ```<p>A small text</p>```.

1. I JSX skrivs attribut med camelcase så vill vi exempelvis sätta en ny klass använder vi ```className```. Så vi testar att lägga till ```<p className="my-test-class">A small text</p>```.

1. Och sedan lägger vi till:
```
.my-test-class{
  color: red;
}
```
i ```App.css```. Komponenten importerar ```import './App.css';``` därav förstår react att klassen finns. Vi kommer att kolla närmre på styling längre fram i kursen.

8. Vi vill nu använda en variabel i vår JSX, skapa därför en egenskap i klassen som ni döper till ```smallText``` och ger värdet 'Hello I eat, sleep and think in React'.

9. För att använda denna i vår JSX så använder vi curley braces```{}```. Så i vår JSX ändrar vi nu till ```<p className="my-test-class">{this.smallText}</p>``` och nu skall vi få en p-tagg med nya värdet.

10. För att få en liten inblick hur Babel gör om vår JSX så kopiera nedan kod:
```
function myComp () {
  	const smallText = 'Hello I eat, sleep and think in React';

    return (
      <div className="App">
        <p className="my-test-class">{this.smallText}</p>
      </div>
    );
}
```
Denna koden är för att vi skall få en tydligare output hos Babel, gå nu till [https://babeljs.io/repl](https://babeljs.io/repl) och klista in koden. Studera vad som produceras på högersidan. Detta är resultatet efter att babel har kompilerat vår JSX. Dvs ```React.createElement```. Vi kommer studera komponenter som funktioner senare i kursen så ignorera myComp nu.

11. Gå nu tillbaka till ```App.js``` och prova lägga in ```<p className="my-test-class">{44+234+232}</p>``` och se vad ni får.

12. Nu skall vi rendera något som returneras från en metod i vår klass. Så skapa en metod som ni döper till renderHeader. Denna skall returnera en ```H1``` med texten 'leeeeeeeeroy jenkins!'.

13. Kalla nu på denna metoden i din JSX, ```{this.renderHeader()}```.

14. Skapa nu en variabel inuti ```render()``` metoden, som ni döper till ```customTest``` sätt värdet till valfri sträng. Passa nu med denna i ```renderHeader()``` och hantera så denna visas.

15. Till slut skapar ni en egenskap i klassen som ni döper till ```textController``` denna skall styra vilken text som skall visas, 'leeeeeeeeroy jenkins!' eller er custom text. Detta kontrollerar ni i ```renderHeader()```. Om ```textController``` är true skall custom visas och false 'leeeeeero...'

16. Bonus: Prova nu att lösa detta med en ternary operator.
