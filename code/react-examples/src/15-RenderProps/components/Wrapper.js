import React from 'react';

class Wrapper extends React.PureComponent {
  
  constructor(props){
    super(props);
    this.state = {
      data: {
        name: 'nisse',
        age: 30
      }
    }

    setTimeout(()=>{
      this.setState({
        data: {
          name: 'nissa',
          age: 13
        }
      })
    }, 3000 );
  }

  render(){
    return (
      <React.Fragment>
        {this.props.render(this.state.data)}
      </React.Fragment>
    )
  }
}

export default Wrapper;