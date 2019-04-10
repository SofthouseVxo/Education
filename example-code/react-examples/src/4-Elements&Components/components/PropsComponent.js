import React, { Component } from 'react';

// function PropsComponent (props) {
//     console.log(props);

//     return (
//       <div>
//         <p>{props.myText}</p>
//       </div>
//     );
// }

class PropsComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.myText}</p>
      </div>
    );
  }
}

export default PropsComponent;