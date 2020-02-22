<!doctype html>
<html>
	<head>
		<title>3.HTML & CSS - Hypertext Markup Language</title>
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

### 3.HTML & CSS</h3>
##### Hypertext Markup Language</h5>

---


####  A basic HTML page

            ```HTML <!DOCTYPE html>
            <html>
              <head>
                <title>Page Title</title>
              </head>
              <body>
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
              </body>
            </html>
            ```


---


#### HTML, CSS and JavaScript</h4>
          <ul>
            <li><b><u>HTML is used to create the basic structure and content of a webpage (the skeleton).</u></b></li>
            <li>CSS is used for the design of a webpage – where everything is placed and how it looks (body).</li>
            <li>JavaScript is used to define the interactive elements of a webpage making it dynamic (muscles).</li>
          </ul>

---


#### What is HTML?</h4>
          <ul>
            <li>HTML stands for Hypertext Markup Language</li>
            <li>HTML is a markup language.</li>
            <li>It describes the structure of a Web pages (marks it).</li>
            <li>HTML pages are stored on webservers and interpreted by browsers.</li>
            <li>All HTML documents have the file ending .html (index.html)</li>
          </ul>

---


#### HTML elements</h4>
          <ul>
            <li>HTML Elements are the building blocks of HTML pages.</li>
            <li>These elements are represented by "tags".</li>
            <li>The tags label the pieces of content.</li>
            <li>The tags act like containers, telling you something about the information within.</li>
            <li>Browsers do not display the tags, but uses them to render the content.</li>
          </ul>

---


####  HTML Elements/Tags
* HTML-tags usually come in pairs
* The first one is the start tag
* The second one is the end tag and these have a forward slash

            ```HTML
              <!-- HTML element with a pair of tags-->
              <div>content goes here...</div>
            ```

            ```HTML
              <!-- The image HTML element consists of only on tag-->
              <img>
            ```


---


####  Nested HTML Elements
* When building HTML pages you place elements inside other elements.
* This is called nesting elements.
* All HTML pages consists of nested elements.

            ```HTML
            <div>
              <div>
                <div></div>
              </div>
            </div>
            ```


---


####  Empty HTML Elements
* Most elements have some kind of content.
* It could be another element or some kind of text.
* But some HTML elements like the ```<br>``` which enter line breaks does not have any content.

            ```HTML
            <!-- <br> defines a line break-->
            <p>Hello<br>Robin</p>
            ```


---


####  Basic HTML page

            ```HTML
            <!DOCTYPE html>
            <html>
              <head>
                <title>Page Title</title>
              </head>
              <body>

                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
              </body>
            </html>
            ```


---

        <section data-markdown>
            <script type="text/template">
  ####  Basic HTML page

  * ```<!DOCTYPE html>``` declaration defines this document to be HTML5.
  * ```<html>``` element is the root element of an HTML page.
  * ```<head>``` element contains meta information about the document.
  * ```<title>``` element specifies a title for the document.
  * ```<body>``` element contains the visible page content.
  * ```<h1>``` element defines a large heading.
  * ```<p>``` element defines a paragraph.
  * [Complete list at w3schools](https://www.w3schools.com/tags/)
  * [Complete list at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  

---


#### What happens when a webpage runs?</h4>
  <img src="../../media/html-css-images/html-css-3/clientserver.png" alt="client server communication">

---


####  Comments
* HTML comments are only visible in the source code of a web page.
* Meaning that they are not rendered when the HTML document is rendered by a browser.
* HTML comments begin with <!–– and the comment closes with ––>.

            ```HTML
            <!-- This is a comment (not visible when the browser renders) -->
            <p>This is visible when browser renders</p>
            <!--
              Multiple
              row
              Comment (not visible when the browser renders)
            -->
            ```


---


####  Case sensitivity
* HTML tags are not case sensitive: ```<P>``` means the same as ```<p>```.
* However use lowercase.


---


####  HTML Attributes
* All HTML elements can have attributes.
* Attributes provide additional information about an element.
* Attributes are always specified in the start tag.
* Attributes usually come in name/value pairs like: name="value".

            ```HTML
            <!-- href is the attribute -->
            <a href="https://www.google.com">Link to google</a>

            <!-- src, witdh & height are attributes -->
    <img src="cat.jpg" width="300" height="300">
            ```


---


####  Semantic HTML

* Semantic elements = elements with a meaning.
* Semantic HTML means using correct HTML elements for their correct purpose as much as possible.
* Semantic elements are elements with a meaning.
* If you need a button, use the ```<button>``` element and not a ```<div>```.

**Examples:**
            ```HTML
              <footer>
              <header>
              <nav>
      
            ```
            [Full list of semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp)


---


####  ```<header>```

* The ```<header>``` element represents a container for introductory content or a set of navigational links.
* A ```<header>``` tag cannot be placed within a ```<footer>```, ```<address>``` or another ```<header>``` element.
           
            ```HTML
            <header>
              <h1>Welcome to my site</h1>
            </header>
            ```
            [w3schools](https://www.w3schools.com/tags/tag_header.asp)


---


####  ```<footer>```

* The ```<footer>``` tag defines a footer for a document or section.
* A ```<footer>``` element should contain information about its containing element.
                    
            ```HTML
            <footer>
              <a href="#top">Go to top</a>
              <p>Copyright 2019</p>
            </footer> 
            ```
            [w3schools](https://www.w3schools.com/tags/tag_footer.asp)


---


####  ```<section>```

* The ```<section>``` tag defines sections in a document, such as chapters, headers, footers, or any other sections of the document.
* The HTML ```<section>``` element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document.
* Do not use the ```<section>``` element as a generic container; this is what ```<div>``` is for, especially when the sectioning is only for styling purposes. A rule of thumb is that a section should logically appear in the outline of a document.



---


####  ```<section>```

            ```HTML
    
              <h1>Products</h1>
              <p>These are our products...</p>
      <img src="somesource.png" alt="a picture of a product">
    --- 
            ```
            [w3schools](https://www.w3schools.com/tags/tag_section.asp)


---


####  ```<main>```

* The ```<main>``` tag specifies the main content of a document.
* The content inside the ```<main>``` element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.
* There must not be more than one ```<main>``` element in a document. The ```<main>``` element must **NOT** be a descendant of an ```<article>```, ```<aside>```, ```<footer>```, ```<header>```, or ```<nav>``` element.
                    


---


####  ```<main>```
 
            ```HTML
            <main>
              <article>
                <h1>Google Chrome</h1>
                <p>Google Chrome is a free, open-source web browser developed by Google,
                released in 2008.</p>
              </article>
            
              <article>
                <h1>Internet Explorer</h1>
                <p>Internet Explorer is a free web browser from Microsoft, released in 1995.</p>
              </article>
            </main> 
            ```
            [w3schools](https://www.w3schools.com/tags/tag_main.asp)


---


####  ```<nav>```

* The ```<nav>``` tag defines a set of navigation links.
* NOT all links of a document should be inside a ```<nav>``` element. The ```<nav>``` element is intended only for major block of navigation links.

            ```HTML
            <nav>
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
              <a href="contant.html">Contact</a>
            </nav> 
            ```
            [w3schools](https://www.w3schools.com/tags/tag_nav.asp)


---


####  Semantic HTML

* When you are setting up a html page you need to consider which elements are semantically correct for your content.
* There are a lot of different elements you can use which will work but will be semantically incorrect
* Semantic tags make it clear to the browser what the meaning of a page and its content is. 
* This is also communicated with search engines, ensuring that the right pages are delivered for the right queries.
* It is also important that we code for all users. For example Screen readers which read each element, and that each of them can be accessed through the keyboard is ESSENTIAL. 

            [Full list of semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp)


---


#### HTML versions</h4>
          <ul>
            <li>HTML - 1991</li>
            <li>HTML 2.0 - 1995</li>
            <li>HTML 3.2 - 1997</li>
            <li>HTML 4.01 - 1999</li>
            <li>XHTML	- 2000</li>
            <li>HTML5	- 2014</li>
          </ul>

---

        <!-- <section>
#### Content managing system (CMS)</h4>
          <ul>
            <li>Login to an administration system to manage content</li>
            <li>Blogs, Ecommerce</li>
            <li>Wordpress, Joomla etc.</li>
          </ul>

--- -->


#### Validating HTML code</h4>
          <ul>
            <li>To make sure that your HTML code is valid and correct you can validate your code using different software.</li>
            <li><a href="https://validator.w3.org/">Link to online validator</a></li>
          </ul>

---
      </div>
    </div>

		<script src="../../libs/reveal/js/reveal.js"></script>
    <script src="../../initialize.js"></script>    
	</body>
</html>
