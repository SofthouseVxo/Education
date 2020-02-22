## 6. Angular - Directives

### Steg för steg          
         
1. Skapa ett nytt angular projekt med Angular CLI ```ng new dirtest```

1. ```cd dirtest```.

1. Starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```.

1. Öppna en ny tab eller ett nytt teminal/commandLine fönster och navigera till dirtest projektet

1. Skapa en komponent som heter iffer ```ng generate component iffer```.

1. Skapa en komponent som heter forer ```ng generate component forer```.

1. Skapa ett eget direktiv som heter custom ```ng generate directive custom```.

1. I ```iffer.component.ts``` skapar ni en egenskap utav typen boolean ```myBoolean:boolean = true;```

1. I ```iffer.component.html``` lägger ni sedan till ```<p *ngIf="myBoolean">Shows this if myBoolean equals true</p>```

1. För att sedan toggla detta värde lägger ni till en knapp i ```iffer.component.html```
<br/> <br/>
```<button (click)="myBoolean = !myBoolean">Toggle</button>```
<br/><br/>
1. Nu skall vi skapa flera komponenter utifrån en array. Så i ```app.component.ts``` skapar vi en ny array:
<br/><br/>
```myList:string[] = ['one', 'two', 'three'];```
<br/><br/>
1. Vi lägger sedan till följande i ```app.component.html```
<br/><br/>
```<app-forer></app-forer>``` och där lägger ni in ```*ngFor="let item of myList"```.
<br/><br/>

1. Skicka nu in ```item``` som en ```@input``` i ```forer.component.ts```

1. Skriv nu ut ```item``` i en ```<p>``` tagg i ```forer.component.html```

1. Nu är det dags att använda vårt egna direktiv ```custom.directive.ts``` kopiera nedan så att ert direktiv ser ut som följande: 

<br/><br/>
```JavaScript
import { Directive, ElementRef } from '@angular/core';

@Directive({
 selector: 'appCustom'
})
export class CustomDirective {

 constructor(el: ElementRef) {
   console.log(el);
 }
}
```
ElementRef är en referens till det element där vi angivit direktivet. Kör i webbläsaren och kolla i konsolen.
<br/><br/>
16. Lägg nu till ```appCustom``` på ```app-forer``` i ```app.component.html```.
<br/><br/>

```<app-forer appCustom *ngFor="let item of myList"></app-forer>```
<br/><br/>

Kör koden och inspektera i webbläsaren.
<br/><br/>

17. Prova nu att lägga till nedan inuti direktivets constructor.
<br/><br/>
```
el.nativeElement.innerHTML = "test text";
el.nativeElement.style.color = "blue";
```
Kör koden och inspektera i webbläsaren.
<br/><br/>

18. Det är även möjligt att skicka med parametrar till direktiv så ändra nu i ```app.component.html``` till
```<app-forer [appCustom]="'green'" *ngFor="let item of myList"></app-forer>```
<br/><br/>
Vi kan nu i custom.directive.ts lägg till en ```@input()``` och logga detta, kopiera nedan:
<br/>
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
19. Angular erbjuder också något som kallas för ```@HostListeners``` som lyssnar på events på det elementet vi kopplat direktivet till. Så i custom.directive.ts lägger ni till en metod:
```
@HostListener('click') onClick() {
	this.el.nativeElement.style.color = "pink";
}
```
Ni behöver även importera HostListener:<br/>
```import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';```
<br/><br/>
Nu kommer färgen att uppdateras om ni klickar på elementet ni angivit erat direktiv på som blir dennes “Host".
