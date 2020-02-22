<!doctype html>
<html>
	<head>
		<title>6.HTML & CSS - Cascading Style Sheets</title>
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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

### 6.HTML & CSS</h3>
##### Cascading Style Sheets</h5>

---


#### HTML, CSS and JavaScript</h4>
          <ul>
            <li>HTML is used to create the basic structure and content of a webpage (the skeleton).</li>
            <li><b><u>CSS is used for the design of a webpage – where everything is placed and how it looks (body).</u></b></li>
            <li>JavaScript is used to define the interactive elements of a webpage making it dynamic (muscles).</li>
          </ul>

---


#### What is CSS?</h4>
          <ul>
            <li>CSS stands for Cascading Style Sheets.</li>
            <li>A Style Sheet is a collection of style rules.</li>
            <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</li>
            <li>CSS associates style rules with HTML elements.</li>
            <li>CSS rules can be applied on just one or multiple HTML elements.</li>
          </ul>

---


#### Examples of different styles</h4>
          <ul>
            <li>Color</li>
            <li>Background color</li>
            <li>Size</li>
            <li>Font</li>
            <li>Border</li>
          </ul>

---


####  CSS example

            ```CSS
            div {
              width: 300px;
              height: 200px;
              background-color: lightcoral;
              border: 10px solid white;
            }
            ```


---


#### CSS Example</h4>
					<img  src="../../media/html-css-images/html-css-5/box.png" alt="div with styles">

---


#### Web page with CSS</h4>
					<img  src="../../media/html-css-images/html-css-5/withCSS.png" alt="web page with css">

---


#### Web page without CSS</h4>
					<img  src="../../media/html-css-images/html-css-5/withoutCSS.png" alt="web page without css">

---


####  Selectors and Declarations

* The selector indicates which element the CSS rule applies to.
* The declaration indicates how the element should be styled.

            ```CSS
            h2 { /* Selector */
              color: #ff00ff; /* Declaration */
            }

            h5 {
              width: 500px; /* Property: value */
            }
            ```


---


####  CSS can be added to HTML elements in 3 ways

* Inline - by using the style attribute in HTML elements.
* Internal - by using a ```<style>``` element in the ```<head>``` section.
* External - by using an external CSS file.


---


####  Inline CSS
* Inline CSS applies a unique style to a single HTML element.
* Inline CSS uses the style attribute.

            ```HTML
            <h1 style="color:blue;">This is a Blue Heading</h1>
            <div style="background-color: red;"></div>
            ```
            [Test on w3schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_inline)


---


####  Internal Style sheet
* Internal style sheets may be used if one single page has a unique style.

            ```HTML
            <!DOCTYPE html>
            <html>
                <head>
                  <style>
                    body {background-color: powderblue;}
                    h1   {color: blue;}
                    p    {color: red;}
                  </style>
                </head>
                <body>
                  <h1>This is a heading</h1>
                  <p>This is a paragraph.</p>
                </body>
            </html>
            ```
            [Test on w3schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_internal)


---


####  External Stylesheet
* External style sheets are used to define the style for one or many HTML pages.
* This means that external style sheets can change the look of an entire web site, by changing one file!
* To use an external style sheet, add a link to it in the ```<head>``` section of the HTML page.

            ```HTML
            <!-- index.html -->
            <!DOCTYPE html>
            <html>
              <head>
                <!-- in this case styles.css is in the root folder -->
                <link rel="stylesheet" type="text/css" href="styles.css">
              </head>
              <body>
                <h1>This is a heading</h1>
                <p>This is a paragraph.</p>
              </body>
            </html>
            ```


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


---


#### Invisible box around every element</h4>
          <ul>
            <li>Every element has an invisible box around them.</li>
          </ul>
					<img  src="../../media/html-css-images/html-css-5/invisBox.png" alt="invisible element boxes">

---


#### Block and Inline elements</h4>
          <ul>
            <li>Block-level elements always starts on a new line and takes up the full width available.</li>
            <li>Inline elements does not start on a new line and only takes up as much width as necessary.</li>
            <li>Elements are one of the options by default but the style can be overwritten.</li>
          </ul>

---


#### Block and Inline elements</h4>
					<img  src="../../media/html-css-images/html-css-5/inline.png" alt="inline & block elements">

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


---


####  HTML - class attribute
* The class attribute is used to define equal styles for elements with the same class name.
* Meaning that all HTML elements with the same class can have the same format and style.


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


---


####  Different Selectors
            ```CSS
            h2 { /* Selector */
              color: #ff00ff;
            }
            ```


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


---


#### Default styles</h4>
          <ul>
            <li>Browsers are setting default styles to elements.</li>
            <li>These are not the same in different browsers.</li>
            <li><a href="http://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css">Firefox default HTML stylesheet</a></li>
            <li><a href="http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css">WebKit default HTML stylesheet</a></li>
          </ul>

---


#### CSS in devtools</h4>
          <ul>
            <li>In all browsers you can in see and change the styling of a website in devtools.</li>
            <li>Let's try it!</li>
          </ul>

---


#### CUT!</h4>

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


---


#### Cascading <span style="opacity: 0.2">Style Sheets</span></h4>
          <ul>
            <li>A small waterfall, typically one of several that fall in stages down a steep rocky slope.</li>
            <li>A process whereby something, typically information or knowledge, is successively passed on.</li>
          </ul>

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


---


#### Which style applies?</h4>
          <ul>
            <li>If two CSS selectors apply to the same element, the one with higher specificity wins.</li>
            <li>If two CSS selectors have the same specificity the latter applies.</li>
          </ul>

---

        <section data-markdown>
            <script type="text/template">
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
  
  ---


#### CSS specificity</h4>
          <ul>
            <li>Every selector has its place in the specificity hierarchy.</li>
            <li>They have a specifity between 0 and 10000</li>
          </ul>

---


#### Basic list of points</h4>
          <ul>
            <li>Universal selector 0-0-0-0-0 (0points)</li>
            <li>Element selector 0-0-0-0-1 (1point)</li>
            <li>Class selector 0-0-0-1-0 (10points)</li>
            <li>Id selector 0-0-1-0-0 (100points)</li>
            <li>Inline style 0-1-0-0-0 (1000points)</li>
            <li>!important keyword 1-0-0-0-0 (10000points)</li>
          </ul>

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


---


#### <a href="https://cssspecificity.com/">cssspecificity.com</a></h4>

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


---


#### Two types of lengths</h4>
          <ul>
            <li>The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.</li>
            <li>Relative length units specify a length relative to another length property. Relative length units scales better between different rendering mediums.</li>
          </ul>

---


#### Absolute Units</h4>
          <ul>
            <li>px = Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.</li>
            <li>pt = Points</li>
          </ul>

---


#### Relative Units</h4>
          <ul>
            <li>em  = Relative to the font-size of the element (2em means 2 times the size of the current font)</li>
            <li>rem = Relative to font-size of the root element</li>
            <li>vw  = Relative to 1% of the width of the viewport</li>
            <li>vh  = Relative to 1% of the height of the viewport</li>
            <li> %  = Relative to the parent element</li>
          </ul>

---


#### When to use which?</h4>
          <ul>
            <li><b>Absolute</b> length units are not recommended for use on screen, but is good for prints.</li>
            <li><b>Relative</b> length units scales better between different rendering mediums.</li>
            <li>Even though PX is absolute it is relative to the viewing device. </li>
          </ul>

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


---


#### CSS Versions</h4>
          <ul>
            <li>CSS1 (1996)</li>
            <li>CSS2 (1998)</li>
            <li>CSS3 <a href="https://caniuse.com/#search=css3" target="_blank">Browser support</a></li>
            <li>CSS4</li>
          </ul>

---


#### Validating CSS code</h4>
          <ul>
              <li>To make sure that your CSS code is valid and correct you can validate your code using different software.</li>
              <li><a href="https://jigsaw.w3.org/css-validator/#validate_by_uri">Link to online CSS validator</a></li>
          </ul>

---


          <li>Examples Chapter 10.</li>

---

