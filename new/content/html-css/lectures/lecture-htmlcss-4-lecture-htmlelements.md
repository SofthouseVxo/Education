<!doctype html>
<html>
	<head>
		<title>4.HTML & CSS - HTML lists, links, tables & grouping</title>
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

### 4.HTML & CSS</h3>
##### Lists, links, tables & grouping</h5>

---


####  Encoding
* UTF-8 - Character encoding for Unicode (a standard for representing a great variety of characters from many languages).
* ISO-8859-1 - Character encoding for the Latin alphabet.
* In theory, any character encoding can be used, but no browser understands all of them.
* When using a more wide character encoding the better the chance that a browser will understand it.

            ```HTML
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
              </head>
            </html>
            ```



---


####  Indentation
* An indentation or indent is an empty space at the beginning of a line.
* These are used to signal the start of a new paragraph.
* Organizing your code with indentations are very important, this to make the code more readable.
* Every new element on a new row.

            ```HTML
            <!DOCTYPE html>
            <html>
              <head> <!-- intended by 1 tab-->
                <title>Page Title</title>
              </head>
              <body>
                <h1>My First Heading</h1> <!-- intended by 2 tabs-->
                <p>My first paragraph.</p>
              </body>
            </html>
            ```


---


####  Messy indentations
            ```HTML
            <!DOCTYPE html>
                <html>
              <head> <!-- intended by 1 tab-->
                <title>Page Title</title>
              </head>
                <body>
              <h1>My First Heading</h1> <!-- intended by 2 tabs-->
            <p>My first paragraph.</p>
                  </body>
            </html>
            ```


---


####  Lists
* HTML has elements for lists.
* There are 3 different Lists.
  * Ordered list
  * Unordered list
  * Definition list


---


####  Ordered List

            ```HTML
            <ol>
              <li>John Doe</li>
              <li>Jane Doe</li>
              <li>Panda da panda</li>
              <li>Joy</li>
            </ol>
            ```


---

        <section >
#### Ordered List</h4>
          <ol>
            <li>John Doe</li>
            <li>Jane Doe</li>
            <li>Panda da panda</li>
            <li>Joy</li>
          </ol>

---


####  Unordered List

            ```HTML
            <ul>
              <li>John Doe</li>
              <li>Jane Doe</li>
              <li>Panda da panda</li>
              <li>Joy</li>
            </ul>
            ```


---

        <section >
#### Unordered List</h4>
          <ul>
            <li>John Doe</li>
            <li>Jane Doe</li>
            <li>Panda da panda</li>
            <li>Joy</li>
          </ul>

---


####  Definition List

            ```HTML
            <dl> <!-- element to define a description list -->
              <dt>kg</dt> <!-- element to define the description term -->
              <dd>Grundenheten för massa i Internationella måttenhetssystemet (SI)</dd> <!-- element to describe the term in a description list -->
            </dl>
            ```


---


####  Nested lists

            ```HTML
            <ol>
              <li>John Doe</li>
              <li>Jane Doe
                <ul>
                  <li>Madonna</li>
                  <li>2pac</li>
                  <li>Iggy Pop</li>
                </ul>
              </li>
              <li>Panda da panda</li>
              <li>Joy</li>
            </ol>
            ```


---


#### Nested lists</h4>
          <ol>
            <li>John Doe</li>
            <li>Jane Doe
              <ul>
                <li>Madonna</li>
                <li>2pac</li>
                <li>Iggy Pop</li>
              </ul>
            </li>
            <li>Panda da panda</li>
            <li>Joy</li>
          </ol>

---


#### HTML Links - Hyperlinks</h4>
          <ul>
            <li>Links allow users to click their way from page to page.</li>
            <li>Links can link from one website to another</li>
            <li>Links can link from one page to another on the same site</li>
            <li>Links can link from one part of a webpage to another part of the same page</li>
            <li>Links can open new pages in new browser windows</li>
            <li>Links can start a new window to email</li>
          </ul>

---


####  Link to another website

            ```HTML
            <!-- Absolute url -->
            <a href="http://www.blocket.se">blocket</a>
            ```


---


####  Link page on the same site (local link)

            ```HTML
            <!-- Relative urls, no domain name (without https://www....) -->
            <ul>
              <li><a href="index.html">Start page</a></li>
              <li><a href="profile.html">Profile page</a></li>
              <li><a href="contact/contact.html">Contact page</a></li>
            </ul>
            ```


---


#### File structure</h4>
					<img  src="/new/media/html-css-images/html-css-4/folder.png" alt="files structure">

---


####  Email links

            ```HTML
              <a href="mailto:johndoe@example.com">Email John</a>
            ```


---


####  Open in a new window

            The target attribute specifies where to open the linked document.

            ```HTML
              <a href="http://www.blocket.se" target="_blank">Blocket</a>
            ```


---


####  Linking to a specific part of the same page

            ```HTML
              <div id="top_of_page">top</div>
              ..
              ..
              ..
              <a href="#top_of_page" target="_blank">Blocket</a>
            ```


---


#### Tables</h4>
##### Displaying tabular data</h5>

---


#### Tables</h4>
          <ul>
            <li>Think of a table like a grid.</li>
            <li>A table has Rows and Columns.</li>
            <li>Each block in the grid is a cell.</li>
            <li>Examples of tables are sport results or stock reports.</li>
            <li>See <a href="http://www.everysport.com/sport/fotboll/fotbollsserier-2019/allsvenskan-herr/allsvenskan/100877" target="_blank">example</a></li>
          </ul>

---


#### Rows and Columns</h4>
					<img src="/new/media/html-css-images/html-css-4/table2.png" alt="table structure">

---


####  HTML Table
            ```HTML
            <!-- Basic Table Structure -->
            <table> <!-- creates the table -->
              <tr> <!-- Start of a row -->
                <th>Column1</th> <!-- Cell of that row (table header) -->
                <th>Column2</th> <!-- Cell of that row (table header) -->
                <th>Column3</th> <!-- Cell of that row (table header) -->
              </tr> <!-- End of a row -->
              <tr>
                <td>45</td> <!-- Cell of that row (table data) -->
                <td>60</td> <!-- Cell of that row (table data) -->
                <td>45</td> <!-- Cell of that row (table data) -->
              </tr>
              <tr>
                <td>60</td>
                <td>90</td>
                <td>90</td>
              </tr>
            </table>
            ```


---


            <!-- Basic Table Structure -->
            <table> <!-- creates the table -->
            <tr> <!-- Start of a row -->
              <th>Column1</th> <!-- Cell of that row (table header) -->
              <th>Column2</th> <!-- Cell of that row (table data) -->
              <th>Column3</th> <!-- Cell of that row (table data) -->
            </tr> <!-- End of a row -->
            <tr>
              <td>45</td>
              <td>60</td>
              <td>45</td>
            </tr>
            <tr>
              <td>60</td>
              <td>90</td>
              <td>90</td>
            </tr>
          </table>

---


#### colspan & rowspan</h4>
					<img  src="/new/media/html-css-images/html-css-4/table.png" alt="rowspan and colspan">

---


####  colspan & rowspan

            ```HTML
            <!-- Basic Table Structure -->
            <table> <!-- creates the table -->
              <tr> <!-- Start of a row -->
                <th>Column1</th>
                <th>Column2</th>
                <th>Column3</th>
              </tr> <!-- End of a row -->
              <tr>
                <td colspan="2">45</td> <!-- Will be 2 columns wide -->
                <td rowspan="4">60</td> <!-- Will be 4 rows high  -->
                <td>45</td>
              </tr>
            </table>
            ```


---


####  Grouping with divs (divisions)
* Divs allows you to group elements together.
* If you group elements together in a divison it allows you to for example set styles to all the elements in this division.

            ```HTML
            <div id="top_of_page">top
              <p>Hello</p>
      <img src="myImage">
            </div>
            ```


---
    </div>
  </div>

		<script src="../../libs/reveal/js/reveal.js"></script>
    <script src="../../initialize.js"></script>
	</body>
</html>
