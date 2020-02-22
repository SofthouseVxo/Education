<!doctype html>
<html>
	<head>
    <title>React - Elements & Components</title>
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

### 6. React</h3>
##### Elements & Components</h5>

---


#### React Elements</h4>
          <ul>
            <li>Elements in React is not the same as ordinary HTML elements.</li>
            <li>Elements are the smallest building blocks of React apps.</li>
            <li>An element describes what you want to see on the screen.</li>
            <li>React elements a immutable -> You cannot change it after it has been created.</li>
            <li>It's like a frame in a movie, it represents the UI at a certain point in time.</li>
          </ul>

---


####  Root DOM node
            ```HTML
            <div id="root"></div> // In your index.html
            ```
            ```JavaScript
            // In your you js file
            // Everything in this root DOM node will be managed by React DOM
            const element = <h1>Hello, world</h1>;
            ReactDOM.render(element, document.getElementById('root'));
            ```


---


#### Ticker example</h4>
          <ul>
            <li>Inspect ticker application i browser</li>
            <li>Even though we describe the whole UI tree we only update the node that changed in the HTML.</li>
            <li>Every tick the React DOM's were compared and the UI was updated.</li>
          </ul>

---


#### React & Components</h4>
          <ul>
            <li>Every piece of a UI is a component.</li>
            <li>Components can be composed together to create other components.</li>
            <li>The application itself is a component: a composition of components.</li>
            <li>Components let you split the UI into independent, reusable pieces.</li>
          </ul>

---


#### Components</h4>
          <ul>
            <li>React lets you define components as classes or functions.</li>
            <li>Components defined as classes currently provide more features.</li>
            <li>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props") and return React elements describing what should appear on the screen.</li>
          </ul>

---


####  React Component defined as a function

* This function is a valid React component because it accepts a single “props" (Properties) argument with data.
* And returns a React element.
* Props is an object.
* These components are called “function components" because they are literally JavaScript functions.

            ```JavaScript
            function Welcome(props) {
              return <h1>Hello</h1>;
            }
            ```
            ```HTML
            <Welcome/>  <!-- To create add in JSX -->
            ```


---


####  React Component defined as a class

* Every class component should have a ```render()``` method which returns the react element.
* Props end up in this.props.
* The ```render()``` gets called every time the components state updates.

            ```JavaScript
            class Welcome extends React.Component {
              render() {
                console.log(this.props);
                return <h1>Hello</h1>;
              }
            }
            ```
            ```HTML
            <Welcome/> <!-- To create add in JSX -->
            ```


---


####  Everything passed as an attribute lands in props

            ```JavaScript
            function Welcome(props) {
              return <h1>Hello, {props.name}</h1>;
            }
            ```
            ```JavaScript
            <Welcome name={'John Doe'} />
            ```


---


####  Everything passed as an attribute lands in props

            ```JavaScript
            class Welcome extends React.Component {
              render() {
                return <h1>Hello, {this.props.name}</h1>;
              }
            }
            ```
            ```JavaScript
            <Welcome name={'John Doe'} />
            ```


---


####  Order things happen

* We call ReactDOM.render() with the ```<Welcome name="John doe" />``` element.
* React calls the Welcome component with ```{name: 'John doe'}``` as the props.
* Our Welcome component returns a ```<h1>Hello, John doe</h1>``` element as the result.
* React DOM efficiently updates the DOM to match ```<h1>Hello, John doe</h1>```.


---


####  Everything inside closing tag ends up in props.children

            ```JavaScript
            <MyFirstComponent>
              <p>Hello</p>
            <MyFirstComponent/>
            ```
            ```JavaScript
            function MyFirstComponent(props, children) {
              return children;
            }
            ```


---


####  Composing Components

            ```JavaScript
            function CompA() {
              return (
                <CompX>
                  <CompB/>
                  <CompC/>
                </CompX>
              );
            }
            ```

            ```JavaScript
            function CompX(props) {
              return (
                <div className="some-class">
                  {props.children} // CompB & CompC
                </div>
              );
            }
            ```


---


  <img style="width: 700px;" src="/new/media/react-images/react-6/composing.png" alt="lifecycle methods">

---


####  Composing Components

* Components can refer to other components in their output. 
* This lets us use the same component abstraction for any level of detail. 
* A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

            ```HTML
            <Dialog>
              <HeaderComponent text="My dialog header text">
              <ContentComponent text="My dialog content text">
            </Dialog>
            ```

            ```JavaScript
            function Dialog(props) {
              return (
                <div className="dialog-background">
                  <div className="dialog">
                    {props.children}
                  </div>
                </div>
              );
            }
            ```


---


#### So What About Inheritance?</h4>
          <p>"At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
          </br></br>
            Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
          </br></br>
            If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it." - <a href="https://reactjs.org/docs/composition-vs-inheritance.html" target="_blank">React Docs</a></p>

---


          #### Props are read only

          * It must never modify its own props.
          * All React components must act like pure functions with respect to their props.
          ```JavaScript
            function sum(a, b) {return a + b;}
            function withdraw(account, amount) {account.total -= amount;}
          ```


---

