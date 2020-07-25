import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { UserPageWrapper } from "./style";
import AccountMenu from "../../components/AccountMenu";
import AccountHeader from "../../components/AccountHeader/material";
import UserContent from "../../components/UserContent";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  userVerification () {
    if (this.props.currentUser) {
      if (this.props.currentUser.role !== "ouvinte") {
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
    this.userVerification()

    return (
      <div>
        {this.props.currentUser ? (
          this.props.currentUser.role === "ouvinte" && (
            <Fragment>
              <AccountHeader />
              <UserPageWrapper>
                <AccountMenu />
                <UserContent/>
              </UserPageWrapper>
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
    goToPageLoading: () => dispatch(push(routes.loading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
