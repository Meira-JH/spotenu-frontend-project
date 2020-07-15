import React, { Component } from "react";
import { Header } from "./style";

class Header extends Component {
  render() {
    return (
      <Header ref={this.props.innerRef} sticky={this.props.sticky}>
          
      </Header>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Header innerRef={ref} {...props} />
));
