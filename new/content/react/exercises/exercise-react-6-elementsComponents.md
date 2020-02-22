<!doctype html>
<html>
	<head>
		<title>React Exercises</title>## 6. React Components

I denna uppgift skall ni få börja jobba med att skapa olika React components.

1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app components-playground```

1. ```cd components-playground```

1. starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```

1. Börja med att gå till filen ```app.js``` och kika på ```render()``` metoden. Denna metod körs när komponenten skapas och varje gång komponentens state uppdateras. Vi kommer att titta närmre på state & lifecycle hooks senare i kursen. Det vi vill göra nu är att rensa all inuti ```<div className="App">```.

1. Vi skall börja med att skapa en komponent som en funktion. Komponenter som funktioner har inte all funktionalitet som de med klasser och användas oftast om man inte har något state eller logic och endast skall rendera något. Vi skapar nu en mapp inuti ```/src``` som ni döper till 'components'. I denna skapar ni en fil som ni döper till ```SimpleFuncComponent.js``` (komponenter skall alltid börja med stor bokstav) ni kan alternativt döpa den med ändelsen .jsx men filen kommer byggas om till en .js fil till slut.

1. I den nya filen skriver (ej kopiera, för lite muskelminne) ni följande:

```
import React from 'react';

function SimpleFuncComponent () {
    return (
      <div >
        <p>Hello Function Component</p>
      </div>
    );
}

export default SimpleFuncComponent;
```

7. För att denna skall renderas behöver vi lägga till en i en annan komponents return (render). Så i ```App.js``` lägger vi till (glöm inte att importera SimpleFuncComponent, i JSX'n skall komponenten alltid börja med stor bokstav):
```
<div className="App">
  <SimpleFuncComponent/>
</div>
```
Nu skall er komponent visas.

8. För att kunna hantera state i en komponent behöver den vara en klass. I components mappen skapar ni en fil som ni döper till ```SimpleClassComponent.js``` ni kan alternativt döpa den med ändelsen .jsx men filen kommer byggas om till en .js fil till slut. I denna skriver ni:
```
import React, { Component } from 'react';

class SimpleClassComponent extends Component {
  render(){
    return (
      <div >
        <p>Hello Class Component</p>
      </div>
    );
  }
}

export default SimpleClassComponent;
```

9. När vi skickar in något i en komponent hamnar denna i props. I en funktion tar vi emot det i function(props) och i en klass bind det till this, så this.props. Dessa anger man som attribut, så i lägg till ```myName="John Doe"```som ett attribut där vi renderar ```<SimpleClassComponent/>```.

10. Inuti SimpleClassComponent's ```render()``` så kan ni nu logga ```this.props.myName```. 'John Doe' skall visas i consollen.

11. Vi vet sedan tidigare att vi kan lägga till variabler/egenskaper genom att använda ```{}``` så istället för 'Hello Class Component' kan ni nu rendera ```this.props.myName```.

12. Än så länge har vi endast renderat Komponenter utan children och stängt taggen direkt med ```/>```. Så ändra nu ```<SimpleClassComponent myName="John Doe"/>``` till
```
<SimpleClassComponent myName="John Doe">
  <p>
    Another Text
  </p>
</SimpleClassComponent>
```
Spara och kör.

13. Vi såg nu att 'Another text' in renderades. Detta är för att de element vi anger inuti en annan komponent hamnar i props.children. Så lägg ni till en ```console.log(this.props.children)``` i render metoden i SimpleClassComponent.

14. För att rendera detta behöver vi lägga till {this.props.children} i det vi returnerar i SimpleClassComponent.
```
render(){
  return (
    <div >
      <p>Hello Class Component</p>
      {this.props.children}
    </div>
  );
}
```
15. Nu skall ni skapa en ny komponent, denna skall vara en klass. Ni döper den till ```CardComponent```. När ni renderar denna skall ni sätta tre attribut (headerText, contentText och buttonType).

16. Dessa kommer ni åt genom ```this.props```. CardComponent är ett 'card', så skriv css så att 'wrappern' ser ut som ett card. Googla 'ui card' för inspiration. Förslagsvis kan ni ha stukturen se ut följande när vi är klara.
```
<div>
  <header>
  some header text
  <header>
  <div>
  some content text
  </div>
  <div>
    <button>some button</button>
  </div>
</div>
```
17. Vårt Card skall fungera följande:
* Vad vi sätter headerText till skall renderas i header-taggen
* Vad vi sätter contentText till skall renderas i div-taggen för content
* Skickar vi med buttonType="solid" skall vi rendera en knapp med fylld bakgrund.
* Skickar vi med buttonType="border" skall vi rendera en knapp med vit bakgrund men en border med färg.

Knappen går att lösa på olika sätt.
* Antingen styr ni det med att sätta olika css klasser utefter vad ni skickar med
* Ni kan skapa en renderButton metod med if-satser där ni returnerar olika knappar
* Returnera olika knappar med ternary operators ```{buttonType === 'solid' ? <button1> : <button2> }```

18. Bonus: Gör om knappen till en egen komponent, där ni renderar knappen på olika sätt utefter attribut den får.
