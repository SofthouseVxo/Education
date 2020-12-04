### 18. JavaScript
#### Browser API's


---

### API
#### Application Programming Interface


---


#### What is an API (Application Programming Interface)?

* User interfaces allow humans to interact with programs.
* API's let programs and scripts to talk to each other.



---
	

#### Different types of Apis

* Internal computer API (files, camera etc.).
* <b>Browser API (storage, history, location etc.).</b>
* External RESTful API(Getting and sending data remote).



---

#### Api's covered in this lecture

* web storage


---

#### <a href="https://developer.mozilla.org/sv-SE/docs/Web/API">List of other browser APIS</a>


---

#### Web Storage - Storing data in the browser.

* There are 3 methods for doing this:
  * Cookies
  * localStorage
  * sessionStorage

---

### What's the difference?

<img  src="/media/javascript-images/javascript-18/storageapi.png" alt="storage difference">


---
#### Cookies

* Cookies are text based information saved in the browser.
* Is a part of the window object.
* A Cookie can store different information but it they are usually used for:
  * User information
  * Tracking
  * Shopping carts, game scores
* GDPR


---

#### Cookies and GDPR - short description
In short the EU directive means that before somebody can store or retrieve any information from a computer, mobile phone or other device, the user must give informed consent to do so. Many websites have added banners (AKA "cookie banners") since then to inform the user about the use of cookies. - <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">MDN 2019</a>


---

#### Cookies

* Cookie size limited to 4kb
* Since its a text string it's usually used for a single value, however you can split it into multiple values with ","
* Then you have to extract the values after



---

#### Setting Cookies
* Cookies are set both from the server response (cookie is stored in header) and using JavaScript

In JS
```JavaScript
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
```

Deleting a cookie is done by setting am already expired date or a none value
```JavaScript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```




---

#### localStorage & sessionStorage

* 10mb max
* Is a part of the window object.
* Data stored in sessionStorage is deleted when session is ended (browser tab is closed)
* Data stored in localStorage has no expire date and will not be deleted when the browser is closed


---

#### localStorage & sessionStorage

* consists of name values pairs
* part of the window object (available everywhere)


---

#### Adding to storage

```JavaScript
// SAVING data to sessionStorage:
sessionStorage.setItem("key", "value");

//READING data from sessionStorage:
let lastname = sessionStorage.getItem("key");

//REMOVING saved data from sessionStorage:
sessionStorage.removeItem("key");

// REMOVING ALL saved data from sessionStorage:
sessionStorage.clear();

//localStorage has the same methods
```


---

#### Inspecting Storage in chrome

<img  src="/media/javascript-images/javascript-18/storage.png" alt="inspecting storage">


---

### Questions?

---

### Have a nice weekend!

<img  src="/media/javascript-images/javascript-18/weekend.jpg" alt="Weekend">

---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>