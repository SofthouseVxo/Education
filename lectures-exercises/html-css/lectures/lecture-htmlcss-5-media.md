### 5.HTML & CSS
#### Media (images, audio & video)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Directory structure example
<img  src="/media/html-css-images/html-css-5/folder2.png" alt="folder structure">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Images

* Images can be used to lift your site, but bad usage might make it look worse.
* When using images in your webpages always consider why you use your images.
* Also where to get and store photos/images? Are they stored on a server you own, in the cloud or elsewhere?


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Formats

* JPEG, GIF, PNG & SVG are image formats often used on the web. 
* Setting the size of images can be done using different units (px, pt, em, cm, mm).


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Image sizes

* If the image is to small i can be stretched or pixelated.
* If the image is to big it takes a long time to load.
* Test examples (chapter 5).


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  HTML Image

* ```<img>``` is the element for images.
* The src attribute tells the browser where to find the image.
* The alt attribute describes the image if you can't see it.
* Screen readers which reads the webpage out loud will read the alt text.
* The alt text will also be displayed if the image failed loading.

```HTML
<!-- using the img tag -->
<img src="images/quokka.jpg" alt="Quokka">
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  HTML Image example

```HTML
<img
  title="Squirrel"
  width="400"
  height="300"
  src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Squirrel_posing.jpg"
  alt="Squirrel"
>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### HTML Image example
<img
  title="Squirrel"
  width="400px"
  height="300px"
  src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Squirrel_posing.jpg"
  alt="Squirrel"
>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Placing an image

* The image will behave differently depending on where you place it (inside different elements).
* It can be controlled using the align attribute.
* See examples (chapter 5)


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Media formats
<a href="https://www.w3schools.com/html/html_media.asp">List with file formats</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  HTML Audio

```HTML
<audio src="audio/test-audio.ogg" controls autoplay>
  <p>This browser does not support our audio format.</p>
</audio>
```

```HTML
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```
[Try on w3schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_audio_all)


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Some browsers does not allow for autoplay when there is sound. For good reasons.
#### To make autoplay work add <a href="https://www.w3schools.com/tags/att_video_muted.asp">muted</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  HTML Video

```HTML
<video
  src="video/puppy.mp4"
  poster="images/puppy.jpg"
  width="400" height="300"
  preload controls loop>
  <p>A video of a puppy playing in the snow</p>
</video>
```

```HTML
<video width="400" controls>
  <source src="mov_bbb.mp4" type="video/mp4">
  <source src="mov_bbb.ogg" type="video/ogg">
  Your browser does not support HTML5 video.
</video>
```
[Try on w3schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_video_autoplay)