## 8. React - Events

1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app events-playground```

1. ```cd events-playground```

1. starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```

1. Börja med att gå till App.js och rensa all inuti ```<div className="App">```.

1. Skapa en ny komponent, denna skall vara en funktion.

1. Skapa nu en ny knapp i dennes JSX.

1. Lyssna nu efter att en användare klickar på denna knapp (använd console log).

1. Gör ovan fast i med en klass-komponent.

1. Prova nu att lägga till ```()``` så att ni anropar callback-funktionen i JSX koden. Vilka slutsatser kan ni dra?

1. Prova nu logga ```this``` i er callback (denna skall ej vara en arrow funktion nu).

1. Lös detta genom att använda ```bind```.

1. Gör nu om den till en arrow funktion. Vilka slutsatser kan ni dra?

1. Skapa nu en komponent som ni renderar i klasskomponenten ovan.

1. Passa nu in en metod som props. Denna metod skall ta emot en parameter och sedan logga denna.

1. Anropa denna metod i barnet med argumentet ```Hello from child```.

1. Får ni fram loggen? Hur kan vi använda detta?
