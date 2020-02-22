<!doctype html>
<html>
	<head>
    <title>Angular - Forms</title>
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

### 11. Angular</h3>
##### Forms</h5>

---


####  HTML Forms
            ```HTML
            <form> User INPUT </form>
            ```
* HTML & CSS <a href="../../lectures/html-css/html-css-10-forms.html" target="_blank">Forms lecture</a>



---


#### HTML forms</h4>
  <img src="../../media/httpform.png" alt="http form">

---


#### Angular Forms</h4>
          <ul>
            <li>Forms can be quite complex.</li>
            <li>We don’t want to reload page.</li>
            <li>We want to handle user input in a neat way.</li>
            <li>We want to bind data between inputs and code.</li>
            <li>We want to be able to validate user input.</li>
          </ul>

---


#### Angular Form types</h4>
          <ul>
            <li>Template driven forms</li>
            <li>Reactive forms</li>
          </ul>

---


  <img src="../../media/angforms.png" alt="angular forms">

---


#### Reactive and Template driven</h4>
          <ul>
            <li>Reactive forms</li>
            <ul>
              <li>More robust</li>
              <li>More scalable, reusable, and testable.</li>
              <li>Use if:</li>
              <ul>
                <li>Forms are a key part of your application</li>
                <li>Using reactive patterns for building your application</li>
              </ul>
            </ul>
            <li>Template-driven forms</li>
            <ul>
              <li>Simple form, easy to add to an app</li>
              <li>Basic form requirements and logic that can be managed solely in the template, use template-driven forms.
            </ul>
          </ul>

---


#### Reactive and template-driven forms share underlying building blocks.</h4>
          <ul>
            <li><b>FormControl</b> tracks the value and validation status of an individual form control.</li>
            <li><b>FormGroup</b> tracks the same values and status for a collection of form controls.</li>
            <li><b>FormArray</b> tracks the same values and status for an array of form controls.</li>
            <li><b>ControlValueAccessor</b> creates a bridge between Angular FormControl instances and native DOM elements.</li>
          </ul>

---


#### Template-driven forms</h4>
          <ul>
            <li>Binds directives to our templates.</li>
            <li>Binds to models, values and validation etc.</li>
            <li>The template does the work for us.</li>
            <li>[(ngModel)] -  two way data binding.</li>
          </ul>

---


####  ngForm
            ```HTML
            <form #loginForm="ngForm">
            ```
            The variable loginForm is now a reference to the NgForm directive that governs the form as a whole.
            ![angular forms](media/angular/angular-11/ngform.png)

            [Angular Documentation](https://angular.io/guide/forms)


---


#### Template-driven forms</h4>
          <ul>
            <li>Each input element has an id property that is used by the label element's for attribute to match the label to its input control.</li>
            <li>Each input element has a name property that is required by Angular forms to register the control with the form.</li>
            <li>The source of truth is in the template.</li>
          </ul>

---


####  Template driven form
            ```HTML
            <form (ngSubmit)="onSubmit()" #userForm="ngForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input id="name" [(ngModel)]="model.name" name="name" type="text">
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            ```
            ```JavaScript
            export class SimpleFormComponent {
              name:string = '';        
              onSubmit() {
                console.log(this.name);
                this.submitted = true;
              }
            }
            ```


---


####  Domain models

* A model of a domain should be structured.
* Can be a class, a plain class which we will use to store data and functions.
* Remember TypeScript interfaces?

            ```JavaScript
            export class User {
              constructor(
                public id: number,
                public name: string,
                public age: number,
              ) {  }
            }
            ```


---


### Check Template driven Forms examples on Github!</h3>

---


#### Reactive Forms</h4>
          <ul>
            <li>More robust</li>
            <li>More scalable, reusable, and testable.</li>
            <li>Use if:</li>
            <ul>
              <li>Forms are a key part of your application</li>
              <li>You are using reactive patterns for building your application</li>
            </ul>
          </ul>

---


  <img src="../../media/r-forms.png" alt="reactive forms overview">

---


#### Linking FormControls</h4>
  <img src="../../media/r-forms2.png" alt="linking FormControls">

---


#### FormGroups</h4>
  <img src="../../media/r-forms4.png" alt="FormGroups">

---


#### FormGroup</h4>
  <img src="../../media/r-forms5.png" alt="FormGroup">

---


          <p>Each change to the form state returns a new state, which maintains the integrity of the model between changes. Reactive forms are built around observable streams, where form inputs and values are provided as streams of input values, which can be accessed synchronously. - <a href="https://github.com/angular/angular/blob/master/aio/content/guide/reactive-forms.md">Angular</a></p>

---


### Check Reactive Forms examples on Github!</h3>

---


#### Form validation</h4>
          <ul>
            <li>To make sure all fields are filled in correct.</li>
            <li>Tell the user where they did wrong (visual feedback).</li>
            <li>Disable submit button.</li>
            <li>Validation is needed in backend as well.</li>
          </ul>

---


#### Validation Template Driven forms</h4>
          <ul>
            <li>Template-driven forms are tied to template directives, and must provide custom validator directives that wrap validation functions.</li>
            <li>Angular provides built in validators (Required, minLength etc.).</li>
            <li>Sets classes depending on state.</li>
            <li>You can build custom validators.</li>
          </ul>

---


#### <a href="https://angular.io/api/forms/Validators">Built in validators</a></h4>

---


#### Form / Controls States</h4>
          <ul>
            <li>Valid - True if control valid</li>
            <li>Invalid - True if control invalid</li>
            <li>Untouched - True if control has not lost focus yet.</li>
            <li>Touched - True if control has lost focus.</li>
            <li>Pristine - True if user has not interacted with the control yet</li>
            <li>Dirty - True if user has already interacted with the control.</li>
          </ul>

---


#### ngModel</h4>
          <ul>
            <li>More than just two way binding</li>
            <li>Adds css classes depending on state</li>
          </ul>
  <img src="../../media/ngmodel.png" alt="ng model">

---


#### Classes added by Angular (both to form and controls)</h4>
          <ul>
            <li>ng-valid - True if control valid</li>
            <li>ng-invalid - True if control invalid</li>
            <li>ng-untouched - True if control has not lost focus yet.</li>
            <li>ng-touched - True if control has lost focus.</li>
            <li>ng-pristine - True if user has not interacted with the control yet</li>
            <li>ng-dirty - True if user has already interacted with the control.</li>
          </ul>

---


#### Reactive forms validation</h4>
          <ul>
            <li>Reactive forms define custom validators as functions that receive a control to validate.</li>
          </ul>
  <img style="width: 600px" src="../../media/r-forms3.png" alt="code">

---


#### Built in validators</h4>
          <ul>
            <li>Reactive forms define custom validators as functions that receive a control to validate.</li>
          </ul>
  <img style="width: 600px" src="../../media/r-validators.png" alt="validators">

---

