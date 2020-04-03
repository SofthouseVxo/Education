# Softhouse Educational Resources

## Links to Courses

* [HTML & CSS](/courses/html-css)
* [JavaScript](/courses/javascript)
* [UX](/courses/ux)
* [Android Development](/courses/android-dev)
* [Angular](/courses/angular)
* [React](/courses/react)
* [Backend APIs](/courses/backend-api)
* [General lectures](/courses/general)

## Overview

* code
  * example code for each course
* courses
   * course
      * lectures
      * exercises
      * exams
      * assignments
      * codealongs

### Available courses

* HTML & CSS
* UX
* JavaScript
* Android Development(in progress)
* Angular
* React
* Backend APIs

## Running slides

1. you need to have [Node.js](https://nodejs.org/en/) installed.

1. clone this repository

1. cd into repo

1. ```$ npm install```

1. To present a slides from a lecture the run (in root).
```
$ node present.js --type=<lecture-type> --lecture=<lecture-number>
```

example

```
$ node present.js --type=angular --lecture=4
```

## Generating mdx files from markdown files

1. you need to have [Node.js](https://nodejs.org/en/) installed.

1. clone this repository

1. cd into repo

1. ```$ npm install```

1. generate mdx files
```
$ node generate.js --type=<lecture-type>
```

example

```
$ node present.js --type=android-dev
```

* For now it is only possible to use the width attribute for images in markdown.
* example: ```width="400"``` will be transformed into ```style={{width: 400}}``` and will work with mdx.


##### types

* html-css
* ux
* general
* javascript
* android-dev
* angular
* react
* backend-api



#### Copyright Softhouse Consulting AB 2020 Ⓒ
