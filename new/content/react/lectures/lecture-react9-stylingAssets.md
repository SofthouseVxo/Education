### 9. React
##### Styling & Assets

---

#### Create-react-app uses webpack to bundle the app

* Bundles your:
  * JS
  * CSS
  * Sass → CSS
  * Images and other assets

---

#### From Dev to Build

* npm run build
*  /src → (webpack bundles it into) → /build

---

#### Image example
<img src="/media/react-images/react-9/folders.png" alt="in folders">

---

#### In code
<img src="/media/react-images/react-9/code.png" alt="in code">

---

####  Using CSS with React and Create-react-app
* Inline styling → ```<div style={{color: 'red'}}/>```.
* index.css → Global styles, no need to import.
* component styles → Needs to be imported, No encapsulation.
* css modules → encapsulated styles (focus in this course).
* styled components → Library for styling react components (CSS in JS).
* Other CSS in JS Comparison.

---

#### CSS modules

* Not a part of react itself - but comes with create-react-app
* Why use css modules?
  * No more conflicts.
  * Explicit dependencies.
  * No global scope.
* <a href="https://github.com/css-modules/css-modules">https://github.com/css-modules/css-modules</a>

---

#### Create-react-app supports css modules

* Webpack creates encapsulated styles when bundling.
* moduleTestClass → ModuleStylingComponent_moduleTestClass__lQCZW
* Have to name the css file with .module → myCSSFile.modules.css
* Import styles from './myCSSFile.module.css

---

<img src="/media/react-images/react-9/css.png" alt="in folders">

---

#### Webpack Config

* npm run eject inside react project to get access (can't undo).
* webpack.config.js
* style-loaders → sets how styles are loaded and bundled.
* file-loaders → sets how files are loaded and bundled.