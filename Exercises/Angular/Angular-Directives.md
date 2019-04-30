## Angular Directives

I denna uppgift skall ni skapa 2 komponenter med olika direktiv samt ett eget direktiv. Vi kommer att arbeta med direktiven *ngFor, *ngIf och *ngSwitch. Följ stegen nedan. Se exemplen från Directives föreläsningen som finns i PingPong.

1. Skapa ett nytt angular projekt med Angular CLI ```ng new dirtest```

1. ```cd dirtest```

1. starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```

1. Öppna en ny tab eller ett nytt teminal/commandLine fönster och navigera till dirtest projektet

1. Skapa en komponent som heter iffer ```ng generate component iffer```

1. Skapa en komponent som heter forer ```ng generate component forer```

1. Skapa ett eget direktiv som heter custom ```ng generate directive custom```

1. I iffer.component.ts skapar ni en egenskap utav typen boolean ```myBoolean:boolean = true;```

1. I iffer.component.html lägger ni sedan in:
```<p *ngIf="myBoolean">Shows this if myBoolean equals true</p>```

1. För att sedan toggla detta värde lägger ni till en knapp i ```iffer.component.html```
```<button (click)="myBoolean = !myBoolean">Toggle</button>```

1. Nu skall vi skapa flera komponenter utifrån en array. Så i ```app.component.ts``` skapar vi en ny array:
 ```myList:string[] = ['one', 'two', 'three'];```

1. Vi lägger sedan till följande i ```app.component.html```
```<app-forer *ngFor="let item of myList"></app-forer>```

1. Nu vill vi ta emot item som en ```@input``` i ```forer.component.ts``` och sedan skriva ut denna i en ```<p>``` tagg i ```forer.component.html```

1. Nu är det dags att använda vårt egna direktiv ```custom.directive.ts``` kopiera nedan så att ert direktiv ser ut som följande: ```import { Directive, ElementRef } from '@angular/core';```

```
@Directive({
 selector: 'appCustom'
})
export class CustomDirective {

 constructor(el: ElementRef) {
   console.log(el);
 }
}
```

ElementRef är en referens till det element där vi angivit direktivet. Så i ```app.component.html``` lägger ni till appCustom app-forer.

```<app-forer appCustom *ngFor="let item of myList"></app-forer>```

Kör koden och inspektera i webbläsaren.

Lägger vi sedan till:
```
el.nativeElement.innerHTML = "test text";
el.nativeElement.style.color = "blue";
```

I constructorn så kommer det hända saker med elementet, kör och inspektera i webbläsaren så kommer ni se följande:

Vi ser nu att app-forer elementet fått en style och “test text" har lagts till i domen. Och detta har skett i samtliga app-forer.

15. Det är även möjligt att skicka med parametrar till direktiv så ändra nu i ```app.component.html``` till
```<app-forer [appCustom]="'green'" *ngFor="let item of myList"></app-forer>```

Vi kan nu i custom.directive.ts lägg till en ```@input()``` och logga detta, kopiera nedan:
```
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
 selector: '[appCustom]'
})
export class CustomDirective implements OnInit{

 @Input('appCustom') myColor: string;

 constructor(private el: ElementRef) {
   el.nativeElement.innerHTML = "test text";
   el.nativeElement.style.color = "blue";
 }

 ngOnInit(): void {
   this.el.nativeElement.style.color = this.myColor;
 }
}
```

16. Angular erbjuder också något som kallas för ```@HostListeners``` som lyssnar på events på det elementet vi kopplat direktivet till. Så i custom.directive.ts lägger ni till en metod:
```
 @HostListener('click') onClick() {
    this.el.nativeElement.style.color = "pink";
  }
```

Ni behöver även importera HostListener
```import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';```

Nu kommer färgen att uppdateras om ni klickar på elementet ni angivit erat direktiv på som blir dennes “Host".
