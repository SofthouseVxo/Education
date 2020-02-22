## 11. Angular - Template driven forms

### Steg för steg          

1. Skapa ett nytt angular projekt med Angular CLI ```ng new formtest```

1. ```cd formtest```

1. starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```

1. Öppna en ny tab eller ett nytt teminal/commandLine fönster och navigera till formtest projektet

1. Skapa en komponent som heter startPage ```ng generate component myform```

1. Inuti src/app/ skapar vi en fil som ni döper till ```user.ts``` i denna skapar vi en class som följande:

```
export class User {
  constructor(
   public firstName: string,
   public lastName: string
 ) {  }
}
```

Detta är vår modell. Dvs Såhär kommer vi user se ut när vi gör formuläret.

7. Nu är det dags att skapa vårt formulär. Detta gör vi genom att lägga till följande i ```my-form.component.html```
</br></br>
**OBS!** ```(ngsubmit)``` & ```[(ngmodel)]``` skall vara ```(ngSubmit)``` och ```[(ngModel)]``` nedan.
```
<h1>User Form</h1>
<form (ngSubmit)="onSubmit()" #userForm="ngForm">
   <label for="firstName">First Name</label>
   <input
     type="text"
     [(ngModel)]="model.firstName" name="firstname"
   >

   <label for="lastName">Last Name</label>
   <input
     type="text"
     [(ngModel)]="model.lastName" name="lastName"
   >

 <button type="submit">
   Submit
 </button>

</form>
```

* ```(ngSubmit)="onSubmit()"``` onSubmit kommer köras när vi trycker på submit knappen.
* ```#userForm="ngForm"``` Nu kommer angular lägga till ngForm direktivet och vi får tillgång till all angular funktionalitet för formulär, genom att sätta #userForm så blir userForm en referens till vårt formulär.
* ```[(ngModel)]="model.firstName"``` Two way data binding till en firstName av vår modell som vi kommer skapa i ts filen.
* ```name="firstname"``` Genom att sätta name så vet angular att detta inputfält tillhör firstName

Som vi ser så har vi skapat inputs som binder till ```model.firstName``` och ```model.lastName```. Denna modell bygger på vårt User class. Så denna behöver vi importera och skapa en ny instans av i ```my-form.component.ts```

Som ni märker så att om ni försöker köra detta så får ni fel i konsollen, detta är för att vi inte har importerat FormsModule från '@angular/forms' i vår modul. Gör detta i app.module.ts

Som vi ser så har vi skapat inputs som binder till ```model.firstName``` och ```model.lastName``` Denna modell bygger på vårt User class. Så denna behöver vi importera och skapa en ny instans av i ```my-form.component.ts```
```
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
 selector: 'app-my-form',
 templateUrl: './my-form.component.html',
 styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

 model: User = new User('','');

 constructor() { }

 ngOnInit() {
 }
}
```

8. Nu har vi gjort så att om vi uppdaterar input fältet så kommer värdet i modell att updateras. Ni vill vi skapa en onSubmit som kallas på när vi trycker på submitknappen. Lägg till följande under ngOnInit metoden och testa.
```
onSubmit():void {
   console.log(this.model);
 }
```

9. Om vårt formulär inte är valid så vill vi inte att knappen skall gå att trycka på, detta fixar vi genom att binda ```[disabled]``` attributet till referenser till vårt formulär i html koden.
```
<button type="submit" [disabled]="!userForm.form.valid">
  Submit
</button>
```

10. ```userForm``` har vi tillgång till här för att vi skapade referenser i början av formuläret med ```#userForm```. Och då har angular skapat ett angular formulär och erbjuder oss egenskaper som valid. Spara och testa.

11. Som ni märkte så gick det alltid att trycka på knappen, detta är för att vi inte har lagt in några validators, angular erbjuder oss ett antal inbyggda sådana. Dessa finns som direktiv och kan läggas in i våra input taggar, vi kommer att använda ```required``` och ```minLength```. Nedan finner ni listan på allihopa:

[https://angular.io/api/forms/Validators](https://angular.io/api/forms/Validators)

Så i ```my-form.component.html``` lägger vi till de markerade spara och test knappen.

**OBS!** ```[(ngmodel)]``` och ```minlength``` skall vara ```(ngSubmit)``` och ```minLength``` nedan.

```
<label for="firstName">First Name</label>
<input
  type="text"
  required
  minlength="10"
  [(ngModel)]="model.firstName" name="firstname"
>

<label for="lastName">Last Name</label>
<input
  type="text"
  required
  minlength="10"
  [(ngModel)]="model.lastName" name="lastName"
>
```

12. Genom att vi använder ett angular form så kommer angular att sätta css klasser utefter vilket state varje input fält är i samt vilket state formuläret är i. Så om vi inspekterar ett fält när sidan är nyladdad kommer vi ser följande.


Detta innebär att vi kan använda dessa för att styla våra formulär beroende på vilket state de har. Så nu skall vi göra en icke valid input till röd. Lägg till följande i er my-form.component.css.
```
.ng-invalid:not(Form) {
   border: 1px solid red;
}
```

pseudoklassen ```:not()``` innebär att den får stylen om den i detta fallet inte är ett Form element. Som vi så ovan så får hela fomuläret dessa klasser och vi vill inte rödmarkera hel formuläret. Spara och testa både med och utan pseudo klassen.

Nu blir fälten röda med en gång, detta är inte rekommenderat, för nu berätta vi för användaren att de har gjort fel redan innan de börjat. Detta kan vi lösa genom att lägga till:

```
.ng-invalid:not(Form).ng-touched:not(Form) {
   border: 1px solid red;
}
```

Nu kommer det endast bli rött om man markerat fältet och sedan blurrat det.

13. Det sista vi skall göra är att berätta för användaren vad de gjort för fel. Detta kan vi göra genom att skapa en ny referens i våra inputs. Lägg till det markerade nedan.

**OBS!** ```[(ngmodel)]``` och ```minlength``` skall vara ```(ngSubmit)``` och ```minLength``` nedan.
```
<input
  type="text"
  required
  minlength="10"
  [(ngModel)]="model.firstName" name="firstname"
  #firstName="ngModel"
>
```

Nu kan vi använda firstName i vår kod, och denna har vi kopplat till vår ngModell och med hjälp av angular så skapas en ny referens med egenskaper från modellen. Däribland ```firstName.valid```, ```firstName.pristine``` osv. Det jag vill att ni gör nu är att skapar en ```<div>``` med innehållande ett felmeddelande som visas om fältet inte är valid och är touched.

Egna studier:
[https://angular.io/guide/forms](https://angular.io/guide/forms)
[https://angular.io/guide/form-validation](https://angular.io/guide/form-validation)
