## 5. Angular - Components continuation

### Steg för steg

1. Skapa ett nytt angular projekt med Angular CLI ```ng new comptest```

1. ```cd comptest```

1. Starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```

1. Öppna en ny tab eller ett nytt teminal/commandLine fönster och navigera till **comptest** projektet.

1. Skapa en komponent som ni döper till wrapper med Angular CLI. ```$ ng g c wrapper```

1. Rensa ```app.component.html```.

1. Se ni till så att wrapper-komponenten renderas inuti app-komponenten.

1. Lägg ni till en ```<h1>I'm the wrapper!</h1>``` i wrapperns template.

1. Styla nu H1'an så att texten blir blå.

1. Lägg nu till en ```<h1>I'm the app!</h1>``` i ```app.component.html```. Blir denna också blå? Vad kan du dra för slutsatser?

1. Istället för att skriva "I'm the wrapper!" i html filen skall ni nu binda en text ifrån komponent klassen. Gör detta med interpolation ```{{}}```.

1. Lägg nu till en ```:host``` style i wrapper komponenten. Sätt exempelvis bakgrundsfärgen till rosa. Spara och inspektera i webbläsaren för att se vilket element som fick stilen.

1. Importera bootstrap css i ditt projekt. När detta är gjort skapar du en knapp i wrapper component och ger denna css klassen ```btn btn-primary```. Kontrollera nu så att knappen blir blå.

1. Skapa en ny component som ni döper till ```chewbacca```.

1. Lägg ni till 3 olika lifecycle hooks i denna. De börjar alltid på ```ng```.

1. I varje hook metod skapar ni en ```console.log()```.

1. Rendera komponenten inuti wrapper komponenten. Kör koden och kolla i konsolen efter loggarna.