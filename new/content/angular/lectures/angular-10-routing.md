<!doctype html>
<html>
	<head>
    <title>Angular - Router</title>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<link rel="stylesheet" href="../../libs/reveal/css/reset.css">
		<link rel="stylesheet" href="../../libs/reveal/css/reveal.css">
		<link rel="stylesheet" href="../../libs/reveal/css/theme/softhouse.css">

		<link rel="stylesheet" href="../../libs/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../style.css">

		<script src="../../libs/jquery/jquery.min.js"></script>
		<script src="../../libs/bootstrap/js/bootstrap.min.js"></script>


		<!-- Theme used for syntax highlighting of code -->
		<link rel="stylesheet" href="../../libs/reveal/lib/css/monokai.css">
	</head>
	<body>
		<nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top shadow-lg">
			<a class="navbar-brand" href="https://www.softhouse.se">
				<?xml version="1.0" encoding="utf-8"?>
				<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 928 179" style="enable-background:new 0 0 928 179;" xml:space="preserve">
				<style type="text/css">
					.st0{fill:#FFFFFF;}
				</style>
				<g>
					<path class="st0" d="M795,121.4c-9.5,4.3-6.3,24.8-15.8,31.6c-5.3,3.8-31,4-34.3-3.8c-4.7-11.1,30.2-28.8,23.5-38.9
						c-8.6-12.9-58.5-8.8-61.6-18c-1-3.1,7-17.5,17.7-18.8c11.8-1.9,31.6,19.9,48.2,19.4c32.2-1.1,34.9-51.8,58.5-58
						c20.7-5.4,37.6-1.6,38.8,7.3c2.2,17.3-59.7,45.1-55.8,59.8c4.9,18.6,74.6,26.4,73.8,41.5c-0.4,7.2-13.7,12.5-25.1,9.6
						C840.6,147.4,818.1,111,795,121.4 M866.5,166.7c20.8,6.4,53.4,1.7,54.2-13.4c1.5-30.6-93.3-36.1-99.1-53
						c-3.8-11.2,85.4-49.2,83.1-73.3c-1.4-15.1-33.7-18-62.2-12.1C787.6,26,807.3,84,772.8,86.7c-14.9,1.2-32.8-26.1-54.2-26.1
						c-13.9,0-33,25.6-30.3,33.2c5.8,16.9,63.6,6.4,73.2,20.1c5.8,8.2-36,26.9-27.8,45.2c4.6,10.2,40.9,14.6,52.1,5
						c9.3-7.9,4.9-34.5,12.1-37.7C814.7,119,839.5,158.4,866.5,166.7"/>
					<path class="st0" d="M62.8,101.3H21.3v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H11v-8.7h42.7l0-10.7H23.3
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M571.8,101.3h-41.4v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H520v-8.7h42.7v-10.7h-30.4
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M81.5,103.9v24.5c0,8.8,2.9,11,12.2,11H130c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11H93.7
						C84.5,92.9,81.5,95,81.5,103.9 M93,101.5h37.9v29H93V101.5z"/>
				</g>
				<polygon class="st0" points="159.8,92.9 209.3,92.9 209.3,101.3 171.3,101.3 171.3,113.4 197.2,113.4 197.2,122.1 171.3,122.1
					171.3,139.5 159.8,139.5 "/>
				<polygon class="st0" points="256.5,139.5 245.1,139.5 245.1,101.3 222.6,101.3 222.6,92.9 279.3,92.9 279.3,101.3 256.5,101.3 "/>
				<polygon class="st0" points="292.5,92.9 304,92.9 304,110.6 339.7,110.6 339.7,92.9 351.2,92.9 351.2,139.5 339.7,139.5
					339.7,119.9 304,119.9 304,139.5 292.5,139.5 "/>
				<g>
					<path class="st0" d="M368.6,103.9v24.5c0,8.8,2.9,11,12.2,11h36.3c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11h-36.3
						C371.6,92.9,368.6,95,368.6,103.9 M380.1,101.5h37.8v29h-37.8V101.5z"/>
					<path class="st0" d="M458.3,130.8H491V92.9h11.5v35.5c0,8.7-3,11-12.3,11h-31.1c-9.3,0-12.2-2.3-12.2-11V92.9h11.4V130.8z"/>
				</g>
				<polygon class="st0" points="590.5,92.9 640.9,92.9 640.9,101.2 602.1,101.2 602.1,111.3 627.1,111.3 627.1,119.4 602.1,119.4
					602.1,130.8 641.5,130.8 641.5,139.5 590.5,139.5 "/>
				</svg>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav m-auto">
					<script src="../../navigation.js"></script>
				</ul>
			</div>
		</nav>
		
		<div class="reveal">
			<div class="slides">

### 10. Angular</h3>
##### Routing and Navigation</h5>

---


          <p>"The Angular Router enables navigation from one view to the next as users perform application tasks." - <a href="https://angular.io/guide/router" target="_blank">Angular Docs</a></p>

---


### What ways are there to navigate in the browser?</h3>

---


#### Browser navigation</h4>
          <ul>
            <li>URL in the address bar -> browser navigates to a corresponding page.</li>
            <li>Click links on the page -> browser navigates to a new page.</li>
            <li>Browser's back and forward buttons -> browser navigates backward and forward through the history of pages.</li>
          </ul>

---


#### The Angular Router makes it possible to do this on our single page app (SPA).</h4>

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


          <p>"A routed Angular application has one singleton instance of the Router service. When the browser's URL changes, that router looks for a corresponding Route from which it can determine the component to display." - <a href="https://angular.io/guide/router" target="_blank">Angular Docs</a></p>

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


#### Route Parameters</h4>
          <ul>
            <li>It is possible to send parameters through routes.</li>
            <li>Localhost:4200/user/12 <— 12 is the parameter</li>
            <li>Gets access to the param in the code</li>
          </ul>

---


          #### Route Parameters

          ```JavaScript
          { path: 'hero/:id', component: HeroDetailComponent } // setup in module
          ```

          ```HTML
          <a [routerLink]="['/user', user.id]">
          ```


---


#### RouterState & ActivatedRoute</h4>
          <ul>
            <li>RouterState = The state of the router.</li>
            <li>Snapshots of information of the Current state.</li>
            <li>ActivatedRoute = Information about the current route, params, url etc.</li>
          </ul>

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


#### Child routes</h4>
          <ol>
            <li>Setup in router config as children.</li>
            <li>Add RouterLink and RouterOutlet as usual.</li>
            <li>Check example code</li>
          </ol>

---


#### Investigate Router Tree in Augury (developer console)</h4>

---


#### Guards</h4>
          <ul>
            <li>A Guard is a Service that can be injected in the routing.</li>
            <li>Checks if expression is true.</li>
            <li>If true navigate otherwise don’t.</li>
            <li>Check example code.</li>
          </ul>

---


#### Resolve</h4>
          <ul>
            <li>If you need to do something before render new view.</li>
            <li>Fetching data for example.</li>
            <li><a href="https://angular.io/api/router/Resolve"></a>Resolve API</li>
          </ul>

---

