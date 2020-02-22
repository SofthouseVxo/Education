<!doctype html>
<html>
	<head>
		<title>14.HTML & CSS - Transform, Transition & Animate</title>
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


### 14.HTML - CSS</h3>
##### Transform, Transition & Animate</h5>

---


#### Browsers have different rendering engines</h4>
          <ul>
            <li>Chrome - Blink (webkit) </li>
            <li>Safari - Webkit</li>
            <li>Firefox - Gecko</li>
          </ul>

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


#### Transform</h4>
          <ul>
            <li>Translate, rotate, scale, and skew elements.</li>
            <li>Changing shape, size and position.</li>
            <li>CSS supports 2D and 3D transition, we will just check 2D</li>
            <li><a href="https://caniuse.com/#search=2d%20transform">CanIUse</a></li>
          </ul>

---


#### Different transforms</h4>
          <ul>
            <li>translate( ) = Moves an element from its current position</li>
            <li>rotate( ) = Rotates an element clockwise</li>
            <li>scale( ) = Increases or decreases the size of an element</li>
            <li>skew( ) = Skews an element along the X and Y-axis</li>
            <li>matrix( ) = Combines all the 2D transform methods into one</li>
          </ul>

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


#### 2D tranform examples at <a href="https://www.w3schools.com/css/css3_2dtransforms.asp" target="_blank">w3schools</a></h4>

---


#### CSS Transitions</h4>
          <ul>
            <li>Transitions allows you to change property values smoothly</li>
            <li>Transition from one value to another over a given duration.</li>
            <li>You MUST to specify the <b>CSS property</b> you want to add an effect to and the <b>duration</b> of the effect</li>
          </ul>

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


#### CSS animations </h4>
          <ul>
            <li>CSS animations are alternatives to animating using JavaScript</li>
            <li>It works on most elements</li>
            <li><a href="https://caniuse.com/#search=css%20animations">CanIUse</a></li>
          </ul>

---


#### What is an animation?</h4>
          <ul>
            <li>An animation lets an element gradually change from one style to another.</li>
            <li>No limits to how many CSS properties or how many times.</li>
            <li>You need to specify keyframes for the animation.</li>
            <li>Keyframes hold what styles the element will have at certain times.</li>
          </ul>

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


---
			</div>
    </div>
    
		<script src="../../libs/reveal/js/reveal.js"></script>
		<script src="../../initialize.js"></script>
	</body>
</html>
