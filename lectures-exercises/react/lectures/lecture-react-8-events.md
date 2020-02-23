### 8. React
#### Event handling

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Events

* React events are named using camelCase, rather than lowercase.
* With JSX you pass a function as the event handler, rather than a string.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  In HTML
```HTML
<button onclick="activateLasers()">
  Activate Lasers
</button>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  In React
```HTML
<button onClick={activateLasers}>
  Activate Lasers
</button>
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  You can use preventDefault to prevent default behaviour
```JavaScript
function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}
```
```HTML
<a href="#" onClick={handleClick}>Click me!</a>
```
Links, form submission etc.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Using class methods in JSX
```JavaScript
handleClick() {
  console.log('You clicked!');
}

render() {
  return (
    <button onClick={this.handleClick}>Click!</button>
  );
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Invoking methods in JSX directly will get called every Render
```JavaScript
handleClick() {
  console.log('You clicked!');
}

render() {
  return (
    <button onClick={this.handleClick()}>Click!</button>
  );
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Using class methods in JSX

```JavaScript
handleClick() {
  console.log(this); //Will log undefined
}

render() {
  return (
    <button onClick={this.handleClick}>Click!</button>
  );
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Need to bind this in the constructor

```JavaScript
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {
  console.log(this); // Now this will be the class
}

render() {
  return (
    <button onClick={this.handleClick}>Click!</button>
  );
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  With Arrow function instead [Experimental](https://reactjs.org/docs/handling-events.html)

```JavaScript
handleClick = (e) => {
  console.log(this); // Reference to class
}

render() {
  return (
    <button onClick={this.handleClick}>Click!</button>
  );
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  With Arrow function in JSX

```JavaScript
handleClick = (e) => {
  console.log('You clicked!');
}

render() {
  return (
    <button onClick={(e)=> this.handleClick(e)}>Click!</button>
  );
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Passing Props

```JavaScript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```
```JavaScript
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
These are equivalent

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Passing a method as props

```JavaScript
functionToSend = (e) => {
  console.log(e);
}

render() {
  return (
    <div>
      <ChildComponent
        myFunction={this.functionToSend}
      />
    </div>
  );
}

// Inside ChildComponent
<button onClick={()=>this.props.myFunction('passing args')}>
    Click me in Child!
</button>
```