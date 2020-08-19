import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { BandPageWrapper, MenuWrapper } from "./style";
import AccountMenu from "../../components/User/AccountMenu";
import AccountHeader from "../../components/AccountHeader/material";
import BandMenu from "../../components/Band/BandMenu";
import BandContent from "../../components/Band/BandContent";
import LoadingRing from "../../components/LoadingRing";

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
      <div>
        {this.props.currentUser ? (
          this.props.currentUser.role === "banda" && (
            <Fragment>
              <AccountHeader />
              <BandPageWrapper>
                <MenuWrapper>
                  <AccountMenu />
                  <BandMenu />
                </MenuWrapper>
                <BandContent />
              </BandPageWrapper>
            </Fragment>
          )
        ) : (
          <LoadingRing />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  content: state.bands.content
});

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    goToPageLoading: () => dispatch(push(routes.loading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandPage);
