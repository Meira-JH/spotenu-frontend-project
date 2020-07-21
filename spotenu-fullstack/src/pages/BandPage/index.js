import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { BandPageWrapper } from "./style";
import AccountMenu from "../../components/AccountMenu";
import AccountHeader from "../../components/AccountHeader/material";
import BandMenu from "../../components/BandMenu";

class BandPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Fragment>
        <AccountHeader />
        <BandPageWrapper>
          <AccountMenu />
          <BandMenu/>
        </BandPageWrapper>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    // goToBandAdminPage: () => dispatch(push(routes.registerAdmin)),
  };
};

export default connect(null, mapDispatchToProps)(BandPage);
