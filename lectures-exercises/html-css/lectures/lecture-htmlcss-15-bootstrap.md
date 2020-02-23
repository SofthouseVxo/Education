### 15.HTML & CSS
##### Bootstrap

---

#### What is Bootstrap?
"Build **responsive**, **mobile-first** projects on the web with the world’s most popular front-end component **library**. Bootstrap is an open source toolkit for developing with **HTML, CSS, and JS**. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery." - Bootstrap, 2019</p>

---

#### What is a library

* Libraries are reusable code written by someone else.
* Its purpose is to help you solve common problems in easier ways and not having to repeat yourself.


---

#### Bootstrap

* Bootstrap was developed by one designer and one developer at Twitter.
* Created in mid 2010.
* Is maintained by a small team on github.
* v1, v2, v3, **version 4.3**
* <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
* <a href="https://getbootstrap.com/docs/4.3/examples/" target="_blank">Bootstrap Examples</a>


---

#### <a href="https://getbootstrap.com/docs/4.3/getting-started/contents/" target="_blank">Bootstrap</a> consists of:
<img style="width: 800px;" src="/media/html-css-images/html-css-15/contents.png" alt="bootstrap contents">

---

#### Bootstrap provides us with:

* Grid and layout utilities.
* Styling for HTML elements, fonts etc. (this will give your site an bootstrap look automatically).
* Utilities for styling (classes like mt-2 equals margin-top a specific value.
* A set of components that you can use, Buttons, Popovers, Carusels etc.
* Functionality that comes with it (JavaScript & jQuery) which we will not focus on in this course.
* Layout Templates and themes.
* <a href="https://getbootstrap.com/docs/4.3/examples/" target="_blank">Examples</a>


---

#### How does it work?

1. You integrate Bootstrap (and jQuery for some features) in your project (download or using CDN).
1. When code for this is written, every time you run your site, it will fetch the Bootstrap functionality (.css and .js files).
1. Open <a href="https://getbootstrap.com/docs/4.3/examples/album/" target="_blank">example</a> inspect site and try to remove link to bootstrap.min.css inside head.


---

#### CDN?

* Content Delivery Network
* A CDN is a globally distributed network of web servers.
* It provide faster delivery, and highly available content.
* The content is replicated throughout the CDN so it exists in many places all at once.
* Clients accesses a copy of the data near to the client, as opposed to all clients accessing the same central server, in order to avoid bottlenecks near that server.
* <a href="https://www.globaldots.com/content-delivery-network-explained/">Global dots explains</a>


---

#### CDN cons

* **Failure** (rare) - if the CDN data-center or services are down all you can do is wait
* **Security** - Can be a concern if you use a public CDN service (JavaScipt)
* **Restriction** - Some countries may ban IP addresses


---

####  Loading Bootstrap from CDN

* Every times the html loads the bootstrap.min.css will be fetched and loaded from CDN
```HTML
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">
</head>
```


---

####  Loading Bootstrap locally

* For this to work you need to [download](https://getbootstrap.com/docs/4.3/getting-started/download/) the boostrap library and place it in your project with the correct filepath.
```HTML
<head>
    <link rel="stylesheet" href="bootstrap.min.css">
</head>
```


---

####  Including JavaScript

* Many bootstrap components use JS, jQuery and Popper.js
* Like Alerts, Carousels, Navbar etc.
* Include the JavaScript files like shown [here](https://getbootstrap.com/docs/4.3/getting-started/introduction/)


---

#### Bootstrap Examples
##### <a href="https://getbootstrap.com/">Bootstrap Documentation.</a>


---

####  Bootstrap Grid
  
```HTML
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
```
[Bootstrap ref](https://getbootstrap.com/docs/4.0/layout/grid/)


---

####  Bootstrap components

* Bootstrap offers a large list of premade components.
* These are used by adding specific CSS classes.
  
```HTML
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
```
[Bootstrap ref](https://getbootstrap.com/docs/4.3/components/button-group/)


---

####  Bootstrap utilites

* Bootstrap also offer premade tools such as predefined colors, spacing, positioning etc. 
* By adding these bootstrap CSS classes we can get more consistent styling.
  
```HTML
<!-- Spacing example -  margin top a specific amount -->
<div class="mt-5" style="width: 200px;">
  Centered element
</div>

<!-- Spacing example -  margin auto horizontally -->
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>

```
[Bootstrap ref](https://getbootstrap.com/docs/4.3/utilities/spacing/)


---

####  Bootstrap utilites - colors

```HTML
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning">.text-warning</p>
```
[Bootstrap ref](https://getbootstrap.com/docs/4.3/utilities/colors/)


---

#### Browser support

* Supports latest stable releases of all major browsers
* <a hef="https://getbootstrap.com/docs/4.3/getting-started/browsers-devices/" target="_blank">Bootstrap documentation</a>


---

#### Go through examples on Github