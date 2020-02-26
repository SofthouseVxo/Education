### 4.HTML & CSS
#### Lists, links, tables & grouping


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

#### HTML Links - Hyperlinks

* Links allow users to click their way from page to page.
* Links can link from one website to another.
* Links can link from one page to another on the same site.
* Links can link from one part of a webpage to another part of the same page.
* Links can open new pages in new browser windows.
* Links can start a new window to email.



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

#### File structure
<img  src="/media/html-css-images/html-css-4/folder.png" alt="files structure">


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

#### Tables
#### Displaying tabular data


---

#### Tables

* Think of a table like a grid.
* A table has Rows and Columns.
* Each block in the grid is a cell.
* Examples of tables are sport results or stock reports.
* See <a href="http://www.everysport.com/sport/fotboll/fotbollsserier-2019/allsvenskan-herr/allsvenskan/100877" target="_blank">example</a>



---

#### Rows and Columns
<img src="/media/html-css-images/html-css-4/table2.png" alt="table structure">


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

#### colspan & rowspan
<img  src="/media/html-css-images/html-css-4/table.png" alt="rowspan and colspan">


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