### 13.HTML & CSS

#### Responsive web design

---

#### What is a responsive web design?

- The layout changes depending on the screensize and resolution that the user has
- Responsive web design makes your web page look good on all devices.
- Desktop, mobile, tablet, watches
- Screen sizes and resolutions differ on each device/screen

---

<img src="/media/html-css-images/html-css-13/resp.png" alt="different screens">
<a href="https://www.w3schools.com/css/css_rwd_intro.asp">More examples</a>

---

#### Different techniques

- Fluid grids, columns and sections has relative values (%)
- Flexbox & CSS grid
- CSS3 Media queries
- (JavaScript solutions)

---

#### Viewport

- The viewport is the user's visible area of a web page.
- The viewport will be smaller on a mobile phone than on a computer screen.
- Back in the days it was common to just scale down the site from desktop to mobile
- <a href="https://www.w3schools.com/css/css_rwd_viewport.asp">W3schools example</a>

---

#### Viewport meta tag

- The browser will (probably) render the width of the page at the width of its own screen.
- If that screen is 480px wide, the browser window will be 480px wide, rather than way zoomed out and showing 960px.
- [CSS-Tricks meta tag description](https://css-tricks.com/snippets/html/responsive-meta-tag/)

```HTML
  <meta name="viewport" content="width=device-width, initial-scale=1">
```

---

#### Media Queries

- A CSS technique introduced in CSS3.
- It uses the @media rule to include a block of CSS properties only if a certain condition is true.

```CSS
  @media not|only mediatype and (mediafeature and|or|not mediafeature) {
    /*CSS-Code;*/
  }

  /* If the browser window is 480px or smaller, the background color will be green: */
  @media only screen and (max-width: 480px) {
    body {
      background-color: green;
    }
  }
```

---

#### Linking different stylesheets depending on screen size

```HTML
  <!-- If the screen is 900px or wider widescreen.css will be loaded -->
  <link rel="stylesheet" media="screen and (min-width: 900px)" href="widescreen.css">
  <link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css">
```

---

#### @media Rule

Can be used to check:

- width and height of the viewport (min/max).
- width and height of the device (min/max).
- orientation (landscape/portrait).
- resolution.

<a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_media_bg" target="_blank">Try on w3schools</a>

---

#### Orientation: Portrait / Landscape

- Change layout of a page depending on the orientation of the browser.

```CSS
  @media only screen and (orientation: landscape) {
    body {
      background-color: lightblue;
    }
  }
```

---

#### Media rules needs to be placed beneath the style they effect.

---

#### Mobile first

- Mobile First means designing for mobile before designing for desktop or any other device.
- Instead of changing styles when the width gets smaller, we should change the design when the width gets larger.

---

#### Breakpoints

- A breakpoint is where certain parts of the design will behave differently on each side of the breakpoint.

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

---

#### Typical Device Breakpoints

- Hard to create an exact breakpoint for each device, since there are tons of screens and devices with different widths and heights
- Five groups, to make it easier

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

---

#### Multiple breakpoints

<a href="https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_col-s">Example</a>

---

#### It is not uncommon to build two versions of the entire site/app

- Mobile - https://mobil.blocket.se/
- Desktop - https://www.blocket.se/

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

---

#### Video

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

---

#### Iframes

- Iframes are windows that you cut out from your page, which can be displayed in another page.
- You can embed Google maps, Google docs, Youtube videos for example.

---

#### Youtube video in an iframe

```HTML
<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```

---

#### Youtube video in an iframe

- We display youtube content on this site.
- Meaning that if youtube crashes or being remved from the service, the video will not be displayed properly.

<iframe
  width="420"
  height="315"
  src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>

---

#### Go to youtube and google maps to get code for embedding.

---

#### CSS variables

- What is a variable?
- Temporary storage for bits of information.
- A variable is like a drawer or a box.
- You can put a value/thing in it, close it and then when you want to use it you open the drawer.

---

#### CSS variables

```CSS
/* :root or the body can be used for global scope classes
  use double dash (--) to declare a CSS variable */
:root {
  --main-bg-color: coral;
}

/* the color can now be used in multiple places */
#div1 {
  background-color: var(--main-bg-color);
}

#div2 {
  background-color: var(--main-bg-color);
}
```

[w3schools](https://www.w3schools.com/css/css3_variables.asp)
