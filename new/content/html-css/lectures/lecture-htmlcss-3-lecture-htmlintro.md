### 3.HTML & CSS
##### Hypertext Markup Language
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

#### HTML, CSS and JavaScript
* **HTML is used to create the basic structure and content of a webpage (the skeleton).**
* CSS is used for the design of a webpage – where everything is placed and how it looks (body).
* JavaScript is used to define the interactive elements of a webpage making it dynamic (muscles).
---

#### What is HTML?
* HTML stands for Hypertext Markup Language
* HTML is a markup language.
* It describes the structure of a Web pages (marks it).
* HTML pages are stored on webservers and interpreted by browsers.
* All HTML documents have the file ending .html (index.html)
---

#### HTML elements
* HTML Elements are the building blocks of HTML pages.
* These elements are represented by "tags".
* The tags label the pieces of content.
* The tags act like containers, telling you something about the information within.
* Browsers do not display the tags, but uses them to render the content.
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

#### What happens when a webpage runs?
<img src="/new/media/html-css-images/html-css-3/clientserver.png" alt="client server communication">
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

#### HTML versions

* HTML - 1991
* HTML 2.0 - 1995
* HTML 3.2 - 1997
* HTML 4.01 - 1999
* XHTML	- 2000
* HTML5	- 2014
---

#### Content managing system (CMS)

* Login to an administration system to manage content
* Blogs, Ecommerce
* Wordpress, Joomla etc.

#### Validating HTML code

* To make sure that your HTML code is valid and correct you can validate your code using different software.
* <a href="https://validator.w3.org/" target="_blank">Link to online validator</a>