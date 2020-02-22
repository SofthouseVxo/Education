<!doctype html>
<html>
	<head>
		<title>13.HTML & CSS - Responsive web design</title>
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


### 13.HTML & CSS</h3>
##### Responsive web design</h5>

---


#### What is a responsive web design?</h4>
          <ul>
            <li>The layout changes depending on the screensize and resolution that the user has</li>
            <li>Responsive web design makes your web page look good on all devices.</li>
            <li>Desktop, mobile, tablet, watches</li>
            <li>Screen sizes and resolutions differ on each device/screen</li>
          </ul>

---


    <img style="margin-top: 0px;" src="../../media/html-css-images/html-css-13/resp.png" alt="different screens">
            <p><a href="https://www.w3schools.com/css/css_rwd_intro.asp">More examples</a></p>

---


#### Different techniques</h4>
          <ul>
            <li>Fluid grids, columns and sections has relative values (%)</li>
            <li>Flexbox & CSS grid</li>
            <li>CSS3 Media queries</li>
            <li>(JavaScript solutions)</li>
          </ul>

---


#### Viewport</h4>
          <ul>
            <li>The viewport is the user's visible area of a web page.</li>
            <li>The viewport will be smaller on a mobile phone than on a computer screen.</li>
            <li>Back in the days it was common to just scale down the site from desktop to mobile</li>
            <li><a href="https://www.w3schools.com/css/css_rwd_viewport.asp">W3schools example</a></li>
          </ul>

---


####  Viewport  meta tag
* The browser will (probably) render the width of the page at the width of its own screen.
* If that screen is 480px wide, the browser window will be 480px wide, rather than way zoomed out and showing 960px.
* [CSS-Tricks meta tag description](https://css-tricks.com/snippets/html/responsive-meta-tag/)
            ```HTML
              <meta name="viewport" content="width=device-width, initial-scale=1">
            ```


---


#### Grid view</h4>
          <ul>
            <li>A grid-view, means that the page is divided into columns</li>
            <li>A responsive grid-view often has 12 columns, and has a total width of 100%, and will shrink and expand as you resize the browser window.</li>
          </ul>

---


#### 12 column grid</h4>

  <img src="../../media/html-css-images/html-css-13/grid.png" alt="gid">

---


####  Responsive Grid

            ```CSS
              .col-1 {width: 8.33%;}
              .col-2 {width: 16.66%;}
              .col-3 {width: 25%;}
              .col-4 {width: 33.33%;}
              .col-5 {width: 41.66%;}
              .col-6 {width: 50%;}
              .col-7 {width: 58.33%;}
              .col-8 {width: 66.66%;}
              .col-9 {width: 75%;}
              .col-10 {width: 83.33%;}
              .col-11 {width: 91.66%;}
              .col-12 {width: 100%;}
            ```
            [w3schools example](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_cols)


---



####  Responsive Grid

* The grid should be 12
* So the columns should add up to 12 always

            ```HTML
            <div class="row">
              <div class="col-3">...</div> <!-- 25% -->
              <div class="col-9">...</div> <!-- 75% -->
            </div>
            ```
            [w3schools example](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_cols)


---




          #### Media Queries
          * A CSS technique introduced in CSS3.
          * It uses the @media rule to include a block of CSS properties only if a certain condition is true.

          ```CSS
            @media not|only mediatype and (mediafeature and|or|not mediafeature) {
              CSS-Code;
            }

            /* If the browser window is 480px or smaller, the background color will be green: */
            @media only screen and (max-width: 480px) {
              body {
                background-color: green;
              }
            }
          ```
        </script>

---


          #### Linking different stylesheets depending on screen size

          ```HTML
            <!-- If the screen is 900px or wider widescreen.css will be loaded -->
            <link rel="stylesheet" media="screen and (min-width: 900px)" href="widescreen.css">
            <link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css">
          ```
        </script>

---



#### @media Rule</h4>
        <ul>
          <li>Can be used to check</li>
          <ul>
            <li>width and height of the viewport (min/max)</li>
            <li>width and height of the device (min/max)</li>
            <li>orientation (landscape/portrait)</li>
            <li>resolution</li>
          </ul>
          <li><a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_media_bg" target="_blank">Try on w3schools</a></li>
        </ul>

---


          #### Orientation: Portrait / Landscape

          * Change layout of a page depending on the orientation of the browser.

          ```CSS
            @media only screen and (orientation: landscape) {
              body {
                background-color: lightblue;
              }
            }
          ```
        </script>

---


#### Media rules needs to be placed beneath the style they effect.</h4>

---
      

#### Mobile first</h4>
        <ul>
          <li>Mobile First means designing for mobile before designing for desktop or any other device</li>
          <li>Instead of changing styles when the width gets smaller, we should change the design when the width gets larger</li>
        </ul>

---


          #### Breakpoints

          * A breakpoint is where certain parts of the design will behave differently on each side of the breakpoint.

          ```CSS
          /* For mobile phones: */
          [class*="col-"] {
            width: 100%;
          }

          @media only screen and (min-width: 768px) {
            /* For desktop: */
            .col-1 {width: 25%;}
            .col-2 {width: 50%;}
            .col-3 {width: 75%;}
            .col-4 {width: 100%;}
          }
          /* Mobile first, since we are changing styles when the width gets larger than 768px. */
          ```

          [Try on w3schools](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_mobilefirst)
        </script>

---


          #### Typical Device Breakpoints

          * Hard to create an exact breakpoint for each device, since there are tons of screens and devices with different widths and heights
          * Five groups, to make it easier

          ```CSS
            /* Extra small devices (phones, 600px and down) */
            @media only screen and (max-width: 600px) {...}

            /* Small devices (portrait tablets and large phones, 600px and up) */
            @media only screen and (min-width: 600px) {...}

            /* Medium devices (landscape tablets, 768px and up) */
            @media only screen and (min-width: 768px) {...}

            /* Large devices (laptops/desktops, 992px and up) */
            @media only screen and (min-width: 992px) {...}

            /* Extra large devices (large laptops and desktops, 1200px and up) */
            @media only screen and (min-width: 1200px) {...}
          ```

          [Try on w3schools](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_mediaquery_breakpoints)
        </script>

---


#### Multiple breakpoints</h4>
        <p><a href="https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_col-s">Example</a></p>

---


#### It is not uncommon to build two versions of the entire site/app</h4>
        <ul>
          <li>Mobile - https://mobil.blocket.se/</li>
          <li>Desktop - https://www.blocket.se/</li>
        </ul>

---


          #### Images

          ```CSS
          img {
            width: 100%;
            height: auto;
          }

          img {
            max-width: 100%;
            height: auto;
          }
          ```

          [Try on w3schools](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_image)
        </script>

---


          ####  Video

          ```CSS
          video {
            width: 100%;
            height: auto;
          }

          video {
            max-width: 100%;
            height: auto;
          }
          ```

          [Try on w3schools](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_video2)
        </script>

---
    </div>
  </div>
  
		<script src="../../libs/reveal/js/reveal.js"></script>
		<script src="../../initialize.js"></script>
	</body>
</html>
