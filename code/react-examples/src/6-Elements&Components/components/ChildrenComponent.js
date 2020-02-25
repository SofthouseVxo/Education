import React, { Component } from 'react';

function ChildrenComponent (props) {
    console.log('props', props);

    return (
      <div>
        {/* <p>{props.myText}</p> */}
        {props.children}
      </div>
    );
}

// class ChildrenComponent extends Component {
//   render() {
//     console.log(this.props);

//     return (
//       <div>
//         {this.props.children.props.children}
//       </div>
//     );
//   }
// }

export default ChildrenComponent;