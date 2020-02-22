## 4. Angular - Components

### Steg för steg

1. Skapa ett nytt angular projekt med Angular CLI ```ng new comptest```.

1. ```cd comptest```.

1. Starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```.

1. Öppna en ny tab eller ett nytt teminal/commandLine fönster och navigera till **comptest** projektet.

1. Skapa en komponent som heter wrapperComponent (föräldern) ```ng generate component wrapper```. Kommandot kör ni när ni står i ```app``` mappen.

1. Rensa wrapper-komponentens template.html och lägg nu till en ```<div></div>``` och inuti diven lägger ni till ```<p></p>```.

1. Gör nu så att innehållet inuti ```<p></p>``` binds till en egenskap som ni skapar i ```wrapperComponent```
klassen. Detta gör ni med string interpolation ```{{}}```.

1. Syns det i webbläsaren? Varför inte?

1. Fixa detta.

1. Gör nu samma sak fast ni binder till ```[innerHTML]``` istället.

1. Lyssna nu på att ett ```click``` sker på diven så skall en metod anropas i klassen.


### @Input och @Output

1. Skapa en komponent som heter content (barnet) ```ng generate component content``` (även denna i src mappen).

1. Wrapper komponenten skall passa ett värde till content komponenten. När vi passar värden från en komponent till en annan så
kallas det för Input. I barnet ```content.component``` så måste vi ange detta när vi deklarerar egenskapen. Vi
skall passa värdet name till content. Så inuti ```content.component.ts``` så skriver vi:

<br/>
<br/>

```@Input()name: string;```

<br/>
<br/>
precis under
<br/>
```export class contentComponent implements OnInit {```
<br/></br>

Detta innebär att vi berättar för angular att detta är ett värde som skall skickas in i denna komponent. OBS
Input måste importeras i content.component.ts längst upp.

<br/>
```import { Component, OnInit, Input } from '@angular/core';```

1. Vi skall rendera content komponenten i ```wrapper.component.html``` detta gör vi genom att skriva: 
<br/>
```<app-content></app-content>```. 
<br/>
<br/>
Och sättet vi passar ett värde som en Input till en komponent är följande:
<br/>
```<app-content [name]="'John Doe'"></app-content>```
<br/>
<br/>
Detta innebär att vi sätter egenskapen name till strängen ```'John Doe'```.  
<br/>
<br/>
Vi kan nu rendera name inuti ```content.component.html``` genom att använda string interpolation.
<br/>
```<p>{{name}}</p>```
<br/>
<br/>
1. När vi vill skicka ut något från en komponent istället så kallar vi detta för en output. Även detta deklarerar vi
inuti ```content.component.ts``` men istället för @Input så använder vi ```@Output()```.
<br/>
```@Output()onChangeName = new EventEmitter<string>();```
<br/><br/>
Ovan har vi satt en output (egenskap) till namnet ```onChangeName``` och säger att denna är en EventEmitter
(inbyggd i Angular). 
<br/><br/>
En event emitter är något som skickar ut ett event. Och metoden som emittas skickar med en
sträng. Output och EventEmitter är delar av Angular och måste även dem importeras längst upp.
<br/><br/>
```import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';```
<br/><br/>
I ```wrapper.component.html``` lägger vi nu till:
<br/><br/>
```<app-content (onChangeName)="changeName($event)" [name]="'John Doe'"></app-content>```
<br/><br/>
Här är det viktigt att ni använder ```$``` tecknet för att angular skall förstå.
<br/><br/>
Detta innebär att vår egenskap ```onChangeName``` blir metoden changeName som vi nu skapar inuti klassen.
<br/><br/>
```wrapper.component.ts```
<br/><br/>
```
changeName(event):void{
	this.name = event;
}
```
<br/><br/>
Vi lägger även till name som en egenskap:
<br/><br/>
```wrapper.component.ts```
<br/>
```name:string = 'John Doe';```
<br/><br/>
Nu kan vi kalla på ```this.onChangeName.emit("New name")``` inuti ```content.component.ts``` och passa en sträng
som en parameter. Detta innebär att när vi kallar på ```this.onChangeName``` så kommer ```changeName()``` inuti
```wrapper.components.ts``` anropas då vi har skickat in denna som en output.
<br/><br/>
För att visualisera detta så lägger vi till:
<br/><br/>
```content.component.html```
<br/><br/>
```<button (click)="onClick()"> Change name</button>```
<br/><br/>
```content.component.ts```
<br/><br/>
```
onClick() {
	this.onChangeName.emit('My New Name');
}
```
<br/><br/>
För att nu se vårt resultat så ändrar vi till
```<app-content (onChangeName)="changeName($event)" [name]="name"></app-content>```
<br/><br/>
Om ni nu klickar på knappen inuti content komponenten skall texten ändras.
