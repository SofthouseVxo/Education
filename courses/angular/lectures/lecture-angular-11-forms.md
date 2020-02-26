### 11. Angular
#### Forms


---

####  HTML Forms
```HTML
<form> User INPUT </form>
```

* HTML & CSS <a href="../../lectures/html-css/html-css-10-forms.html" target="_blank">Forms lecture</a>


---

#### HTML forms
<img src="/media/angular-images/angular-11/httpform.png" alt="http form">


---


#### Angular Forms

* Forms can be quite complex.
* We don’t want to reload page.
* We want to handle user input in a neat way.
* We want to bind data between inputs and code.
* We want to be able to validate user input.


---


#### Angular Form types

* Template driven forms
* Reactive forms


---

<img src="/media/angular-images/angular-11/angforms.png" alt="angular forms">


---

#### Reactive and Template driven

* Reactive forms
  * More robust
  * More scalable, reusable, and testable.
  * Use if:    
    * Forms are a key part of your application
    * Using reactive patterns for building your application
* Template-driven forms
  * Simple form, easy to add to an app
  * Basic form requirements and logic that can be managed solely in the template, use template-driven forms.


---

#### Reactive and template-driven forms share underlying building blocks.

* **FormControl** tracks the value and validation status of an individual form control.
* **FormGroup** tracks the same values and status for a collection of form controls.
* **FormArray** tracks the same values and status for an array of form controls.
* **ControlValueAccessor** creates a bridge between Angular FormControl instances and native DOM elements.


---

#### Template-driven forms

* Binds directives to our templates.
* Binds to models, values and validation etc.
* The template does the work for us.
* [(ngModel)] -  two way data binding.


---

####  ngForm
```HTML
<form #loginForm="ngForm">
```
The variable loginForm is now a reference to the NgForm directive that governs the form as a whole.
![angular forms](../new-structure/media/angular/angular-11/ngform.png)

[Angular Documentation](https://angular.io/guide/forms)



---

#### Template-driven forms

* Each input element has an id property that is used by the label element's for attribute to match the label to its input control.
* Each input element has a name property that is required by Angular forms to register the control with the form.
* The source of truth is in the template.



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

### Check Template driven Forms examples on Github!


---


#### Reactive Forms

* More robust
* More scalable, reusable, and testable.
* Use if:
  * Forms are a key part of your application
  * You are using reactive patterns for building your application


---

<img src="/media/angular-images/angular-11/r-forms.png" alt="reactive forms overview">


---

#### Linking FormControls
<img src="/media/angular-images/angular-11/r-forms2.png" alt="linking FormControls">


---

#### FormGroups
<img src="/media/angular-images/angular-11/r-forms4.png" alt="FormGroups">


---

#### FormGroup
<img src="/media/angular-images/angular-11/r-forms5.png" alt="FormGroup">


---

Each change to the form state returns a new state, which maintains the integrity of the model between changes. Reactive forms are built around observable streams, where form inputs and values are provided as streams of input values, which can be accessed synchronously. - <a href="https://github.com/angular/angular/blob/master/aio/new-structure/guide/reactive-forms.md">Angular</a>


---

### Check Reactive Forms examples on Github!


---

#### Form validation

* To make sure all fields are filled in correct.
* Tell the user where they did wrong (visual feedback).
* Disable submit button.
* Validation is needed in backend as well.


---

#### Validation Template Driven forms

* Template-driven forms are tied to template directives, and must provide custom validator directives that wrap validation functions.
* Angular provides built in validators (Required, minLength etc.).
* Sets classes depending on state.
* You can build custom validators.


---

#### <a href="https://angular.io/api/forms/Validators">Built in validators</a>


---

#### Form / Controls States

* Valid - True if control valid
* Invalid - True if control invalid
* Untouched - True if control has not lost focus yet.
* Touched - True if control has lost focus.
* Pristine - True if user has not interacted with the control yet
* Dirty - True if user has already interacted with the control.



---


#### ngModel

* More than just two way binding
* Adds css classes depending on state

<img src="/media/angular-images/angular-11/ngmodel.png" alt="ng model">


---


#### Classes added by Angular (both to form and controls)

* ng-valid - True if control valid
* ng-invalid - True if control invalid
* ng-untouched - True if control has not lost focus yet.
* ng-touched - True if control has lost focus.
* ng-pristine - True if user has not interacted with the control yet
* ng-dirty - True if user has already interacted with the control.



---


#### Reactive forms validation

* Reactive forms define custom validators as functions that receive a control to validate.

<img style="width: 600px" src="/media/angular-images/angular-11/r-forms3.png" alt="code">


---


#### Built in validators

* Reactive forms define custom validators as functions that receive a control to validate.

<img style="width: 600px" src="/media/angular-images/angular-11/r-validators.png" alt="validators">


---