import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { UserPageWrapper, Header, Menu } from "./style";
import AccountMenu from "../../components/AccountMenu";
import AccountHeader from "../../components/AccountHeader/material";
import firebase from 'firebase'

export function setCurrentUser(user) {
  return {
    type: 'SET_USER',
    payload: {
      user: user
    }
  }
}

// var user = firebase.auth().currentUser;
// console.log(user)

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(user)
//     setCurrentUser(user)
//   } else {
//     setCurrentUser(null)
//   }
// })

class UserPage extends Component {
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
        <UserPageWrapper>
          <AccountMenu />
        </UserPageWrapper>
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

export default connect(null, mapDispatchToProps)(UserPage);
