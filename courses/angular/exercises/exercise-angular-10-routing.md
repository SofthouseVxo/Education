## 10. Angular - Routing

### Steg för steg

I denna uppgift skall ni skapa tre komponenter som vi väljer att visa beroende på hur vi har satt upp vår routing/navigation. Följ stegen nedan.

1. Skapa ett nytt angular projekt med Angular CLI ```ng new routertest```
(OBS välj yes när frågan “Would you like to add Angular routing?" kommer!)

1. ```cd routertest```

1. starta angular applikationen på en lokal webbserver och öppna i webbläsaren ```ng serve --open```

1. Öppna en ny tab eller ett nytt teminal/commandLine fönster och navigera till routertest projektet

1. Skapa en komponent som heter startPage ```ng generate component startPage```

1. Skapa en komponent som heter newsFlow ```ng generate component newsFlow```

1. Skapa en komponent som heter newsArticle ```ng generate component newsArticle```

1. Skapa en komponent som heter pageNotFound ```ng generate component pageNotFound```

1. Om vi öppnar projektet ser vi att vi har fått en ```app-routing.module.ts``` fil som angular CLI har skapat åt oss. Det är här vi kommer sätta upp vår routing. Och det är i route arrayen vi anger våra routes, så börja med att lägga till följande:

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
 { path: '', component: StartPageComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
```

Detta innebär att om vi anger en tom path i vår URL så kommer applikationen att rendera ```startPage``` komponenten.

10. Vart den renderas någonstans bestämmer vi genom att ange ```<router-outlet></router-outlet>``` någonstans i applikationen. Vi har den i ```app.component.html``` för tillfället. Se till så att din app.component.html ser ut som nedan:
```
<div style="text-align:center">
 <h1>
   Welcome to {{ title }}!
 </h1>
</div>

<router-outlet></router-outlet>
```

Testa så att det fungerar och att "start-page works!" skrivs ut på sidan. Vi har ni skapat vår första route.

11. Vi skall nu lägga till en ny route som vi skall navigera till. vi lägger till: <br/>
 ```{ path: 'news', component: NewsFlowComponent }``` i routes arrayen (glöm inte att importera NewsFlowComponent).
 
12. Prova nu att skriva localhost:4200/news i URLen. Din vy skall nu ändras.

 Vi har nu navigerat med hjälp av att skriva in något i adressfältet, men det går även att navigera med hjälp av länkar och i våra klasser. 
 
13. Gå till start-page.component.html och lägg in följande:<br/>
```<a routerLink="/profile" routerLinkActive="active">profile</a>```

14. Testar vi nu detta så ser vi att det har skapats en länk om vi går till “/" i startpage. ```routerLinkActive``` gör så att om denna routen är aktiv så får länken klassen “active".

15. Vill vi navigera genom ren logik inuti en komponent så använder vi oss av Router som vi importerar och injectar. Se till så att er ```start-page.component.ts``` ser ut som följande och lägg till en knapp i ```start-page.component.html``` som kallar på ```onNavigate()```.
```
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 selector: 'app-start-page',
 templateUrl: './start-page.component.html',
 styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

 constructor(private router: Router) {
 }

 ngOnInit() {
 }

 onNavigate(): void {
   this.router.navigate(['/news']);
 }
}
```

16. Lägg nu till ```{ path: '**', component: PageNotFoundComponent }``` i ```app-routing.module``` (OBS denna skall ligga sist i arrayen).


17. Genom att ange ** i pathen så innebär detta att om vi försöker navigera till en route som inte finns så kommer denna att visas. Så skulle vi exempelvis skriva in ```/profile``` i urlen så kommer PageNotFound att renderas. Prova i webbläsaren.

18. Vi skall nu skapa lite olika nyheter på news-flow sidan. Detta gör vi genom att skapa en egenskap i form av en array av object i ```news-flow.component.ts```
```news:Object[] = [{id: 1,title:'New President'}, {id: 2, title:'Active vulcano'}, {id:3, title:'Manchester United wins'}];```

Denna skall vi nu skriva ut med hjälp av direktivet ```*ngFor```, och det är en lista med länkar vi vill skriva ut. Lägg till nedan i ```news-flow.component.html```

```
<ul>
 <li *ngFor="let article of news">
   <a>{{article.title}}</a>
 </li>
</ul>
```

Lägg även till  ```[routerLink]="['/article', article.id]"``` inuti ```<a>```taggen.</br></br>

Klickar vi nu på en länk så kommer vi navigera till article/12 om id är 12. För att detta skall fungera så måste vi lägga till den nya routen i ```app-routing.module.ts```

```{ path: 'article/:id', component: NewsArticleComponent},```

När vi nu navigerar till vår artikel så vill vi nu skriva ut vilket id vi har skickat med. För att komma åt detta i news-article.component.ts så behöver vi importera den ActivatedRoute i ```news-article.component.ts```. Vi injektar sedan denna in constructorn. ActivatedRoute har en egenskap som heter params som är av typen BehaviourSubject som vi kommer gå igenom längre fram i kursen. Det vi gör nu är att prenumerera på denna genom subscribe metoden. Vi tar sedan detta värde och sparar i ```this.newsId```.

```JavaScript
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
 selector: 'app-news-article',
 templateUrl: './news-article.component.html',
 styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent {

 newsId:string;

 constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
       this.newsId = params.id;
    })
 }
}
```

Vi kan nu skriva ut id't i ```news-article.component.html``` -> id is {{newsId}}

Kika på [https://angular-2-training-book.rangle.io/handout/routing/routeparams.html](https://angular-2-training-book.rangle.io/handout/routing/routeparams.html) för att fördjupa er i hur man skickar parametrar med routes.