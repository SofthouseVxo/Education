### 8.HTML & CSS
#### Positioning & Layouts


---

#### Layouts

* A layout is a way in which the parts of something are arranged or laid out.

<img style="max-width: 700px" src="/new-structure/media/html-css-images/html-css-8/layouts.png" alt="different types of layouts">


---

####  Position

* The position property specifies the type of positioning method used for an element.
* There are 5 different values to choose from
  * static (default)
  * relative
  * fixed
  * absolute
  * sticky

```CSS
div.static {
  position: static;
  border: 3px solid #73AD21;
}
```



---

#### Positioning

* Top - How far from the top the element should be.
* Bottom - How far from the bottom the element should be.
* Left - How far from the left the element should be.
* Right - How far from the right the element should be.



---

####  Position

* When postioning method is selected you can apply where the element should be with:
  * Top - How far from the top the element should be.
  * Bottom - How far from the bottom the element should be.
  * Left - How far from the left the element should be.
  * Right - How far from the right the element should be.

```CSS
div {
  position: relative;
  left: 30px;
  top: 0px;
}
```
  


---

####  Static position
* Static elements are always positioned according to the normal flow of the page.
* Top, Bottom, Left & Right has no effect.

```CSS
div.static {
  position: static;
  border: 3px solid #73AD21;
}
```



---

####  Relative position

* Relatively positioned elements are positioned relative to its normal position.
* Setting (top, right, bottom, left) will adjust element away from its normal position.
* Other content will not be adjusted to fit into any gap left by the element in the example below.

```CSS
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```
[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_relative)



---

####  Fixed position

* Fixed elements are positioned relative to the viewport,
* They do not move if page is scrolled.
* They do not leave a gap in the page where it would normally have been located.

```CSS
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
```
[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_fixed)



---

####  Absolute position

* Absolute elements are positioned relative to the nearest **positioned** ancestor.
* If it has no positioned ancestors(not static position), it uses the document body.

```CSS
div.relative {
  position: relative; /* not static - meaning this is positioned */
  width: 400px;
  height: 200px;
  border: 3px solid #73AD21;
}

/* this div is a child of the div above */
div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  border: 3px solid #73AD21;
}
```
[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute)



---

####  Sticky Position
* Sticky elements are positioned based on the user's scroll position.
* They get toggled between relative and fixed, depending on the scroll position.

```CSS
div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}
```
[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_position_sticky)



---

####  z-index (overlapping)

* Z-index makes it possible for elements to overlap (only works if they are positioned).
* The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).
* An element can have a positive or negative stack order.

```CSS
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```
[Try it on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_zindex)



---

####  Floating

* Floating is used for positioning and formatting content e.g. let an image float left to the text in a container.
  * left - The element floats to the left of its container.
  * right- The element floats to the right of its container.
  * none - The element does not float (will be displayed just where it occurs in the text). This is default.
  * inherit - The element inherits the float value of its parent.

```CSS
img {
  float: right;
}
```

* [W3schools example](https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_float)
* [Handbook example](http://htmlandcssbook.com/code-samples/chapter-15/float.html)



---

####  Display

* Inline - No new line and only takes up as much width as necessary.
* Block - Starts on a new line and takes up the full width available.
* None - Hides the element [example](https://www.w3schools.com/css/tryit.asp?filename=trycss_display_none).

```HTML
<ul style="display: inline;">
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```



---

#### Fixed & Liquid Layouts

* Chapter 15 - Examples