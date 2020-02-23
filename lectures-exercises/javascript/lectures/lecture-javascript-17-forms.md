### 17. JavaScript
#### Handling forms

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### If you do not know the basics of HTML forms check out the "HTML - Forms" lecture in the HTML & CSS course.
<a href="../../lectures/html-css/html-css-10-forms.html" target="_blank">Forms lecture</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Form events
* There are three main events that triggers when using forms
  * **submit** - Fires when the form is submitted. Can be used to check values before sending to backend.
  * **change**
    * Fires when the status of several form element change.
    * Selects, radio buttons, text etc. But does not fire until the field looses focus.
  * **input** - Fires every time an input changes in a form.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### submit event

```HTML
<form id="myForm" name="myForm">
  Name: <input id="nameInput" type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

```JavaScript
let myForm = document.getElementById('myForm');

// Fires when the form is submitted
myForm.addEventListener('submit', function(event){
  event.preventDefault(); // Preventing page reload
  console.log(this.elements.nameInput.value); // The value of the nameInput input
})
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### change event

```HTML
<form id="myForm" name="myForm">
  Name: <input id="nameInput" type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

```JavaScript
let myForm = document.getElementById('myForm');

// Fires when there are changes in the form
myForm.addEventListener('change', function(event){
  console.log(event.target.value); // the input node value
})
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### input event

```HTML
<form id="myForm" name="myForm">
  Name: <input id="nameInput" type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

```JavaScript
let myForm = document.getElementById('myForm');

// Every time a new letter is changed in the input field
myForm.addEventListener('input', function(event){
  console.log(event.target.value); // the input node
})
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Submitting and resetting from code

```HTML
<form id="myForm" name="myForm">
  Name: <input id="nameInput" type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

```JavaScript
let myForm = document.getElementById('myForm');

myForm.submit(); // Same function as clicking the submit button
myForm.reset(); // Resetting the form
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Form controls

* Form controls have different setups of properties, methods and events.

```HTML
<form id="myForm" name="myForm">
  <input id="nameInput" type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

```JavaScript
let nameInput = document.getElementById('nameInput');
nameInput.defualtValue = 'Some input';

nameInput.addEventListener('blur', function(event){
  console.log(event.target.disabled); // false
  console.log(event.target.form); // <form id="myForm" name="myForm">
})
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Form controls - accessing using "this"

* Form controls have different setups of properties, methods and events.

```HTML
<form id="myForm" name="myForm">
  <input id="nameInput" type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

```JavaScript
let nameInput = document.getElementById('nameInput');

nameInput.addEventListener('blur', function(){
  console.log(this.disabled); // false
  console.log(this.form); // <form id="myForm" name="myForm">
})
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Form controls - accessing using "this"

* Form controls have different setups of properties, methods and events.

```HTML
<form id="myForm" name="myForm">
  <input id="nameInput" type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

```JavaScript
let myForm = document.getElementById('myForm');

// Fires when the form is submitted
myForm.addEventListener('submit', function(event){
  event.preventDefault(); // Preventing page reload
  console.log(this); // <form id="myForm" name="myForm">
  console.log(this.elements.fname); // value of the fname input
})
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Form validation
* Why do we need to validate?
  * To make sure all fields are filled in correctly. If we need the user email we want to make sure that it is a valid email.
  * Tell the user where they did wrong (visual feedback).
  * Protect against XSS attacks.
  * Validation is needed in the backend as well.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Validating forms

```HTML
<form id="myForm" name="myForm">
  Name: <input type="text" name="fname">
  Password: <input type="password" name="fpassword">
  <input type="submit" value="Submit">
</form>
```

```JavaScript
let myForm = document.getElementById('my-form');

myForm.addEventListener('submit', function(event){
  event.preventDefault(); // Preventing page reload
  if(validateform(this.fname, this.fpassword)){
    myForm.submit();
  } else {
    alert('There is an error!');
  }
})

function validateform(name, password){  
  if (name.value == null || name.value == ""){  
    return false;
  }else if(password.value.length < 6){  
    return false;  
  }
  return true;
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>