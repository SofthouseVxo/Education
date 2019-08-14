## React styling and Assets

I denna övningsuppgift skall ni få träna att använda bilder, och styla med css i ett react projekt skapat med create-react-app.

1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app styles-testing```

1. ```cd styles-testing```

1. Starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```

1. Börja med att gå till App.js och rensa allt inuti ```<div className="App">```.

1. Skapa en mapp som ni döper till images. Denna lägger ni i ```/src```.

1. Ni väljer sedan en valfri bild, har ni ingen så finns det gott om dem på google.

1. Denna skall ni nu använda i er ```App.js``` ```import testImage from '../images/<bildnamn.jpg/png/svg>```

1. Rendera bilden genom att lägga till ```<img src={testImage}/>```

1. Spara, och kontrollera att det fungerar i webbläsaren. Kör nu ```npm run build``` och studera vad som hände med er bild i build mappen.

1. Skapa nu en komponent som ni döper till ```StylingComponent.js``` i denna skall ni skapa 5st div-element.

1. Den första diven skall ni styla med inline styling ```<div style={}/>``` den skall vara
* 300*300px
* border 1px grön
* bakgrundsfärg rosa
* Innehålla en valfri text

12. Den andra diven skall ha samma styling som den första fast gör nu detta med en klass ```.myClass```, skapa en ```StylingComponent.css```

13. Den tredje diven skall stylas med en klass som endast gäller för denna komponenten, så nu behöver vi använda css-modules. Skapa en ```StylingComponent.module.css``` genom att använda ```.module``` så förstår webpack att detta är en css-module. Lägg in er klass i den nya css filen och för att använda den måste vi importera den. ```import styles from './StylingComponent.module.css'```. Och i JSX'en använder ni ```className={styles.myClass}```.

14. Nu skall ni skapa en ny komponent som ni döper till ```GameBoyComponent.js```

15. Denna skall se ut som ett gammalt gameboy color. Dvs:
* Den skall ha en skärm, denna representeras av en bild i ert fall
* Den skall ha borderRadius på de nedre hörnen
* Istället för alla knappar som finns på ett gameboy color så nöjer vi oss med 2 knappar.
* Allt skall stylas med css moduler dvs classerna skall endast gälla för denna komponenten

16. Skapa nu en ny ```GameBoyBWComponent.js```, denna skall ha exakt samma JSX, men byt ```GameBoyComponent.modules.css``` till en ny ```GameBoyBWComponent.modules.css```. Ändra till färger some endast följer gråskala. CSS klasserna skall ha samma namn men med olika styling. När detta körs i webbläsaren skall de se olika ut. Inspektera i din webbläsare för att se vilka css klasser de fick.
