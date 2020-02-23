### 6.HTML & CSS
#### Cascading Style Sheets

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### HTML, CSS and JavaScript
* HTML is used to create the basic structure and content of a webpage (the skeleton).
* **CSS is used for the design of a webpage – where everything is placed and how it looks (body).**
* JavaScript is used to define the interactive elements of a webpage making it dynamic (muscles).

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### What is CSS?
* CSS stands for Cascading Style Sheets.
* A Style Sheet is a collection of style rules.
* CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
* CSS associates style rules with HTML elements.
* CSS rules can be applied on just one or multiple HTML elements.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Examples of different styles
* Color
* Background color
* Size
* Font
* Border

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  CSS example



&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### CSS Example
<img src="/media/html-css-images/html-css-5/box.png" alt="div with styles">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Web page with CSS
<img src="/media/html-css-images/html-css-5/withCSS.png" alt="web page with css">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Web page without CSS
<img src="/media/html-css-images/html-css-5/withoutCSS.png" alt="web page without css">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Selectors and Declarations

* The selector indicates which element the CSS rule applies to.
* The declaration indicates how the element should be styled.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  CSS can be added to HTML elements in 3 ways

* Inline - by using the style attribute in HTML elements.
* Internal - by using a ```<style>``` element in the ```<head>``` section.
* External - by using an external CSS file.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Inline CSS
* Inline CSS applies a unique style to a single HTML element.
* Inline CSS uses the style attribute.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Internal Style sheet
* Internal style sheets may be used if one single page has a unique style.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  External Stylesheet
* External style sheets are used to define the style for one or many HTML pages.
* This means that external style sheets can change the look of an entire web site, by changing one file!
* To use an external style sheet, add a link to it in the ```<head>``` section of the HTML page.
```
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  External Stylesheet

```CSS
/* styles.css */
body {
  background-color: powderblue;
}

h1 {
  color: blue;
}

p {
  color: red;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Invisible box around every element
* Every element has an invisible box around them.
<img src="/media/html-css-images/html-css-5/invisBox.png" alt="invisible element boxes">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Block and Inline elements
* Block-level elements always starts on a new line and takes up the full width available.
* Inline elements does not start on a new line and only takes up as much width as necessary.
* Elements are one of the options by default but the style can be overwritten.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Block and Inline elements
<img src="/media/html-css-images/html-css-5/inline.png" alt="inline & block elements">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  HTML - id attribute
* An id is an unique identifier for an HTML element (within the same HTML document).
* This id can be used by CSS and JavaScript to perform certain tasks for that element.
* In CSS, the (#) character, followed by the id is used to select that element.

```HTML
<style>
  #identified {
    background-color: skyblue;
  }
</style>

<div id="identified">This div has a special ID on it!</div>
<div>This is just a regular div.</div>
```
[Test on w3schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_id_css)


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  HTML - class attribute
* The class attribute is used to define equal styles for elements with the same class name.
* Meaning that all HTML elements with the same class can have the same format and style.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
```HTML
<head>
  <style>
    .myClass {
      background-color: black;
      color: white;
    }
  </style>
</head>
<body>
  <div class="myClass">
    <h2>Header 1</h2>
  </div>

  <div class="myClass">
    <h2>Header 2</h2>
  </div>

  <div class="myClass">
    <h2>Header 3</h2>
  </div>
</body>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Different Selectors
```CSS
h2 { /* Selector */
  color: #ff00ff;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### ## Universal selector

```CSS
/* Targets all elements on page. */
* {
  color: #ff00ff;
}
```
#### ## Type selector

```CSS
/* Targets all h1 elements on page. */
h1 {
  color: #ff00ff;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### ## Class Selector

```CSS
/* Targets all elements with a matching class. */
.myClass {
  color: #ff00ff;
}
```
#### ## Id selector
```CSS
/* Targets THE element with a specific id. */
#myId {
  color: #ff00ff;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### ## Child Selector

```CSS
/* Targets an element that is a direct child. */
.myClass>a {
  color: #ff00ff;
}
```
#### ## Decendant selector
```CSS
/* Targets any matching element that is a decendent of another. */
.myClass a {
  color: #ff00ff;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Default styles
* Browsers are setting default styles to elements.
* These are not the same in different browsers.
* <a href="http://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css" target="_blank">Firefox default HTML stylesheet</a>
* <a href="http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css" target="_blank">WebKit default HTML stylesheet</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### CSS in devtools
* In all browsers you can in see and change the styling of a website in devtools.
* Let's try it!

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### CUT!

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Inheritence
* Styling can be inherited from parents of child elements.

```HTML
<!-- The color of the paragraph will be red, since it inherits the color from the parent div-->
<div>
  <p>Hello World!</p>
</div>
```

```CSS
/* styles.css */
div {
  color: red;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Cascading <span style="opacity: 0.2">Style Sheets</span>
* A small waterfall, typically one of several that fall in stages down a steep rocky slope.
* A process whereby something, typically information or knowledge, is successively passed on.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Cascading Style Sheets
* Styles can be combined from different stylesheets, where the styles "flow down" from one to another.
* If you have many stylesheets there could be conflicts between them.

```CSS
/* styles.css */
div {
  color: red;
}
```

```CSS
/* anotherstyles.css */
/* If this is imported after styles.css, conflicting styles will be overwritten */
div {
  color: blue;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Which style applies?
* If two CSS selectors apply to the same element, the one with higher specificity wins.
* If two CSS selectors have the same specificity the latter applies.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Example
Will the paragraph be red or blue?

```HTML
<p id="myText">Some text</p>
```

```CSS
p {
  color: red;
}

#myText {
  color: blue;
}
```
  

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### CSS specificity
* Every selector has its place in the specificity hierarchy.
* They have a specifity between 0 and 10000

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Basic list of points
* Universal selector 0-0-0-0-0 (0points)
* Element selector 0-0-0-0-1 (1point)
* Class selector 0-0-0-1-0 (10points)
* Id selector 0-0-1-0-0 (100points)
* Inline style 0-1-0-0-0 (1000points)
* !important keyword 1-0-0-0-0 (10000points)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Lets give them points

```HTML
<p id="myText" class="myTexts">Some text</p>
```

```CSS
p { color: red; }

#myText { color: blue; }

.myTexts { color: green; }

#myText.myText { color: pink; }
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### <a href="https://cssspecificity.com/" target="_blank">cssspecificity.com</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  CSS Units

* CSS has several different units for expressing a length.
* Examples of CSS properties take "length" values = width, margin, padding, font-size, etc.
* 10px, 2em, 12pt etc.

```CSS
#box {
  height: 2em;
}

.myClass {
  width: 100px;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Two types of lengths
* The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.
* Relative length units specify a length relative to another length property. Relative length units scales better between different rendering mediums.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Absolute Units
* px = Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.
* pt = Points

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Relative Units
* em  = Relative to the font-size of the element (2em means 2 times the size of the current font)
* rem = Relative to font-size of the root element
* vw  = Relative to 1% of the width of the viewport
* vh  = Relative to 1% of the height of the viewport
*  %  = Relative to the parent element

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### When to use which?
* <b>Absolute</b> length units are not recommended for use on screen, but is good for prints.
* <b>Relative</b> length units scales better between different rendering mediums.
* Even though PX is absolute it is relative to the viewing device. 

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Comments in CSS
In CSS we use /* to open and */ to close a comment

```CSS
/* This is a comment */
body {
  background-color: powderblue;
}

/*
multi
lint
comment
*/
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### CSS Versions
* CSS1 (1996)
* CSS2 (1998)
* CSS3 <a href="https://caniuse.com/#search=css3" target="_blank">Browser support</a>
* CSS4

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Validating CSS code
  * To make sure that your CSS code is valid and correct you can validate your code using different software.
  * <a href="https://jigsaw.w3.org/css-validator/#validate_by_uri">Link to online CSS validator</a>