## 13. React - Hooks

1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app hooks-playground```

1. ```cd hooks-playground```

1. starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```

1. Börja med att gå till App.js och rensa all inuti ```<div className="App">```.

1. Skapa en nu komponent (funktionskomponent).

1. Denna komponent skall ha ett state innehåller ```money```, detta skall vi sköta med ```useState```.

1. Det initiala värdet av ```money``` skall vara ```200```.

1. Lägg nu till tre knappar. En med innehållet 20, en med 30, och en med 100.

1. Under dessa knappar skall vi skriva ut värdet av ```money``` i en paragraf.

1. Klickar vi nu på 20-knappen så skall ```money``` ökas med 20, och sidan skall uppdateras så vi ser det aktuella värdet på sidan.

1. Gör likadant för de två andra och lägg på respektive värde.

1. Skapa nu en useEffect och logga ```money``` i denna hook. Vid vilka tillfällen körs denna?

1. Skapa nu en ny useEffect som endast körs vid mount.

