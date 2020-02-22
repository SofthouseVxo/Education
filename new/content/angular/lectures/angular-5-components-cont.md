<!doctype html>
<html>
	<head>
    <title>Angular - Components cont.</title>
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

### 5. Angular</h3>
##### Components and styles, lifecycles etc.</h5>

---


####  Component styling
            ```JavaScript
            @Component({
              selector: 'app-meta-styles',
              template: `
                <h1>Hello world!</h1>
                <p>Hello Växjö!</p>
              `,
              styles: ['h1 { font-weight: normal; }']
            })
            ```


---


####  Component styling - import Url
            ```JavaScript
            @Component({
              selector: 'app-meta-styles',
              template: `
                <h1>Hello world!</h1>
                <p>Hello Växjö!</p>
              `,
              styleUrls: ['./meta-styles.component.css']
            })
            ```


---


####  Component styling - Style element
            ```JavaScript
            @Component({
              selector: 'app-meta-styles',
              template: `
                <style>
                  h1 { font-weight: normal; }
                </style>
                <h1>Hello world!</h1>
                <p>Hello Växjö!</p>
              `
            })
            ```


---


####  Component styling - Linking
            ```JavaScript
            @Component({
              selector: 'app-meta-styles',
              template: `
                <!-- Relative path needed -->
                <link rel="stylesheet" href="../assets/some-style.component.css">
                <h1>Hello world!</h1>
                <p>Hello Växjö!</p>
              `
            })
            ```


---


####  Component styling - import inside CSS
            ```CSS
              /* The AOT compiler needs the `./` to show that this is local */
              @import './some-style.css';
            ```


---


#### Component Styling</h4>
          <ul>
            <li>Styles in a @Component metadata apply only within the template (scope) of that component.</li>
            <li>This is called View encapsulation.</li>
          </ul>

---


#### Style Scope</h4>
          <ul>
            <li>This means that you can:</li>
            <ul>
              <li>Use the CSS class names and selectors that make the most sense in the context of each component.</li>
              <li>Class names and selectors are local to the component and don't collide with classes and selectors used elsewhere in the application.</li>
              <li>Changes to styles elsewhere in the application don't affect the component's styles.</li>
              <li>You can co-locate the CSS code of each component with the TypeScript and HTML code of the component, which leads to a neat and tidy project structure.</li>
              <li>You can change or remove component CSS code without searching through the whole application to find where else the code is used.</li>
            </ul>
          </ul>

---


####  Host style

* :host pseudo-class selector to target styles in the element that hosts the component
* ```<app-style></app-style>``` element will get background color red.
            
            ```JavaScript
            @Component({
              selector: 'app-style',
              template: '<h1>Hellow world</h1>',
              styles: [':host { background: red; }']
            })
            ```


---


####  ```:host-context()```
* The ```:host-context()``` selector looks for a CSS class in any ancestor of the component host element, up to the document root. 
* The ```:host-context()``` selector is useful when combined with another selector.
* The following example applies a background-color style to all ```<h2>``` elements inside the component, only if some ancestor element has the CSS class theme-light.
            
            ```JavaScript
            @Component({
              selector: 'app-style',
              template: '<h1>Hellow world</h1>',
              styles: [`
              :host-context(.theme-light) h2 {
                background-color: #eef;
              }`]
            })
            ```


---


####  Global styles
            
* Global styles are stored in ```styles.css```.
* To include external assets these needs to be added in the angular.json file.

            angular.json
            ```JSON
              "styles": [
                "src/styles.css",
                "node_modules/bootstrap/dist/css/bootstrap.min.css"
              ],
            ```


---


#### View encapsulation modes</h4>
          <ul>
            <li>ShadowDom - browser's native shadow DOM implementation</li>
            <li>Native - deprecated version of the browser's native shadow DOM implementation </li>
            <li>Emulated - (the default) emulates the behavior of shadow DOM by preprocessing (and renaming) the CSS code to effectively scope the CSS to the component's view.</li>
            <li>None - means that Angular does no view encapsulation. Angular adds the CSS to the global styles.</li>
            <li><a href="https://angular.io/guide/component-styles">Read more at Angular docs -> View Encapsulation</a></li>
          </ul>

---


####  Emulated view incapsulation

            in head
            ```CSS
            h3[_ngcontent-pmm-5] {
              background-color: white;
              border: 1px solid #777;
            }
            ```

            in body
            ```HTML
            <h2 _ngcontent-pmm-5>Mister Fantastic</h2>
            ```


---


#### Component lifecycle</h4>

---
        

#### Component lifecycle</h4>
          <ol>
            <li>Angular creates an instance component.</li>
            <li>Renders the component.</li>
            <li>Creates and renders its children.</li>
            <li>Checks its data-bound properties change.</li>
            <li>Destroys it before removing it from the DOM.</li>
          </ol>

---
        

#### Lifecycle hooks</h4>
          <ul>
            <li>Angular offers lifecycle hooks that provide visibility into these key events.</li>
            <li>Directives have the same events (Since a component is a directive with a template)</li>
            <li>Implements OnInit, OnDestroy (interface).</li>
          </ul>

---
        

####  Lifecycle hooks

* The lifecycle hooks are <a href="https://www.typescriptlang.org/docs/handbook/interfaces.html" target="_blank">Interfaces</a>.
* Each interface has a single hook method whose name is the interface name prefixed with ng.
* In the example beneath typescript will throw and error during compilation if we remove the ngOnInit method.
                 
            ```JavaScript
            export class PeekABoo implements OnInit {
              constructor(private logger: LoggerService) { }
            
              // implement OnInit's `ngOnInit` method
              ngOnInit() { this.logIt(`OnInit`); }
            
              logIt(msg: string) {
                this.logger.log(`#${nextId++} ${msg}`);
              }
            }
            ```


---


#### <a href="https://angular.io/guide/lifecycle-hooks#component-lifecycle-hooks-overview">List of all lifecycle hooks</a></h4>

---


#### Dynamic components</h4>
          <ul>
            <li>Component templates are not always fixed.</li>
            <li>An application may need to load new components at runtime.</li>
            <li>Doing this in code will be done later in the course.</li>
          </ul>

---
