## Angular Components

I denna uppgift skall ni skapa två komponenter som interagerar med varandra, den ena är en så kallad förälder och den andra ett barn. Detta innebär att barnet är renderad inuti föräldern, så kallat nästlad. Följ stegen nedan. Se exemplen från ComponentBinding som finns i PingPong.

1. Skapa ett nytt angular projekt med Angular CLI ```ng new comptest```

1. ```cd comptest```

1. starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```

1. Öppna en ny tab eller ett nytt teminal/commandLine fönster och navigera till comptest projektet

1. Skapa en komponent som heter wrapper (föräldern) ```ng generate component wrapper```

1. Skapa en komponent som heter content (barnet) ```ng generate component content```

1. Wrapper komponenten skall passa ett värde till content. När vi passar värden från en komponent till en annan så kallas det för Input. I barnet ```content.component``` så måste vi ange detta när vi deklarerar egenskapen. Vi skall passa värdet name till content. Så inuti ```content.component.ts``` så skriver vi:

```@Input()name: string;```

precis under

```export class contentComponent implements OnInit {```

Detta innebär att vi berättar för angular att detta är en egenskap som skall skickas in i denna component. OBS Input måste importeras i content.component.ts längst upp.

```import { Component, OnInit, Input } from '@angular/core';```

1. Vi skall rendera content komponenten i ```wrapper.component.html``` detta gör vi genom att skriva ```<app-content></app-content>```. Och sättet vi passar ett värde som en Input till en komponent är följande:

```<app-content [name]="'John Doe'"></app-content>```

Detta innebär att vi sätter egenskapen name till strängen "John Doe".

Vi kan nu rendera name inuti ```content.component.html``` genom att använda string interpolation.

```<p>{{name}}</p>```

När vi vill skicka ut något från en komponent istället så kallar vi detta för en output. Även detta deklarerar vi inuti ```content.component.ts``` men istället för @Input så använder vi ```@Output()```.

```@Output()onChangeName = new EventEmitter<string>();```

Ovan har vi satt en output (egenskap) till namnet ```onChangeName``` och säger att denna är en EventEmitter (inbyggd i Angular). En event emitter är något som skickar ut ett event. Och metoden som emittas skickar med en sträng. Output och EventEmitter är delar av Angular och måste även dem importeras längst upp.

```import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';```

I ```wrapper.component.html``` lägger vi nu till:

```<app-content (onChangeName)=”changeName($event)” [name]="'John Doe'"></app-content>```

Här är det viktigt att ni använder ```$``` tecknet för att angular skall förstå.

Detta innebär att vår egenskap ```onChangeName``` blir metoden changeName som vi nu skapar inuti klassen.

```wrapper.component.ts```

```
changeName(event):void{
   this.name = event;
}
```

Vi lägger även till name som en egenskap :

```wrapper.component.ts```

```name:string = 'John Doe';```

Nu kan vi kalla på ```this.onChangeName.emit("New name")``` inuti ```content.component.ts``` och passa en sträng som en parameter. Detta innebär att när vi kallar på ```this.onChangeName``` så kommer ```changeName()``` inuti ```wrapper.components.ts``` anropas då vi har skickat in denna som en output.

För att visualisera detta så lägger vi till:

```content.component.html```

```<button (click)="onClick()"> Change name</button>```

```content.component.ts```
```
onClick() {
   this.onChangeName.emit('My New Name');
}
```


För att nu se vårt resultat så ändrar vi till
```<app-content (onChangeName)="changeName($event)" [name]="name"></app-content>```
 Om ni nu klickar på knappen inuti content komponenten skall texten ändras.

Nedan finner ni länkar till angular dokumentationen:

* [https://angular.io/guide/displaying-data](https://angular.io/guide/displaying-data)
* [https://angular.io/guide/template-syntax](https://angular.io/guide/template-syntax)
* [https://angular.io/guide/user-input](https://angular.io/guide/user-input)
* [https://angular.io/guide/component-interaction](https://angular.io/guide/component-interaction)
* [https://angular.io/guide/component-styles](https://angular.io/guide/component-styles)



