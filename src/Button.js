import React from 'react';

class Button extends React.Component {

  constructor(props) {
      super(props);
      //this.name = name;
  }

  render() {
    return (
        <button onClick={this.handleClick}>Click Me {this.props.name}</button>
    );
  }
}

export default Button;