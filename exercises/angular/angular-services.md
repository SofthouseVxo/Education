## Angular Services

I denna uppgift skall ni skapa två komponenter som interagerar med en service. En service är en klass som har logik som inte är kopplad till en specifik vy. För att kunna använda metoder och egenskaper som är kopplade till en service i våra komponenter använder vi något som heter dependency injection. Detta genom att vi injektar vår service via “constructorn" i våra komponenter. Följ stegen nedan.

1. Skapa ett nytt angular projekt med Angular CLI ```ng new servtest```

1. ```cd servtest```

1. starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```

1. Öppna en ny tab eller ett nytt teminal/commandLine fönster och navigera till servtest projektet

1. Skapa en komponent som heter compOne ```ng generate component compOne```

1. Skapa en komponent som heter compTwo ```ng generate component compTwo```

1. Skapa en service som heter math ```ng generate service math```

1. Vår nya service skall innehålla två metoder med olika funktionalitet som har med att göra uträkningar att göra. Dvs vår service har ett specifik område den tar hand om. Skapa en metod som tar emot 3 parametrar (value1, value2 och value3). Metoden skall returnera värdet av de två första gånger parameter 3).
```
addNMultiply(value1:??,value2:??, value3:??) {
  return ?????;
}
```

1. Den andra metoden tar emot 2 parametrar, den första är en array med nummer och den andra är ett nummer. Metodens syfte är att multiplicera värdena i den första parametern, och sedan kolla om det sammanlagda värdet är högre än vad som passades in som parameter 2. Utgå ifrån nedan mall (obs frågetecknen inuti metoden representerar inte antalet rader).
```
ifValueIsAbove(values:??, sum:??){
	??
???
??
 }
```

1. Vår service skall även innehålla en egenskap, denna döper vi till myValue av typen number med ett default värde av 134.

Nu är vår service klar är det dags att vi börjar använda den i våra komponenter. För att få tillgång till en service inuti en komponent så injectar vi den i constructorn. Så din compOne kommer se ut som nedan. Där vi kallar på den första metoden i math.service.
```
import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
 selector: 'app-comp-one',
 templateUrl: './comp-one.component.html',
 styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

 constructor(private mathService:MathService) {
   console.log('in component one', mathService.myValue)
   mathService.myValue = 15;
 }

 ngOnInit() {
   console.log('in component one', this.mathService.addNMultiply(12,32,43));
 }
}
```

Kolla så din addNMultiply fungerar som den är tänkt och du får 1892. Vi lägger även till i constructorn att vi vill uppdatera vår egenskap myValue som ligger i vår service. Detta gör vi genom att lägga till följande:
```
constructor(private mathService:MathService) {
  mathService.myValue = 15;
};
```

1. Nu är vi klara med compOne, och skall nu börja använda vår service i compTwo.
```
import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
 selector: 'app-comp-two',
 templateUrl: './comp-two.component.html',
 styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

 constructor(private mathService:MathService) {
   console.log('in component two',mathService.myValue);
 }

 ngOnInit() {
   console.log('in component two', this.mathService.addNMultiply(12,32,43));
   console.log('in component two', this.mathService.ifValueIsAbove([13,65,34,23,43], 100));
 }
}
```

1. Din console i inspektorn skall nu se ut som följande. Vi ser att myValue i vår service var 135 i component 1, vi ändrade den i constructorn. När vi sedan loggade den i component 2 så var den 15. Detta innebär att vi har delat datan mellan komponenterna men behållit den i servicen. Vi ser även att vi har tillgång till alla metoder i servicen i bägge componenterna, detta vill vi göra med funktionalitet som inte är knuten till en specifik vy. Ta 5min och reflektera och undersök vad vi nyss implementerat. Prova att:
Sätta metoderna och egenskapen i servicen till “public" och “private" och se vad som händer.




