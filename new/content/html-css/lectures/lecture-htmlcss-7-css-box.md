### 7.HTML & CSS
##### Box Model, colors & text
---

#### The box Model
<img width="700" src="/new/media/html-css-images/html-css-7/marginpadding.png" alt="CSS margins and paddings">
---

#### Box Model

* Content - where text and images appear.
* Padding - Clears an area around the content (transparent).
* Border - A border that goes around the padding and content.
* Margin - Clears an area outside the border (transparent).

---

####  Element width & height

* These attributes specifies the width and the height of the element's content area.
* It is whats inside the padding, border, and margin of an element.

```CSS
/* element with id box will be 300*200 pixels */
#box {
  width: 300px;
  height: 250px;
}
```

---

####  Minimum & Maximum width & height

* It defines the smallest or biggest size an element can have.
* This is good for when the screen size is dynamic.

```CSS
/* The width of the element with id="box" will always be at least 300px  */
#box {
  min-width: 300px;
}

/* The width of the element with id="content" never be wider than 300px  */
#content {
  max-width: 300px;
}
```
<a href="http://htmlandcssbook.com/code-samples/chapter-13/min-width-max-width.html" target="_blank">Handbook examples</a>

---

#### Margin & Padding

* <b>Margin</b> properties are used to create space around elements, <b>OUTSIDE</b> of any defined borders.
* <b>Padding</b> properties are used to generate space around an element's content, <b>INSIDE</b> of any defined borders.

---

####  Margin

```CSS
div {
  margin: 50px;
}

div {
  margin-top: 50px;
  margin-right: 30px;
  margin-bottom: 50px;
  margin-left: 80px;
}

/*top 25px, right and left 50px, bottom 75px */
div {
  margin: 25px 50px 75px;
}

/* Auto to horizontally center the element within its container. */
div {
  margin: auto;
}
```

[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_shorthand_4val)

---

####  When does ```margin: auto;``` work?

* The element must be block-level (display: block or display: table).
* The element must not float.
* The element must not have a fixed or absolute position (unless it is also set to ```left: 0; right: 0;```).
* The element must have a width that is not auto.


---

####  Padding

```CSS
div {
  padding: 50px;
}

div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}

/*top 25px, right and left 50px, bottom 75px */
div {
  padding: 25px 50px 75px;
}
```

[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_shorthand_4val)

---

####  Padding and element width

```CSS
/* This div will be 350px wide since we add padding */
div.box {
  width: 300px;
  padding: 25px;
}
```

[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_width)

---

####  Borders

```CSS
p {
  border: 3px solid green;
  border-left: 6px solid red;
  background-color: lightgrey;
}
```

[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_border_left)

---

####  Overflowing content

* If the content does not fit in the box you can choose how overflowing content is displayed

```CSS
/* Hides any extra content */
#myBox {
  overflow: hidden;
}


/* Adds a scrollbar to see extra content */
.myBoxes {
  overflow: scroll;
}
```

---

####  border-box

* Setting box-sizing to border-box includes padding and borders in the element's total width and height

```CSS
#example1 {
  box-sizing: border-box;
}
```
[Try it on w3schools](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-sizing)

---

####  Setting colors

* Colors can be set using different types of values

```CSS
/* predefined color name */
body { background-color: powderblue; }

/* RGB (Red, Green, Blue) */
h3 { color: rgb(102,205,170); }

/* RGBA (Red, Green, Blue, Alpha)*/
p { color: rgba(255, 99, 71, 0.2); }

/* Hexadecimal code values (66 = 102, cd = 205, aa = 170) */
#myDiv { background-color: #66cdaa; }

/* HSLA (Hue, Saturation, Lightning, Alpha)*/
.myClass { background-color: hsl(147, 50%, 47%, 0.4);}
```

[Try it on w3schools](https://www.w3schools.com/css/css_colors.asp)

---

####  Opacity
* Opacity decides the level of transparency

```CSS
/* using opacity property */
h3 {
  color: rgb(255, 99, 71);
  opacity: 0.5;
}

/* Using rgba, same result as above */
h2 {
  color: rgba(255, 99, 71, .5);
}
```

---

####  Backgrounds

* All elements have backgrounds.
* To these background you add colors or images

```CSS
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}

h4 {
  background-color: red;
}
```

[Try it on w3schools](https://www.w3schools.com/css/css_background.asp)

---

####  Background vs background-color

* Background will supercede all previous background-color, background-image, background-position etc.
* It's a shorthand, but a reset as well.

```CSS
/* sets bakground-color, background-image, background-position on one line */
div {
  background: white url("img_tree.png") right top no-repeat;
}

/* resets all values set above */
div {
  background-color: red;
}
```

[Try it on w3schools](https://www.w3schools.com/css/css_background.asp)

---

####  Text

* Text elements - paragraphs, h1-h6 have specific text attributes.

```CSS
p {
  color: #ff00ff;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
}
```

[All text properties at w3schools](https://www.w3schools.com/css/css_text.asp)

---

####  Fonts

* A font is a graphical representation of text.
* There are specific and generic Fonts.
* "Times New Roman" is specific font and "serif" is general.

```CSS
/* If Times New Roman is not stored on the users computer it falls back on Times then serif */
p {
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 40px;
  font-weight: bold;
}
```

[All text properties at w3schools](https://www.w3schools.com/css/css_font.asp)

---

####  Using fonts from external sources

* Fonts which are not stored on the users computer.
* [https://fonts.google.com/](https://fonts.google.com/)

```HTML
<head>
  <!-- Altenative 1-->
  <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">

  <!-- Altenative 2-->
  <style>
    @import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');
  </style>
</head>
```

```CSS
p {
  font-family: 'Indie Flower', cursive;
}
```

---

#### Font formats

* Fonts are stored using different formats.
* All browsers does <b>NOT</b> support all formats.
* <a href="https://transfonter.org/formats">List of formats and browser support</a>

---

####  Creating and using a local webfont

* Upload your font and convert it on for example [https://transfonter.org](https://transfonter.org/)
* Add the generated folder to you project.
* Use CSS @font-face to use it in your project.

```CSS
@font-face {
  font-family: 'Indie Flower';
  /* Path to where the font is stored. */
  /* Could be an local or external path.*/
  src: url('myFont/IndieFlower.woff2') format('woff2'),
      url('myFont/IndieFlower.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

#myParagraph{
  font-family: 'Indie Flower', cursive;
}
```

---

#### <a href="https://www.w3schools.com/css/css_font.asp" target="_blank">Difference Between Serif and Sans-serif Fonts</a>
---

####  Link styles
* Depending on what state a link is in it can have different styling.
* This styling is done using something called psuedo class, which we will cover deeper later on in the course.

---

####  Link styles

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