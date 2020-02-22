<!doctype html>
<html>
	<head>
    <title>Angular - Directives</title>
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

### 6. Angular</h3>
##### Directives</h5>

---


#### Directives</h4>
          <ul>
            <li>A Directive is a Component without a template.</li>
            <li>Directives are mainly used to manipulate the DOM.</li>
          </ul>

---


#### Different kinds of directives</h4>
          <ul>
            <li><b>Component</b> - Directive with a template.</li>
						<li><b>Attribute directives</b>
							<ul>
								<li>Changes the appearance or behavior of an element, component, or another directive.</li>
								<li>Sits on elements like attributes - changes the properties of that element.</li>
							</ul>
						</li>
						<li><b>Structural directives</b>
							<ul>
								<li>Change the DOM layout by adding and removing DOM elements.</li>
								<li>Structural Directives - Also changes the DOM around it (*ngIf, *ngFor)</li>
							</ul>
					</li>
          </ul>

---
				

#### Built in directives</h4>
					<ul>
						<li>There are many built in directives but the most common are:
							<li>NgClass — adds and removes a set of CSS classes.</li>
							<li>NgStyle — adds and removes a set of HTML styles.</li>
							<li>NgModel — adds two-way data binding to an HTML form element.</li>
						</li>
					</ul>

---


  <img src="/new/media/directives.png" alt="directives">

---


						#### *ngIf
						
						* Renders if a condition is true
           
```JavaScript
@Component({
	selector: 'app-if',
	template: `
		<h2 (click)="onClick()">A header</h2>
		<p *ngIf="show">Hello</p>
	`
})
export class IfComponent {

	show:boolean = true;
		
	onClick($event):void{
		this.show = !this.show;
	}
}
```


---
				

						#### ngSwitch
						
						* Depending on what fruit is a different template is rendered.
						* Like a switch case.
           
```JavaScript
@Component({
	selector: 'app-switch',
	template: `
		<div [ngSwitch]="fruit">
			<orange-component *ngSwitchCase="'orange'"></orange-component>
			<apple-component *ngSwitchCase="'apple'"></some-other-component>
			<pear-component *ngSwitchCase="'pear'"></pear-component>
			<unknown-component  *ngSwitchDefault ></unknown-component>
		</div>
	`
})
export class SwitchComponent {

	fruit:string = 'pear';
		
}
```


---
				

						#### *ngFor
						
						* Renders for each item.
           
```JavaScript
@Component({
	selector: 'app-bind',
	template: `
		<ul>
			<li *ngFor="let item of items">
				{{item}}
			</li>
		</ul>
	`
})

export class BindComponent {
	items: string[] = ['item1', 'item2'];
}
```


---


#### Two way data binding</h4>
          <ul>
            <li>For data entry</li>
            <li>FormsModule required</li>
            <li>Data flow both ways</li>
            <li>[(ngModel)]</li>
          </ul>

---
				

####  [(ngModel)]
           
```JavaScript
@Component({
	selector: 'app-two-way',
	template: `
		<input
			[(ngModel)]="text"
			(keyup)="onKey($event)"
		>
	`
})
export class TwoWayComponent {

	text:string;
		
	onKey($event):void{
		console.log($event.target.value);
		console.log(this.text);
	}
}
```


---


#### <a href="https://angular.io/guide/cheatsheet">Angular Cheat sheet</a></h4>

---


#### Example of creating your own directive</h4>

---


