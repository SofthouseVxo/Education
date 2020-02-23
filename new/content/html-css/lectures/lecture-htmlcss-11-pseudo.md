### 11.HTML & CSS
##### Pseudo elements, Iframes and CSS variables
---

####  Pseudo-elements
* Pseudo-elements acts like an extra element is in the code.
* They are used to style specified parts of an element.
* Example below ::first-letter is like an extra element around the first letter

```HTML
<p class="myClass">Hello world!</p>
```

```CSS
.myClass::first-letter {
  color: blue;
}
```
[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_firstletter)

---

####  Pseudo-classes
* Pseudo-classes acts like an extra value for a class attribute.
* They are used to define a special state of an element.
* Example below :hover pseudo class allows you to have extra styles when you hover over that element with the cursor.

```HTML
<p class="myClass">Hello world!</p>
```

```CSS
.myClass:hover {
  color: blue;
}
```
[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_pseudo-class_hover_div)

---

####  Remember the psuedo classes for links?

```CSS
/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: hotpink;
  text-decoration: underline;
}

/* selected link */
a:active {
  color: blue;
}
```

---

#### :: vs :

* The double colon replaced the single-colon notation for pseudo-elements in CSS3.
* Pseudo-elements uses double ::
* Pseudo-classes uses single :

---

####  Before and after with content

```HTML
<p>Hello World!</p>
```
```CSS
p::before { 
  content: "«";
  color: blue;
}

p::after { 
  content: "»";
  color: red;
}
```

«Hello World!»

[More about content on w3schools](https://www.w3schools.com/cssref/pr_gen_content.asp)

---

#### CSS content only works with ::before or ::after
---

#### Iframes

* Iframes are windows that you cut out from your page, which can be displayed in another page.
* You can embed Google maps, Google docs, Youtube videos for example.

---

####  Youtube video in an iframe
```HTML
<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```

---

#### Youtube video in an iframe

* We display youtube content on this site.
* Meaning that if youtube crashes or being remved from the service, the video will not be displayed properly.

<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
---

#### Go to youtube and google maps to get code for embedding.
---

####  CSS variables
* What is a variable?
* Temporary storage for bits of information.
* A variable is like a drawer or a box.
* You can put a value/thing in it, close it and then when you want to use it you open the drawer.

---

####  CSS variables

```CSS
/* :root or the body can be used for global scope classes
  use double dash (--) to declare a CSS variable */
:root {
  --main-bg-color: coral;
}

/* the color can now be used in multiple places */
#div1 {
  background-color: var(--main-bg-color);
}

#div2 {
  background-color: var(--main-bg-color);
}
```
[w3schools](https://www.w3schools.com/css/css3_variables.asp)