### 16. JavaScript
#### jQuery a JavaScript Library

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### What is jQuery?

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### According to jQuery themselves
jQuery is a fast, small, and feature-rich JavaScript library. It makes things like **HTML document traversal** and **manipulation**, **event handling**, **animation**, and **Ajax** much simpler with an easy-to-use API that works across a multitude of browsers. 
With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript. - <a href="https://jquery.com/">jQuery.com</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
        

#### JQuery according to w3schools

* jQuery is a lightweight, "write less, do more", JavaScript library.
* The purpose of jQuery is to make it much easier to use JavaScript on your website.
* jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.
* Simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery doesn't do anything you cannot achieve with pure JavaScript.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Example
Changes the HTML in the button element with the class 'continue' to 'Next Step...'

```JavaScript
$("button.continue").html("Next Step...");
```
How would you do this with vanilla JS?

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Downloading jQuery

* <a href="https://jquery.com/download/" target="_blank">Downloads</a>
* <a href="https://code.jquery.com/">CDN's</a>
* npm ```npm install jquery --save```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery source code

<img style="margin-top: 0px;" src="/media/javascript-images/javascript-16/jquery.png" alt="jquery source code">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Inspect jQuery

* Include jQuery in your project and ```console.log(window)``` and locate jQuery in the object.
* **$** is simply an alias for jQuery and it's often employed because it's shorter and faster to write.

```JavaScript
console.log(window.jQuery); // jQuery function
console.log(window.$); // jQuery function same as above
console.log(jQuery); // jQuery function same as above
console.log($); // jQuery function same as above
console.log(typeof $) // function
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  The jQuery function

* jQuery is exposed as a function.
* jQuery functions returns an object, and this can have properties and methods which it has.

```JavaScript
// The jQuery method lets you find one or more elements on a page.
$('button').addClass('primary-button') // { 0: button.primary-button, 1: button.primary-button }
```

```JavaScript
console.log(jQuery('button.primary-button')); 
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Basic syntax is: $(selector).action() 

* A $ sign to define/access jQuery
* A (selector) to "query (or find)" HTML elements
* A jQuery action() to be performed on the element(s)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Basic syntax - selectors

* jQuery uses CSS syntax to select elements.

```JavaScript
$("p").hide() // hides all <p> elements.

$(".test").hide() // hides all elements with class="test".

$("#test").hide() // hides the element with id="test".
```
[More examples of jQuery selectors](https://www.w3schools.com/jquery/jquery_selectors.asp)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery event methods

* In jQuery, most DOM events have an equivalent jQuery method.
* Event methods trigger or attach a function to an event handler for the selected elements.

jQuery
```JavaScript
$("#my-button").click(function(){
// code...
}); 
```

Vanilla JS
```JavaScript
let myButton = document.getElementById('my-button');
myButton.addEventListener("click", function() {
// code...
});
```
[List of jQuery event methods](https://www.w3schools.com/jquery/jquery_ref_events.asp)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Document ready function
    
* Code included inside $( document ).ready() will only run once the page DOM is ready for code to execute.

jQuery
```JavaScript
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
```

Vanilla JS
```JavaScript
  document.addEventListener("DOMContentLoaded", function() {
  // code...
});
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery effects
    
* **hide & show** 
* toggle
* animate

jQuery
```JavaScript
$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
}); 
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery effects
    
* **hide & show** 
* toggle
* animate

jQuery
```JavaScript
$("#hide").click(function(){
  $("p").hide(1000); // takes 1s to hide
});

$("#show").click(function(){
  $("p").show(1000, function(){  // Callback called when fully visible again after 1s.
    console.log('fully visible'); 
  });
}); 
```
[Try on w3schools](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery effects - toggle
    
* toggles between hidden and shown

jQuery
```JavaScript
$("button").click(function(){
  $("p").toggle();
}); 
```
[Try on w3schools](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_toggle)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery effects - animate
  
```JavaScript
//  $(selector).animate({params},speed,callback);

$("button").click(function(){
  $("div").animate({left: '250px'});
}); 

$("button").click(function(){
  $("div").animate({left: '250px'}, 1000, function(){
    alert('animation done!');
  });
}); 
```
[Try on w3schools](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery effects - animate
  
* jQuery animate() - Manipulate Multiple Properties

```JavaScript
//  $(selector).animate({params},speed,callback);

$("button").click(function(){
  $("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
});
```

[Try on w3schools](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1_multicss)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### jQuery and DOM manipulation

jQuery offers many DOM related methods that make it easy to:
    
* Access and manipulate elements.
* Access and minpulate attributes.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Three jQuery methods for DOM manipulation

* text() - Sets or returns the text content of selected elements.
* html() - Sets or returns the content of selected elements (including HTML markup).
* val() - Sets or returns the value of form fields.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery - DOM manipulation

* Getting content and attributes

```HTML
<div id="my-div">
  <p id="my-text">My Text</p>
  <input type="text" id="my-input" value="John Doe">
  <a id="my-link" href="https://www.google.com">google</a>
</div>
```

```JavaScript
$(document).ready(function(){
  console.log(('Text: ' + $('#my-text').text())); // Text: My Text
  console.log(('HTML: ' + $('#my-div').html())); // HTML: <p id="my-text">My Text</p> <input type="text" id="my-input" value="John Doe"> <a id="my-link" href="https://www.google.com">google</a>
  console.log(('Value: ' + $('#my-input').val())); // Value: John Doe
  console.log(('Attribute: ' + $('#my-link').attr('href'))); // Attribute: https://www.google.com
});
```

[Try on w3schools](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_html_get)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery - DOM manipulation

* Setting content and attributes

```HTML
<div id="my-div">
  <p id="my-text"></p>
  <input type="text" id="my-input" value="John Doe">
  <a id="my-link" href="https://www.google.com">google</a>
</div>
```

```JavaScript
$(document).ready(function(){
  $('#my-text').text('New Text');
  $('#my-input').val('New input value');
  $('#my-link').attr('href', 'https://www.bing.com'); // now google links goes to bing instead
});

$(document).ready(function(){
  $('#my-div').html('<h1>New h1</h1>');  // will overwrite and only add a h1
});
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery - DOM manipulation - Adding new content

* ```append()``` = Inserts content at the end of the selected elements.
* ```prepend()``` = Inserts content at the beginning of the selected elements.
* ```after()``` = Inserts content after the selected elements.
* ```before()``` = Inserts content before the selected elements.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery - DOM manipulation

Initial HTML
```HTML
<div id="my-div"></div>
```

```JavaScript
$(document).ready(function(){
  $('#my-div').append('<p>Some appended text.</p>');
  $('#my-div').prepend('<p>Some prepended text.</p>'); 
  $('#my-div').after('<p>Some text after</p>');
  $('#my-div').before('<p>Some text before</p>');
});
```

Result
```HTML
<p>Some text before</p>
<div id="my-div">
  <p>Some prepended text.</p>
  <p>Some appended text.</p>
</div>
<p>Some text after</p>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery - DOM manipulation

* Add Several New Elements With ```append()``` and ```prepend()```

Initial HTML
```HTML
<div id="my-div"></div>
```

```JavaScript
$(document).ready(function(){
  let txt1 = '<p>Text.</p>'; 
  let txt2 = $('<p></p>').text('Text.');
  let txt3 = document.createElement('p');
  txt3.innerHTML = 'Text.';
  $('#my-div').after(txt1, txt2, txt3);  // Append the new elements
});
```

Result
```HTML
<div id="my-div">
  <p>Text.</p>
  <p>Text.</p>
  <p>Text.</p>
</div>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery - DOM manipulation

* Add Several New Elements With ```before()``` and ```after()```

Initial HTML
```HTML
<div id="my-div"></div>
```

```JavaScript
$(document).ready(function(){
  let txt1 = '<p>Text.</p>';
  let txt2 = $('<p></p>').text('Text.');
  let txt3 = document.createElement('p');
  txt3.innerHTML = 'Text.';
  $('#my-div').after(txt1, txt2, txt3); // Append the new elements
});
```
Result
```HTML
<div id="my-div"></div>
<p>Text.</p>
<p>Text.</p>
<p>Text.</p>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery - DOM manipulation - Removing elements

* ```remove()``` - Removes the selected element (and its child elements)
* ```empty()``` - Removes the child elements from the selected element

```HTML
<div id="my-div">
  <p>Hello World!</p>
</div>
```

```JavaScript
$(document).ready(function(){
  $('#my-div').remove();  // removes the <div> and <p> 
  $("#div1").empty(); // removes only the <p>
});
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery & CSS'ing

* ```addClass()``` - Adds one or more classes to the selected elements
* ```removeClass()``` - Removes one or more classes from the selected elements
* ```toggleClass()``` - Toggles between adding/removing classes from the selected elements
* ```css()``` - Sets or returns the style attribute

```JavaScript
$(document).ready(function(){
  $("#div1").addClass("important blue");  // adds classes blue and imortant
  $("h1, h2, p").removeClass("blue"); // removes class blue
  $("h1, h2, p").toggleClass("blue"); // toggles from having class blue and not having it
  console.log($("p").css("background-color")); // gets what bg color is has
  $("p").css("background-color", "yellow"); // sets background color to yellow
  $("p").css({"background-color": "yellow", "font-size": "200%"}); // sets multiple css properties
});
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### AJAX & jQuery
#### jQuery Slim does not have AJAX functionality!
##### Check your bootstrap import so that it is not the slim version!

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  AJAX & jQuery

* Loading external content.

```JavaScript
$(selector).load(URL,DATA,CALLBACK);
```

* URL = file or external path
* DATA = 	key/value data is converterd to a string when sent
* CALLBACK 	= Function that runs when request is done

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  AJAX & jQuery

```JavaScript
$(document).ready(function(){
  $('#div1').load('text.txt', function(responseTxt, statusTxt, xhr){
    if(statusTxt == 'success')
      alert('External content loaded successfully!');
    if(statusTxt == 'error')
      alert('Error: ' + xhr.status + ": " + xhr.statusText);
  });
});
```

```HTML
<div>
  Some text stored in the text.txt file..
</div>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Callback parameters

1. responseTxt - contains the resulting content if the call succeeds.
1. statusTxt - contains the status of the call.
1. xhr - contains the XMLHttpRequest object.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery $.get() & $.post()

* The $.get() method requests data from the server with an HTTP GET request.
* The $.post() method requests data from the server using an HTTP POST request.

```JavaScript
// The optional callback parameter is the name of a function to be executed if the request succeeds.
$.get(URL,callback);

// The optional data parameter specifies some data to send along with the request.
// The optional callback parameter is the name of a function to be executed if the request succeeds.
$.post(URL,data,callback);
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery $.get()

```JavaScript
$(document).ready(function(){
  $.get('https://jsonplaceholder.typicode.com/users/1', function(data, status){
    console.log(data, status);  // Response object (already parsed) & 'success'
  });
}); 
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  jQuery $.post()

```JavaScript
$(document).ready(function(){
  $.post("https://jsonplaceholder.typicode.com/todos",
  {
    userId: 43,
    id: 33,
    title: 'Hello World!',
    completed: false
  },
  function(data, status){
    console.log(data,status);  // response object & 'success'
  });
});
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Pros and Cons jQuery vs JavaScript
  
* Pros
  * Eliminates a lot of cross browser javascript issues -> inconsistencies between browsers (browsers have become better over time).
  * Can do more with less code.
  * Easier to work with AJAX.
  * Easy to get started with.
* Cons
  * Overhead of adding extra javascript to page. (jQuery is quite small though).
  * Multiple versions & Regular updates that change existing behaviour can be a risk.
  * Might encourage people to not learn and understand the problems that jQuery solve.
  * jQuery is  slower than CSS in many cases.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### To understand how jQuery works one needs to first know how JavaScript works.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>