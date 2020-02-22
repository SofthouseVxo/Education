### 4. Angular
##### Components

---

#### Web Components
"Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps." - <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">MDN</a></p>

---

#### Web components

* Combination of three different technologies
  * Custom elements
  * Shadow DOM - <a href="https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/" target="_blank">What the heck is the Shadow DOM</a>
  * HTML Templates
  
* NOT SUPPORTED IN IE or Edge, polyfills needed.
* <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Documentation</a>

---

####  Custom elements

* You can add your own custom elements to a website
* If they are not defined in your JavaScript the browser fallbacks to create a HTMLElement object out of them.
* Try it in the browser, check if your new custom element has the HTMLElement properties and methods.
```HTML
<johndoe></johndoe>
<football></football>
```

---

####  Defining your own Custom element

* You can add your own custom elements to a website.

```HTML
<my-custom-element></my-custom-element>
```

```JavaScript
class MyCustomElement extends HTMLElement {...}

window.customElements.define('my-custom-element', MyCustomElement);
```

<a href="https://developers.google.com/web/fundamentals/web-components/customelements" target="_blank">Google Developers Reference</a>

---

#### Shadow DOM

* Shadow DOM allows us to hide DOM (trees) & logic behind other elements.
* If you want to dive deeper into this <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">MDN explains</a>.
<img width="600" src="/new/media/shadowdom.png" alt="shadow dom">

---

####  Templates

* The HTML Content Template ```<template></template>``` element can hold HTML that is not to be rendered immediately when a page is loaded.
* It can be be instantiated later using JavaScript.

```HTML
<div id="wrapper"></div>

<template id="my-template">
  <h1>A Header inside template</h1>
  <p>A paragraph inside template</p>
</template> 
```

```JavaScript
let template = document.getElementById('my-template');
let wrapper = document.getElementById("wrapper");
let clone = document.importNode(template.content, true);
wrapper.appendChild(clone);
```
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" target="_blank">MDN Reference</a>

---

#### Angular Components

* **Angular components** use web components techniques (Not shadow DOM by default, but can be set).
* Angular apps are built by composing components.
* We encapsulates out code in components.
* Every component represents a view.

---

#### Components
<img style="margin-top: -20px;" src="/new/media/components.png" alt="components">

---


#### Components
<img style="margin-top: -20px;" src="/new/media/components2.png" alt="components">

---


####  Create a new Angular app using Angular CLI

```
$ ng new <app name>
```

---

####  Generate a component using Angular CLI

```
$ ng generate component <component name>
$ ng g c <component name>
```
<img width="600" src="/new/media/generate.png" alt="generate in cli">

---

#### Component metadata
<img src="/new/media/meta.png" alt="components">

---


#### Component metadata

* @Component is a decorator function (metadata to Angular).
* Selector - works like css selectors attribute.
* TemplateUrl, template
* StyleUrl, StyleUrls: [], styles: [`h4: {color: blue}`] - CSS styles
* Providers - Services


---

#### Angular Decorators

* Decorators are simply functions that modify a class, property, method, or method parameter. The syntax is an “@” symbol followed by a function.
* @Component({metadata})
* <a href="https://toddmotto.com/angular-decorators" target="_blank">Angular Docs decorator explained</a>

---

####  Inspect and run App

* Open your newly created angular project, and we look at the component together.
* To run app, run:
```
$ ng serve --open
```


---

#### Data binding

* Communication between Component Class and Template.
* It is possible to bind data between the two.
* String interploation and attribution binding.

---


#### Data binding

* One-way - from data source to view target
* One-way - from view target to data source
* Two-way - view-to-source-to-view
* <a href="https://angular.io/guide/template-syntax#binding-syntax-an-overview" target="_blank">Binding syntax: an overview - Angular Docs</a>

---

<img src="/new/media/component3.png" alt="component overview">

---

####  Binding Data - String Interpolation
           
* {{ only for string or returns string}}
* One-way - from data source to view target

```JavaScript
@Component({
  selector: 'app-bind',
  template: `
    <h1>
      {{message}}
    </h1>
  `
})

export class BindComponent {
  message:string = 'Hello world!';
}
```

---

####  Binding Data - String Interpolation
           
* {{ only for string or returns string}}
* One-way - from data source to view target

```JavaScript
@Component({
  selector: 'app-bind',
  template: `
    <div>
      <p>The sum of 1 + 1 is {{1 + 1}}.</p>
      <p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}.</p>
    </div>
  `
})

export class BindComponent {
  getVal():number{
    return 5;
  } 
}
```

---

####  Binding Data - Attribute binding

* One-way - from data source to view target

```JavaScript
@Component({
  selector: 'app-bind',
  template: `
    <h1 [innerHTML]="message"></h1>
  `
})

export class BindComponent {
  message:string = 'Here comes Johnny!';
}
```

---

####  Handling input from users (responding to events)
           
* Binding - from view target to data source
* One-way

```JavaScript
@Component({
  selector: 'app-bind',
  template: `
    <button (click)="onClickMe($event)">Click me!</button>
    {{clickMessage}}
  `
})

export class BindComponent {
  clickMessage:string = '';

  onClickMe(e):void {
    console.log(e);
    this.clickMessage = 'You are my hero!';
  }
}
```

---

#### Two way data binding

* For data entry.
* Data flow both ways.
* We will look at this in more detail later.

---

#### HTML attribute vs. DOM property

* HTML attribute and the DOM property are different things, even when they have the same name.
* In Angular, the only role of HTML attributes is to initialize element and directive state.
* Template binding works with properties and events, not attributes.
* When you write a data-binding, you're dealing exclusively with the DOM properties and events of the target object.
* <a href="https://angular.io/guide/template-syntax#html-attribute-vs-dom-property" target="_blank">HTML attribute vs. DOM property - Angular Docs</a>

---

#### Binding types and targets
<img width="800" src="/new/media/binding1.png" alt="angular binding">

---

#### Binding types and targets
<img width="800" src="/new/media/binding2.png" alt="angular binding">

---

####  Template references
           
```JavaScript
@Component({
  selector: 'app-bind',
  template: `
    <ul class="custom-class" #ref>
      {{ref.className}}
    </ul>
  `
})

export class BindComponent {
}
```

---

####  Parent and children
            
* So Angular apps are built by composing components.
* This is done by placing components inside components.
* But how do these communicate with each other?

```JavaScript
@Component({
  selector: 'app-parent',
  template: `
    <app-child></app-child>
  `
})

export class ParentComponent {
  info:string = 'some information that is needed by the child';
}
```

---

#### @Input & @Output

* @Input - something you send into your component
* @Output - emit something from your component

---

####  Passing into component

```JavaScript
@Component({
  selector: 'app-parent',
  template: `
    <app-child [info]="info"></app-child>
  `
})

export class ParentComponent {
  info:string = 'some information that is needed by the child';
}
```

---


####  Inside child - @Input()

```JavaScript
@Component({
  selector: 'app-child',
  '<p>templateUr{{info}}</p>',
})
export class ChildComponent implements OnInit {     
  @Input() info: string;
}
```

---

####  Communicating child to parent

* onChangeInChild is a custom event created by us.
* In our directive/component (app-child) creates an EventEmitter and exposes it as a property.
* Parent directive (app-parent) listen for the event by binding a property and accessing the payload through the $event object.
            
```JavaScript
@Component({
  selector: 'app-parent',
  template: `
    <app-child (onChangeInChild)="methodInParent($event)"></app-child>
  `
})

export class ParentComponent {
  
  methodInParent(event){
    console.log('whats passed from event', event);
  }
}
```

---

####  Communicating from child to parent

* onChangeInChild is a custom event created by us.
* The directive calls EventEmitter.emit(payload) to fire an event, passing in a message payload, which can be anything. 

```JavaScript
@Component({
  selector: 'app-child',
  template: `
    <button (click)="onClickButton()"></button>
  `
})

export class ChildComponent {
  
  @Output() onChangeInChild = new EventEmitter<string>();

  onClickButton(){
    this.onChangeInChild.emit('Yo world!');
  }
}
```

---

#### @Viewchild

* Reference to a element/component/directive in the template.
* Check example code on Github.

---

#### Renderer2
"Extend this base class to implement custom rendering. By default, Angular renders a template into DOM. You can use custom rendering to intercept rendering calls, or to render to something other than DOM." - <a href="https://angular.io/api/core/Renderer2" target="blank">Angular Docs</a>