import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { AdminPageWrapper } from "./style";
import AccountMenu from "../../components/AccountMenu";
import AccountHeader from "../../components/AccountHeader/material";
import AdminMenu from "../../components/AdminMenu";

class AdminPage extends Component {
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
        <AdminPageWrapper>
          <AccountMenu />
          <AdminMenu />
        </AdminPageWrapper>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    goToUserAdminPage: () => dispatch(push(routes.registerAdmin)),
  };
};

export default connect(null, mapDispatchToProps)(AdminPage);
