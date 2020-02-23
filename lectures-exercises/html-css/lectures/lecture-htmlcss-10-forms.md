### 10.HTML & CSS
#### Forms

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### HTML Forms

* Forms are a way to collect data/input from users (Register, login, search etc.)
* An HTML form consists of form controls, which are different ways to collect information.
* Form elements are different types of input elements.
* Form element examples:
  * Text fields
  * Checkboxes
  * Radio buttons
  * Submit buttons
  * etc.



&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### HTML Forms
<img  src="/media/html-css-images/html-css-10/form.png" alt="How a HTML form is sent">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Name Value pairs
* Name value pairs are used so that the server can se which inputted data corresponds to which form element

```HTML
<!-- type=name text=value -->
<input type="text" name="username" />
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  The ```<form>``` element
* The ```<form>``` tag defines an HTML form for user input.
* action = the URL to the page on the server which receives the information (required).
* method = which method to use when sending information to the server (POST or GET (GET as default)).

```HTML
<form action="https://www.myserver.something.php" method="get">
  <input type="password" />
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  ```<input>``` element

* The ```<input>``` element is used to create several different form controls.
* Change the type attribute to detemine what kind.

```HTML
<input type="text" name="username" maxlength="15" />
<input type="email" name="email"/>
<input type="password" name="password" />
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Input elements
<input type="text" name="username" maxlength="15"/>
<br>
<br>
<input type="email" name="email"/>
<br>
<br>
<input type="password" name="password" />
<br>
<br>


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Labels and placeholders

```HTML
<label style="font-size: 12px;" for="username">Username:</label>
<input type="text" name="username" maxlength="15"/>
<label style="font-size: 12px;" for="email">Email:</label>
<input type="email" name="email" placeholder="Email.."/>
<label style="font-size: 12px;" for="password">Password:</label>
<input type="password" name="password" />
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Labels and placeholders
<label style="font-size: 12px;" for="username">Username:</label>
<input type="text" name="username" maxlength="15" label="username"/>
<br>
<br>
<label style="font-size: 12px;" for="email">Email:</label>
<input style="margin-left: 24px;" type="email" name="email" placeholder="Email.."/>
<br>
<br>
<label style="font-size: 12px;" for="password">Password:</label>
<input style="margin-left: 1px;" type="password" name="password" />
<br>
<br>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  ```<textarea>``` element

* ```<textarea>``` is used for Multi-line text input.

```HTML
<textarea name="comments" cols="15" rows="6">
Enter your comments here...
</textarea>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Textarea
<textarea name="comments" cols="40" rows="6">Enter your comments here...</textarea>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Radio Buttons

* Picking just one of a number of options.

```HTML
<form action="https://www.myserver.something.php" method="get">
  <input type="radio" name="animal" value="cow" checked="checked"/> cow
  <input type="radio" name="animal" value="pig" /> pig
  <input type="radio" name="animal" value="chicken" /> chicken
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Radio buttons
<form action="https://www.myserver.something.php" method="get">
  <input type="radio" name="animal" value="cow" checked="checked"/> cow
  <br>
  <input type="radio" name="animal" value="pig" /> pig
  <br>
  <input type="radio" name="animal" value="chicken" /> chicken
</form>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Checkboxes

* Select one or more options.

```HTML
<form action="https://www.myserver.something.php" method="get">
  <input type="checkbox" name="animal" value="cow" checked="checked"/> cow
  <input type="checkbox" name="animal" value="pig" checked="checked"/> pig
  <input type="checkbox" name="animal" value="pig" /> chicken
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Checkboxes
<form action="https://www.myserver.something.php" method="get">
  <input type="checkbox" name="animal" value="cow" checked="checked"/> cow
  <br>
  <input type="checkbox" name="animal" value="pig" checked="checked"/> pig
  <br>
  <input type="checkbox" name="animal" value="pig" /> chicken
</form>


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Dropdown list

* Select one option from a dropdown list.

```HTML
<form action="http://www.somesite.com/somedoc.php">
  <p>What is your favorite fruit?</p>
  <select name="fruits">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="lemon">Lemon</option>
  </select>
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Dropdown list
<form action="http://www.somesite.com/somedoc.php">
  <p>What is your favorite fruit?</p>
  <select name="fruits">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="lemon">Lemon</option>
  </select>
</form>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  File upload

* type="file" is used for uploading files to the server via a form.

```HTML
<form action="http://www.somesite.com/somedoc.php" method="post">
  <p>Upload your profile picture</p>
  <input type="file" name="user-profile" /><br />
  <input type="submit" value="Upload" />
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### File upload
<form action="http://www.somesite.com/somedoc.php" method="post">
  <p>Upload your profile picture</p>
  <input type="file" name="user-profile" /><br />
  <input type="submit" value="Upload" />
</form>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Submitting the form

* Pressing the submit button sends the form to the server
* ```<input type="submit"/>```

```HTML
<form action="http://www.somesite.com/somedoc.php" method="get">
  <input type="text" name="username"/>
  <input type="submit" name="submit" value="submit"/>
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
<!--<section>
#### Submit button

  * Check in devtools (network -> XHR)

<form action="http://www.somesite.com/somedoc.php" method="get">
  <input type="text" name="username"/>
  <input type="submit" name="submit" value="submit"/>
</form>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

----->

####  Date input
```<input type="date"/>```

```HTML
<form action="http://www.somesite.com/somedoc.php">
  <input type="date" name="startdate"/>
  <input type="submit" name="submit" value="submit"/>
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Date input
<form action="http://www.somesite.com/somedoc.php">
  <input type="date" name="startdate"/>
  <input type="submit" name="submit" value="submit"/>
</form>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Email & Url

```HTML
<form action="http://www.somesite.com/somedoc.php">
  <input type="email" name="email"/>
  <input type="url" name="url"/>
  <input type="submit" name="submit" value="submit"/>
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Email & Url
<form action="http://www.somesite.com/somedoc.php">
  <input type="email" name="email"/>
  <input type="url" name="url"/>
  <input type="submit" name="submit" value="submit"/>
</form>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Form validation
* Showing a message to the user if they forgot a field
* More advanced validation is done using JavaScript

```HTML
<form action="http://www.somesite.com/somedoc.php" method="post">
  <input required="required" type="text" name="username"/>
  <input type="submit" name="submit" value="submit"/>
</form>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Form validation
<form action="http://www.somesite.com/somedoc.php" method="post">
  <input required="required" type="text" name="username"/>
  <input type="submit" name="submit" value="submit"/>
</form>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Grouping form elements

```HTML
<form action="http://www.somesite.com/somedoc.php" method="post">
  <fieldset>
    <legend>Contact details</legend>
    <label>Email:<br /><input type="text" name="email" /></label><br />
    <label>Mobile:<br /><input type="text" name="mobile" /></label><br />
    <label>Telephone:<br /><input type="text" name="telephone" /></label>
  </fieldset>
</form>
```