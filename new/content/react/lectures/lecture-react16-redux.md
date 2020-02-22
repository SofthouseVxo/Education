<!doctype html>
<html>
	<head>
		<title>React - Redux

					<h3>17. React</h3>
					<h5>State & Redux</h5>

---


#### Purpose of this lecture</h4>
					<p>The purpose of thie lecture is to give an introduction to redux and handling global state. Redux is simple but not easy, and it will take more than a day to grasp the concept and be ready to work with redux.</p>

---


#### Global state and local state.</h4>
					<ul>
						<li>Global state</li>
						<ul>
							<li>State in the whole app.</li>
							<li>logged user, showPopup.</li>
						</ul>
						<li>Local state</li>
							<ul>
								<li>State inside a component.</li>
								<li>showButton, user.</li>
							</ul>
					</ul>

---


#### State could be</h4>
					<ul>
						<li>Server response</li>
						<li>Cached data</li>
						<li>Locally created data that has not yet been persisted to the server.</li>
						<li>Active routes</li>
						<li>Selected tabs</li>
						<li>Spinners</li>
						<li>Pagination controls</li>
						<li>and so on.</li>
					</ul>

---


#### Flux</h4>
					<p>Flux is the application architecture that Facebook uses for building client-side web applications.</p>
					<img src="/new/media/react-images/react-16/flux.png" alt="flux">

---


#### Redux</h4>
					<p>Is a predictable state container for JavaScript apps.</p>

---


					<p>"If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features." - <a href="https://redux.js.org/introduction/motivation">redux.js</a></p>

---


#### Redux</h4>
					<ul>
						<li>Is standalone</li>
						<li>Works well with react</li>
						<li>Follows flux principles</li>
						<li>npm install --save redux</li>
						<li>npm install --save redux react-redux</li>
					</ul>

---


#### Redux devtools</h4>
					<ul>
						<li><a href="https://chrome.google.com/webstore/detail/redux-devtools">Chrome Download</a></li>
						<li><a href="https://addons.mozilla.org/sv-SE/firefox/addon/reduxdevtools/">Mozilla Download</a></li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### Needs to be added in your react application
						```JavaScript
						const store = createStore(
							reducer, /*preloadedState, */
							window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
						);
						```
					</script>

---



#### Actions, Reducers and the Store</h4>
					<ul>
						<li><b>Actions</b> are payloads of information that send data from your application to your store.</li>
						<li><b>Reducers</b> specify how the application's state changes in response to actions sent to the store.</li>
						<li>The <b>Store</b> is where the state is stored</p></li>
					</ul>

---


#### Redux + React</h4>
					<img src="/new/media/react-images/react-16/React+Redux.png" alt="redux">

---


#### State machine</h4>
					<img src="/new/media/react-images/react-16/StateMachine.png" alt="state machine">

---


#### Principles</h4>
					<ul>
						<li><b>Single source of truth</b> The state of your whole application is stored in an object tree within a single store.
						A single state tree also makes it easier to debug or inspect an application.</li>

						<li><b>State is read-only</b> The only way to change the state is to emit an action, an object describing what happened.</li>

						<li><b>Changes are made with pure functions</b> To specify how the state tree is transformed by actions, you write pure reducers.
						Reducers are just pure functions that take the previous state and an action, and return the next state.</li>

						<li>We do <b>not</b> mutate state, we create new states and this is done <b>synchronous</b></li>					
					</ul>

---


