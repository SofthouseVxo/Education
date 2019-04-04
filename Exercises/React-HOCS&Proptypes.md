## React Hocs och PropTypes

I denna övningsuppgift skall ni få träna att använda Higher order components och typechecking med proptypes

1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app hocs-testing```

1. ```cd hocs-testing```

1. starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```

1. Börja med att gå till App.js och rensa all inuti ```<div className="App">```.

1. Skapa en ny komponent som ni döper till ```UserComponent```. Denna skall vara en function component.

1. Ni passar sedan in följande som attribut.
```
<UserComponent
  name="Jane Doe"
  age={12}
  hobbies={['football', 'painting', 'computer hacking']}
  address={{
    street: 'lincoln street 12',
    city: 'New York'
    }
  }
/>
```

7. Nu skall ni ange inuti UserComponent vilka typer era props, se listan på [https://reactjs.org/docs/typechecking-with-proptypes.html](https://reactjs.org/docs/typechecking-with-proptypes.html)

8. Sätt nu så att age och name måste skickas med. Testa sedan att inte skicka med dessa och se vad som händer.

9. Nu skall vi skapa en Higher Order Component. Börja med att skriva följande:
```
import React, { Component } from 'react';

export default function withSomeThing(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  };
}
```
Som vi ser så är det en funktion som tar emot en komponent och renderar sedan denna.

10. Nu skall vår UserComponent "wrappas" med denna HOC'en. Gör detta genom att exportera denna följande ```export default withSomeThing(UserComponent)```. Spara och se så att det fungerar.

11. För tillfället gör inte withSomeThing HOC'en någonting. Vi vill nu passa in ett värde i alla komponenter som wrappas med  withSomething HOC'en. Så inuti ```render``` i withSomething så lägger vi till:
```
render() {
  const myValue = 'This is a string value';
  return (
    <WrappedComponent
      myValue={myValue}
      {...this.props}
    />
  )
}
```

12. Detta värde passas som ett attribut, vilket innebär att detta värde kommer vara tillgänglig i props i alla komponenter som wrappas med withSomething HOC'en. Rendera nu ut ```this.props.myValue``` i UserComponent.

13. Skapa nu en ny komponent som ni döper till AdminComponent. Denna skall wrappas med withSomething, ändra ```myValue``` till något annat. Rendera ut myValue i AdminComponent. Spara och se vad som händer.

14. Som ni ser så har både UserComponent och AdminComponent nu fått det nya myValue som props. De är helt separerade komponenter med de delar funktionalitet genom vår withSomething HOC.

15. Lägg nu till en metod som loggar ut 'Hello im a CSS hacker' inuti withSomehting. Denna skickar ni me så att ni i era UserComponent och AdminComponent kan kalla på denna.

16. Byt nu ut loggen till att ändra state inuti withSomething. Och detta statet skall nu skickas med till komponenterna.

17. Lägg nu till proptypes i samtliga komponenter.

18. Reflektera över hur withRouter fungerar [https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md)