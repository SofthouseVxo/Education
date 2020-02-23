### 10. React
#### Conditional Rendering and rendering lists

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Using If statements
```JavaScript
class App extends Component {
  render(){
    if(statement === true){
      return <div id="1"/>
    }
    return <div id="2"/>
  }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Using If statements
```JavaScript
class App extends Component {
  renderDiv = (arg) => {
     if(arg){
       return <div id="1"/>
     }
     return <div id="2"/>
   }

   render(){
     return this.renderDiv(false);
   }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Using If statements and props
```JavaScript
class App extends Component {
  render(){
    if(this.props.value === true){
      return <div id="1"/>
    }
    return <div id="2"/>
  }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Using If statements and state
```JavaScript
class App extends Component {
  render(){
    if(this.state.value === true){
      return <div id="1"/>
    }
    return <div id="2"/>
  }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Using the logical && operator.
```JavaScript
class App extends Component {
  render(){
    const users = this.props.users;
    return (
      <Fragment>
        {users.length > 0 &&
          <h2>
            You have {users.length} unread messages.
          </h2>
        }
      </Fragment>
    );
  }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Using the if else with ternary operator
```JavaScript
class App extends Component {
  render() {
    const users = this.state.users;
    return (
      <div>
        There are <b>{users.length ? users.length : 'no'}</b> users logged in.
      </div>
    );
  }
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Prevent rendering component inside component
```JavaScript
class Dialog extends Component {
  render() {
    if(this.props.show === false){
      return null
    }

    return <div id="1"/>
  }
}
```
This will not prevent  the component's lifecycle methods to be invoked. ComponentDidUpdate will still be called.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Rendering Lists

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Rendering multiple elements JSX
```JavaScript
class Dialog extends Component {
  render(){
    return (
      [
        <p>Hello</p>,
        <p>Hello</p>,
        <p>Hello</p>,
        <p>Hello</p>,
        <p>Hello</p>
      ]
    }
  }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Rendering multiple elements JSX
```JavaScript
renderList = () => {
  return <p>Hello</p>;
}

render(){
  return (
      {this.renderList()}
  }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Array.map

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">MDN Reference</a>.
* Loops through an array.
* Calling a provided function on every element in that array.
* Creating a new array with the results.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Mapping
```JavaScript
var names = ['John', 'Jane'];

const paragraphs = names.map((name) => {
return 'Hello ' + name;
});

console.log(paragraphs);// ["Hello John", "Hello Jane"]
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Mapping
```JavaScript
var names = ['John', 'Jane'];

const paragraphs = names.map((name) => {
  return name;
});

console.log(paragraphs);// ["John", "Jane"]
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Mapping
```JavaScript
var names = ['John', 'Jane'];

const paragraphs = names.map((name) => {
  return <p>{name}</p>;
});

//returns a new array of elements
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Keys

* Key are needed when rendering lists.
* Keys help React identify which items have changed, are added, or are removed.
* Keys should be given to the elements inside the array to give the elements a stable identity.
* Each key needs to be unique ID.
* If no ID exist you can use index.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Mapping keys
```JavaScript
const users = [{name:'John', id:1},{name:'Jane', id:2}];

const newUsers = users.map((user) => {
  return <p key={user.id}>{user.name}</p>;
});
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Mapping keys with index
```JavaScript
var names = ['John', 'Jane'];

const paragraphs = names.map((name, i) => {
  return <p key={i}>{name}</p>;
});
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Embedding .map() in JSX
```JavaScript
const numbers = [1,5,12,44];

return (
  {numbers.map((number, i) =>
    <li key={i}>{number}.
  )}
);
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking in React</a>