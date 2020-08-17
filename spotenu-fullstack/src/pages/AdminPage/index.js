import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { AdminPageWrapper, MenuWrapper } from "./style";
import AccountMenu from "../../components/User/AccountMenu";
import AccountHeader from "../../components/AccountHeader/material";
import AdminMenu from "../../components/Admin/AdminMenu";
import AdminContent from "../../components/Admin/AdminContent";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  userVerification() {
    if (this.props.currentUser) {
      if (this.props.currentUser.role !== "admin") {
        this.props.goToLandingPage();
      }
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    this.userVerification();
    return (
      <div>
        {this.props.currentUser ? (
          this.props.currentUser.role === "admin" && (
            <Fragment>
              <AccountHeader />
              <AdminPageWrapper>
                <MenuWrapper>
                  <AccountMenu />
                  <AdminMenu />
                </MenuWrapper>
                <AdminContent />
              </AdminPageWrapper>
            </Fragment>
          )
        ) : (
          <div> Carregando... </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    goToUserAdminPage: () => dispatch(push(routes.registerAdmin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
