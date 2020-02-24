### 5. Angular</h3>
#### Components and styles, lifecycles etc.</h5>


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


#### Component Styling

* Styles in a @Component metadata apply only within the template (scope) of that component.
* This is called View encapsulation.



---


#### Style Scope

* This means that you can:
  
  * Use the CSS class names and selectors that make the most sense in the context of each component.
  * Class names and selectors are local to the component and don't collide with classes and selectors used elsewhere in the application.
  * Changes to styles elsewhere in the application don't affect the component's styles.
  * You can co-locate the CSS code of each component with the TypeScript and HTML code of the component, which leads to a neat and tidy project structure.
  * You can change or remove component CSS code without searching through the whole application to find where else the code is used.
  



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


#### View encapsulation modes

* ShadowDom - browser's native shadow DOM implementation
* Native - deprecated version of the browser's native shadow DOM implementation 
* Emulated - (the default) emulates the behavior of shadow DOM by preprocessing (and renaming) the CSS code to effectively scope the CSS to the component's view.
* None - means that Angular does no view encapsulation. Angular adds the CSS to the global styles.
* <a href="https://angular.io/guide/component-styles">Read more at Angular docs -> View Encapsulation</a>



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


#### Component lifecycle


---
        

#### Component lifecycle

1. Angular creates an instance component.
1. Renders the component.
1. Creates and renders its children.
1. Checks its data-bound properties change.
1. Destroys it before removing it from the DOM.


---
        

#### Lifecycle hooks

* Angular offers lifecycle hooks that provide visibility into these key events.
* Directives have the same events (Since a component is a directive with a template)
* Implements OnInit, OnDestroy (interface).



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

#### <a href="https://angular.io/guide/lifecycle-hooks#component-lifecycle-hooks-overview">List of all lifecycle hooks</a>


---

#### Dynamic components

* Component templates are not always fixed.
* An application may need to load new components at runtime.
* Doing this in code will be done later in the course.


---