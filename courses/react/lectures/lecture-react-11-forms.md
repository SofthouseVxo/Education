### 11. React
#### Forms and Inputs


---

#### Input elements and state

* In HTML ```<input>```, ```<textarea>``` and ```<select>``````</script>``` has their own state and updates when interacted with.
* When a form is submitted in HTML → redirected to a new page by default.
* In react we keep the state in component state.


---

#### Controlled Component

* React state →  “single source of truth"
* React state handles user input and controls the input value → “Controlled Component"


---

####  Controlled Component
```JavaScript
constructor(props) {
  super(props);
  this.state = {value: ''};
}

handleChange(event) {
  this.setState({value: event.target.value});
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```


---

####  Submitting and preventing redirect
```JavaScript
constructor(props) {}
  handleChange(event) {}

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```


---

####  Other Inputs

* Work similarly for ```<textarea>``` and ```<select>```
* That's pretty much it for React and forms..


---

#### But what about validation and stuff?


---

#### Popular libs

* <a href="https://github.com/jaredpalmer/formik" target="blank">Formik</a>
* <a href="https://github.com/christianalfoni/formsy-react" target="_blank">formsy-react</a>
* <a href="https://redux-form.com/8.3.0/" target="_blank">Redux Forms</a>
* <a href="https://github.com/tannerlinsley/react-form" target="_blank">react-form</a>