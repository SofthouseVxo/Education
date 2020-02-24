### 10. Angular</h3>
#### Routing and Navigation</h5>


---

"The Angular Router enables navigation from one view to the next as users perform application tasks." - <a href="https://angular.io/guide/router" target="_blank">Angular Docs</a>


---

### What ways are there to navigate in the browser?</h3>


---


#### Browser navigation

* URL in the address bar -> browser navigates to a corresponding page.
* Click links on the page -> browser navigates to a new page.
* Browser's back and forward buttons -> browser navigates backward and forward through the history of pages.


---

#### The Angular Router makes it possible to do this on our single page app (SPA).


---

####  Setting up the router

* Add a <base> element to the index.html as the first child in the ```head```. 
* This tells the router how to compose navigation URLs.

```HTML
<base href="/"> <!--The base route (index.html)-->
```



---


####  Setting up the router

* Since routing is optional we need to import the module.

```JavaScript
import { RouterModule, Routes } from '@angular/router'; // src/app/app.module.ts
```


---

"A routed Angular application has one singleton instance of the Router service. When the browser's URL changes, that router looks for a corresponding Route from which it can determine the component to display." - <a href="https://angular.io/guide/router" target="_blank">Angular Docs</a>


---

#### Setting up the router

* A router has no routes until you configure it.

```JavaScript
const appRoutes: Routes = [
{ path: 'user/:id',      component: UserDetailComponent },
{
  path: 'users',
  component: UserListComponent,
  data: { title: 'Users List' }
},
{ path: '',
  redirectTo: '/users',
  pathMatch: 'full'
},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
imports: [
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  // other imports here
],
...
})

export class AppModule { } // app.module.ts
```


---


####  Ways of changing view
* Changing the URL manually
* Via Links

```HTML
 <a routerLink="/start"></a>
```

* Via Component logic
```JavaScript
this.router.navigate(['/user']);
```


---

#### Links & Outlets

* RouterOutlet is a directive from the router library that is used like a component. 
* It acts as a placeholder that marks the spot in the template where the router should display the components for that outlet.

```HTML
<h1>Angular Router</h1>
<nav>
<a routerLink="/users" routerLinkActive="active">Users</a>
<a routerLink="/profile" routerLinkActive="active">Profile</a>
</nav>
<router-outlet></router-outlet> <!-- Activated view will be rendered here -->
```


---

#### Route Parameters

* It is possible to send parameters through routes.
* Localhost:4200/user/12 <— 12 is the parameter
* Gets access to the param in the code


---

#### Route Parameters

```JavaScript
{ path: 'hero/:id', component: HeroDetailComponent } // setup in module
```

```HTML
<a [routerLink]="['/user', user.id]">
```


---

#### RouterState & ActivatedRoute

* RouterState = The state of the router.
* Snapshots of information of the Current state.
* ActivatedRoute = Information about the current route, params, url etc.


---

#### Access Route Parameters

* The parameters are stored in the ActivatedRoute.
* params is something callad an Observable (RxJS).
* We will discuss observables in more detail later on, for now just check the syntaxes to access the parameters.


```JavaScript
import { ActivatedRoute } from '@angular/router';

export class UserComponent implements OnInit {
constructor(private route: ActivatedRoute) {
}

ngOnInit() {
 this.route.params.subscribe(params => {
   console.log(params.id); // since :id was set in the module
 })
}
}
```


---

####  Router events
* Events that gets triggered related to the routing event.
* Needs to be subscribed to.

```JavaScript
constructor(private router:Router){
    router.events.subscribe((value)=> {
      console.log(value); // value from event
    })
}
```
* [Complete list](https://angular.io/guide/router)


---

#### Child routes

1. Setup in router config as children.
1. Add RouterLink and RouterOutlet as usual.
1. Check example code


---

#### Investigate Router Tree in Augury (developer console)


---

#### Guards

* A Guard is a Service that can be injected in the routing.
* Checks if expression is true.
* If true navigate otherwise don’t.
* Check example code.


---

#### Resolve

* If you need to do something before render new view.
* Fetching data for example.
* <a href="https://angular.io/api/router/Resolve"></a>Resolve API