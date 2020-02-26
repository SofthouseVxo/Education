### 14.HTML - CSS
#### Transform, Transition & Animate


---

#### Browsers have different rendering engines

* Chrome - Blink (webkit) 
* Safari - Webkit
* Firefox - Gecko



---

#### Prefixes
* -webkit-, -moz- are prefixes that sometimes needs to be specified due to browser compatability
* -webkit- = Safari, Chrome (Blink was originally forked from webkit)
* -moz- = Mozilla Firefox
* -o- = Opera

```CSS
/* Use standard and the specified to cover more browsers */
-webkit-transition: width 2s; /* Safari */
transition: width 2s; /* Standard */
```



---

#### Transform

* Translate, rotate, scale, and skew elements.
* Changing shape, size and position.
* CSS supports 2D and 3D transition, we will just check 2D
* <a href="https://caniuse.com/#search=2d%20transform">CanIUse</a>



---

#### Different transforms

* translate( ) = Moves an element from its current position
* rotate( ) = Rotates an element clockwise
* scale( ) = Increases or decreases the size of an element
* skew( ) = Skews an element along the X and Y-axis
* matrix( ) = Combines all the 2D transform methods into one



---

####  Transform rotate example
* rotate( ) is a what we call a method
* rotate(20deg) 20deg is a parameter that we pass into the method
* this will rotate the element 20deg clockwise

```CSS
div {
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari */
  transform: rotate(20deg);
}
```
[Try on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss3_transform_rotate)



---

#### 2D tranform examples at <a href="https://www.w3schools.com/css/css3_2dtransforms.asp" target="_blank">w3schools</a>


---

#### CSS Transitions

* Transitions allows you to change property values smoothly
* Transition from one value to another over a given duration.
* You MUST to specify the <b>CSS property</b> you want to add an effect to and the <b>duration</b> of the effect



---

####  CSS Transition
* ***width*** is the ***CSS property***
* ***3s*** is the ***duration***
* When the pointer hovers over the div the width of it transitions from 100 to 300px over 3 seconds.

```CSS
div {
  width: 100px;
  transition: width 3s;
}

div:hover {
  width: 300px;
}
```
[Try on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition1)



---

####  CSS Transition multiple properties

```CSS
div {
  transition: width 2s, height 4s, background 3s;
}
```



---

####  CSS Transition all properties

```CSS
div {
  transition: all 1s;
}
```



---

####  Speed curve
* Using curves gives a more natural feeling.
* Image a bouncing ball, it moves slower the higher in the bounce the ball is.

  ```CSS
  #myDiv {
    transition-timing-function: ease-in-out; /* specifies a transition effect with a slow start and end */
  }
  ```
  [Try on w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_speed)



---

####  Delaying the transition
* 1 second until the transition starts
* The transition lasts for 3 seconds

  ```CSS
  #myDiv {
    transition: width 3s;
    transition-delay: 1s;
  }
  ```



---

####  Adding Transforms and other ways of writing it.

```CSS
#myDiv {
  transition: width 2s, height 2s, transform 2s;
}

div {
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
}

myClass {
  transition: width 2s linear 1s;
}

```



---

#### CSS animations 

* CSS animations are alternatives to animating using JavaScript.
* It works on most elements.
* <a href="https://caniuse.com/#search=css%20animations">CanIUse</a>



---

#### What is an animation?

* An animation lets an element gradually change from one style to another.
* No limits to how many CSS properties or how many times.
* You need to specify keyframes for the animation.
* Keyframes hold what styles the element will have at certain times.



---

####  Animation from -> to example

```CSS
/* The animation code */
@keyframes example {
  from {background-color: red;} /* from = 0% */
  to {background-color: yellow;} /* to = 100% */
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example; /* refers to @keyframes example above */
  animation-duration: 4s; /* is 0 by default and no animation */
}
```
[Try on w3scools](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation1)



---

####  More complex animation

* Animating multiple styles
* Delay 2 seconds before animation starts

```CSS
@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}

div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s; /* delay before animation starts */
}
```
[Try on w3scools](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation2)



---

####  More complex animation

```CSS
@keyframes example {
  from {background-color:red; left:0px; top:0px;}
  to {background-color:blue; left:200px; top:200px;}
}

div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s; /* delay before animation starts */
  animation-iteration-count: 3; /* Animation will run 3 times, could be set to inifinite */
  animation-direction: alternate; /* normal, reverse, alternate, alternate-revers */
  animation-timing-function: ease-in-out; /* ease(default), linear, ease-in, ease-out, ease-in-out, cubic-bezier */
}
```
[Try on w3scools](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation_speed)