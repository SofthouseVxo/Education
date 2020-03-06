## UppgiftsBeskrivning - U2 Angular


I denna uppgift skall ni jobba med Angular och framförallt Services, Routing, Forms och Http. Ni bygger vidare på er kod från uppgift 1.

* Om ni inte valde ja på när frågan om routing kom när ni skapade projektet så behöver ni skapa en src/app/app-routing.module.ts som ser ut som nedan.


```JavaScript
//src/app/app-routing-module.ts
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];


@NgModule({

 imports: [RouterModule.forRoot(routes)],

 exports: [RouterModule]

})

export class AppRoutingModule { }
```

Och importerar denna i app.module.ts


```JavaScript
// src/app/app.module.ts
import { AppRoutingModule } from './app-routing.module';

@NgModule({

 declarations: [],

 imports: [

 AppRoutingModule,

 ],

 providers: [],

 bootstrap: []

})

export class AppModule { }
```

 

Skapa sedan 2 modeller enligt nedan
```JavaScript
//src/app/models/admin-full.model.ts

export class AdminFull {

 constructor(

 public firstName:string,

 public lastName:string,

 public email: string,

 public password: string

 ) { }

}
```

```JavaScript
//src/app/models/admin-login.model.ts

export class AdminLogin {

 constructor(

 public email: string,

 public password: string

 ) { }

}
```

* AdminFull är en modell över hur våra kompletta admins-objekt skall se ut, och AdminLogin är en modell för hur en admin ser ut vid inloggning. 

Lägg sedan till nedan egenskap i auth.service.ts
```JavaScript
//src/app/auth.service.ts

public admins:AdminFull[] = [{

firstName: 'John',

lastName: 'Doe',

email: 'john.doe@email.com',

password: '1234567890'

}, {

firstName: 'Kylie',

lastName: 'Johnson',

email: 'kylie.johnson@email.com',

password: '0987654321'

}];
```

För att vi skall få ut så mycket som möjligt av uppgiften så gör vi den i 2 steg där första steget fokuserar på att få igång routing och andra steget på formulär och anrop mot en backend. Med detta sagt kommer saker vi gjort i steg 1 ibland förändras i steg då (och även i VG delen).

### För betyget Godkänt krävs följande:

#### Steg 1:
1. Applikationen skall bete sig som den som presenteras i filmen router i denna mapp. (OBS! Det skall endast finnas 1 loginformulär och det är det med email och password).
1. Dvs om användare inte är inloggad skall en text visas istället för dashboard. När användaren loggar in sparas denna i localStorage och innehållet i dashboard från uppgift 1 visas.
1. Om man navigerar till loginsidan och man redan är inloggad så skall en text visas och det skall gå att logga ut. Vid utloggning rensas localstorage.
1. Man skall kunna navigera mellan dashboard och loginsidan genom navbaren eller genom att skriva i addressfältet i webbläsaren.
1. Skriver man in en route som inte finns skall man hamna på en page not found-sida.
1. Klickar man på en användare i dashboarden skall man navigeras till en sida där användaren skrivs ut och användaren skickas som parameter i adressfältet.
1. Funktionaliteten för att logga in, kontrollera användare och logga ut skall finnas i en Service.
1. Samtliga komponenter som presenteras i Komponentstruktur U2(finns i denna mapp) skall användas i applikationen.

#### Steg 2:
1. Applikationen skall även bete sig som den som presenteras i filmen validation&Http i denna mapp.
1. Det skall endast gå att logga in med en admin som stämmer överrens med en admin i listan som ni skapar i authService (email & password).
1. Formuläret skall vara ett template driven form.
1. Emailfältet skall vara required och använda angulars inbyggda validator för email.
1. Lösenordsfältet skall vara required och minst 10 karaktärer långt.
1. Om inputfältet är invalid skall detta få en röd boarder och en ruta under skall skriva ut ett felmeddelande.
1. Fälten skall inte visa ett fel om användaren inte markerat och avmarkerat en input (touched).
1. Listan med användare som visas i dashboarden skall hämtas med angular http från https://jsonplaceholder.typicode.com/
1. När man klickar på en användare skall gå till routen users/:id och använda Id't för att hämta information om denne från Jsonplaceholder
1. Visa informationen (username, name, city, street, zipcode).
1. Logiken för att hämta användare (http anropen) skall ligga i en service (förslag: users.service.ts) OBS! Denna finns inte med i komponentstruktur-bilden

### För betyget Väl Godkänt krävs följande:

* Samtliga krav för betyget Godkänt skall vara uppfyllda.
* Applikationen skall bete sig som den som presenteras i filmen U2 VG i denna mapp.
* Om man misslyckas med att logga in skall en modal visas, dvs denna skall skapas i login.component.html (denna skall vara en komponent ni själva skriver, INTE en window.alert eller window.promt). Komponenten skall vara en generell Error-modal dvs ni skickar in vad som skall stå i den med hjälp av en @Input, detta innebär att vi kan använda den på fler ställen i appen när något går snett.
* Det skall vara möjligt att registrera en ny användare, denna nya användare (admin) skall vi sedan kunna logga in med. (laddas sidan om kommer nya Admins att försvinna.)
* Registreringsformuläret skall vara ett reactive form med validering (samma validering som på login + firstname och lastname = required).
* Vid fel i registreringsformuläret skall felmeddelande visas på samma sätt som i Login (de röda boxarna).
* Skicka även in en rapport på minst en A4 sida (400 ord) där du tar upp följande:
   * Vad finns det för likheter/skillnader på att jobba med template/reactive forms?
   * Nämn för/nackdelar med template/reactive forms?
   * När passar det att använda template/reactive forms?
   * Obervera att för att svara på dessa frågor kommer ni behöva leta källor utanför föreläsningsmaterialet, det är viktigt att ni refererar till era källor.

### Utöver ovanstående skall applikationen uppfylla följande:

* När man kör applikationen med ng serve skall applikationen byggas helt utan felmeddelande.
* Varje komponent ni skriver skall innehålla en kort beskrivning av dess funktionalitet.
* Komplexa eller stora metoder skall ha en kort beskrivning av vad de gör.
* Applikationen redovisas genom att ni zippar ert projekt (UTAN node_modules) Döp mappen till AngularU2RobLun (byt ut RobLun mot ert namn).

#### Deadline Sön 23/2 kl 24:00

#### Checklista inför inlämning:
* Min applikation kan köras i webbläsaren utan felmeddelande.
* Min applikation beter sig som angivits i beskrivningen ovan.
* Jag har inga console.logs i min kod.
* Jag har strukturerat upp min kod med indentations.
* Jag har inte döpt några metoder eller egenskaper till svenska namn.
* Jag använder beskrivande namn på metoder och egenskaper (inte för generella).
* Min projektmapp är döpt korrekt.
* Jag har inga egenskaper eller metoder som inte används.
* Jag har angivit typer för egenskaper och vad metoder returnerar.
* Alla mina klasser är kommenterade med vilken funktionalitet de innehåller samt dess syfte.
* Alla metoder som är komplexa eller stora har kommenterats.
* Min komponentstruktur följer nedan mönster där först i listan är längst upp.

```JavaScript
Imports { }
@Decorator
Class
Properties (egenskaper)
Constructor
Lifecycle methods
Methods (metoder)
```
