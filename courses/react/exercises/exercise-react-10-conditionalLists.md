## 10. React - Conditional rendering & lists

1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app conditionallist-playground```

1. ```cd conditionallist-playground```

1. starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```

1. Börja med att gå till App.js och rensa all inuti ```<div className="App">```.

1. Skapa en egenskap som ni kallar för ```shouldRender```. Denna sätter ni till false.

1. Ni skapar nu två knappar. Den ena skall renderas om ```shouldRender``` är satt till true och den andra om den är ```false```.

1. Skapar nu en metod som heter ```shouldRenderMethod```. Denna skall returnera ```shouldRender```.

1. Avänd nu metoden i din JSX istället.

1. Skapa nu en komponent som skall ta emot ```shouldRender``` som props.

1. Inuti denna skapar ni 2 nya knappar.

1. Ni skapar nu två knappar i den nya komponent. Den ena skall renderas om ```props.shouldRender``` är satt till true och den andra om den är ```false```.

1. Skapa nu en ny ```<p>Hello</p>``` som skall renderas om ```shouldRender``` är satt till false. Lös detta genom att använda ```&&``` operatorn.

1. Ni har nu en lista ```['kattis','jane','joe','nisse']``` ni skall ni rendera alla dessa som ```<li></li>``` inuti en ```<ul></ul>```. Använd ```.map()```. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.map() - MDN</a>
