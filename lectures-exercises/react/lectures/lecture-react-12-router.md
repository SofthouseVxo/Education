### 12. React
#### react-router - Handle navigation and links


---

#### react-router

* Created by ReactTraining - not Facebook</li>
* Authors Michael Jackson and Ryan Florence</li>
* Both Web and Native</li>
* npm install --save react-router-dom</li>
* <a href="https://reacttraining.com/react-router/">https://reacttraining.com/react-router/</a></li>


---

####  Navigation
* React Router is a collection of navigational components that compose declaratively with your application.
* Using React Router the developer can manage views (pages) in one single place and at the same time define the routes (urls) in the application.
* Instead of using.

```HTML
<a href="/">link</a>
```
we switch to
```HTML
<Link to="/">link</Link>
```


---

```JavaScript
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function AppRouter() {
  return (
```
```HTML
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
    </div>
  </Router>
  );
}

export default AppRouter;
```


---

####  Components
```HTML
<BrowserRouter>
<Router>
keeps your UI in sync with the URL

<Link>
Provides declarative, accessible navigation around your application.

<NavLink>
A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

<Route>
Basic responsibility is to render some UI when a location matches the route's path.

<Switch>
Renders the first child <Route> or <Redirect> that matches the location.
```


---

####  Router (BrowserRouter)

A ``` <Router> ``` that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

Attribute: basename
basename sets a new “start url" (base url) for all routed links and navigation.
Example below renders ``` <a href="/calendar/today"> ```

```HTML
<Router basename="/calendar">
  <Link to="/today"/>
</Router>
```


---

####  Link

Provides declarative, accessible navigation around your application.

```HTML
import { Link } from 'react-router-dom'
<Link to="/about">About</Link>

// Attribute: to
<Link to="/courses?sort=name" />
```
```
// to consists of four properties:
<Link to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>
```


---

####  NavLink

A special version of the ```<Link>``` that will add styling attributes to the rendered element when it matches the current URL.

```HTML
import { NavLink } from 'react-router-dom'

<NavLink to="/about">About</NavLink>
```

Notable attributes:
```
activeClassName="my-class"
activeStyle={{ fontWeight: “bold", color: “red" }}
exact
```


---

####  Route

* The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when a location matches the route's path (location is the url in web browser address field).
* Route is a container for displaying a view component (page). Depending on the attributes set on the <Route>; zero, one or multiple <Route>'s are rendered, depending on current location.


---

```HTML
import { BrowserRouter as Router, Route } from 'react-router-dom';

<Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/news" component={NewsFeed}/>
  <Route strict path="/about/" component={About}/>
  </div>
</Router>
```


---


####  Switch
* Renders the first child ``` <Route> ``` or ``` <Redirect> ``` that matches the location.
* How is this different than just using a bunch of ``` <Route> ```s?
* ``` <Switch> ``` is unique in that it renders a route exclusively. In contrast, every ``` <Route> ``` that matches the location renders inclusively.
  
  

---
  
<img src="/media/react-images/react-10/switch.png" alt="in folders">


---

####  {history, match, location}
* Every component in the first layer in ``` <Router/> ``` will get these three as props.
* It's done by a Higher order Component and wraps your the components and injects these three objects.


---

####  Sending and receiving Params
```HTML
<Route path="/news/:id" component={NewsComponent} />
// Setting up the route

<Link to="/news/12">Modus Create</Link> // Link in jsx

this.props.match.params.id //access in NewsComponent
```


---

####  Match
The match object contains information about how a ``` <Route path> ``` matched the URL.
* **params**: (object), key/value pairs parsed from the URL.
* **isExact**: (boolean), true if the entire URL was matched.
* **path**: (string), the path pattern used to match.
* **url**: (string), the matched portion of the URL.


---

####  Location
The location object represents where the app is now, where you want it to go, or even where it was.

The router will provide you with a location object in a few places:
* Route component as this.props.location
* Route render as ```({ location }) => ()```
* Route children as ```({ location }) => ()```
* withRouter as this.props.location


---

####  History
The history object allows you to manage and handle the browser history inside your views or components.
* **length**: (number), the number of entries in the history stack
* **action**: (string), the current action (PUSH, REPLACE or POP)
* **location**: (object), the current location
* **push**(path, [state]): (function), pushes a new entry onto the history stack
and more...


---

#### Navigating without a link
The **History** object has several methods for this

<img src="/media/react-images/react-10/history.png" alt="history">


---

####  Navigating without a link

Since components inside ``` <BrowserRouter> ``` get history in props we can invoke:
```JavaScript
this.props.history.push('/news');
this.props.history.push('/news/id'); //with a param
```


---

<img src="/media/react-images/react-10/history.png" alt="history">