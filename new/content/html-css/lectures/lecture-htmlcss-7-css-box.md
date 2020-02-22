<!doctype html>
<html>
	<head>
		<title>7.HTML & CSS - Box Model, colors & text</title>
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

### 7.HTML & CSS</h3>
##### Box Model, colors & text</h5>

---


#### The box Model</h4>
  <img width="700" src="../../media/html-css-images/html-css-7/marginpadding.png" alt="CSS margins and paddings">

---


#### Box Model</h4>
          <ul>
            <li>Content - where text and images appear.</li>
            <li>Padding - Clears an area around the content (transparent).</li>
            <li>Border - A border that goes around the padding and content.</li>
            <li>Margin - Clears an area outside the border (transparent).</li>
          </ul>

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


#### Margin & Padding</h4>
          <ul>
            <li><b>Margin</b> properties are used to create space around elements, <b>OUTSIDE</b> of any defined borders.</li>
            <li><b>Padding</b> properties are used to generate space around an element's content, <b>INSIDE</b> of any defined borders.</li>
          </ul>

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


#### Font formats</h4>
          <ul>
            <li>Fonts are stored using different formats.</li>
            <li>All browsers does <b>NOT</b> support all formats.</li>
            <li><a href="https://transfonter.org/formats">List of formats and browser support</a></li>
          </ul>

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


#### <a href="https://www.w3schools.com/css/css_font.asp">Difference Between Serif and Sans-serif Fonts</a></h4>

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


---
