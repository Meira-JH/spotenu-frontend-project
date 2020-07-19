import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
          {this.props.children}
        <Footer />
      </Fragment>
    );
  }
}
