import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props); // Always call with props
    this.state = {value: 1};
  }

  /*
  * Is invoked immediately after a component is mounted (inserted into the tree).
  */
  componentDidMount(){
    setInterval(()=>{
      this.updateState()
    }, 1000)
  }

  updateState(){
    this.setState({
      value: this.state.value + 1
    }, this.callBackAfterStateUpdate())
  }

  /*
  * Runs when state is updated
  */
  callBackAfterStateUpdate(){
    console.log('state just updated')
  }

  render() {
    return (
      <div>
       Parent
        <ChildComponent value={this.state.value}/>
      </div>
    );
  }
}

export default ParentComponent;
