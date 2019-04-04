## React State, Events and Lifecycles

I denna uppgift skall ni få börja jobba med React och uppdatera state, använda events och undersöka lifecycle methods.

1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app state-testing```

1. ```cd state-testing```

1. starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```

1. Börja med att gå till App.js och rensa all inuti ```<div className="App">```.

1. I constructorn vill vi nu sätta vårt initial state, detta gör vi med
```
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hans'
    };
  }
```

7. Varje gång vi uppdaterar vårt state kommer ```render()``` att anropas och vårt UI uppdateras. För att sätta ett nytt state så använder vi ```this.setState()``` och passar in det nya statet.

8. Vi skall nu uppdatera vårt state om vi klickar på en knapp. Skapa en button i er JSX och inuti den anger ni ```onClick={this.setState({name: 'Greta'})}```. Testa och kör, ni kommer att se att ni får ett fel. Detta är för att vi kallar på setState vilket triggar render som sedan sätter state osv.

9. Vi behöver istället lägga denna functionaliteten i en separat metod i klassen. Skapa en metod som ni döper till ```handleClick```. Detta skall ha tillgång till ```this``` som skall vara klassen. (Kolla på föreläsningsmaterialet). Inuti denna lägger ni till:
```
this.setState({
  name: 'Greta'
});
```

10. Och för att kalla på denna ändrar vi i button till ```onClick={this.handleClick}``` och för att se förändringen så renderar vi ut ```{this.state.name}``` på sidan.

11. Istället för att den bara skall kunna byta en gång så ersätter ni ```handleClick``` med en ```toggle``` där ni skall toggla mellan Hans och Greta. Här kan ni använda en array, en boolean etc. Var kreativa!

12. Skapa nu en ny komponent som ni döper till ```InsideAppComponet.js```.

13. Denna renderar ni i ```App.js``` ```<InsideAppComponent/>```

13. Till denna skall ni skicka in ```toggle```metoden som props. (Kolla på föreläsning/exempel);

14. Ni skapar nu en ny knapp i ```InsideAppComponent``` och när man trycker på denna skall den anropa ```toggle``` metoden som vi tagit emot i props.

15. Nu kan ni ta bort knappen som ni hade i ```App.js```

16. Istället för att toggla mellan de två namnen skall ni nu ange ett namn som ni skickar ifrån ```InsideAppComponent``` som en parameter till ```toggle```. Denna parameter tar ni emot i toggle och sätter ett nytt state.

17. Gå nu till [https://reactjs.org/docs/react-component.html](https://reactjs.org/docs/react-component.html) och kolla in lifecycle hooks(methods). Prova på att använda minst 5st och skriv console.logs i dem för att se när de anropas.

18.
* Skapa 3 nya komponenter (döp till valfritt).
* Rendera samtliga i App.js.
* I App.js skapar ni en metod som sätter ett nytt state av någon form.
* Detta state skall passas in som props i samtliga 3 komponenter.
* Metoden som sätter ett nytt state skall passas in som props i alla 3 komponeter.
* Alla tre skall ha någon typ av event (onClick, onKeyPress, onBlur etc. [https://reactjs.org/docs/events.html](https://reactjs.org/docs/events.html)). Vi detta event skapp ni kalla på metoden som tagits emot som props.
* Statet, som ni tagit emot som props skall renderas i alla komponenter.

Förväntat resultat, om eventet sker i någon av komponenterna så kommer samtliga andra att uppdateras, vi har nu lyft upp statet från komponenterna till App.js. Logga i consollen och undersök, reflektera även över hur detta förhåller sig till Angular och deras Outputs.
