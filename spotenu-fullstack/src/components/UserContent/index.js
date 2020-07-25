import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { UserContentWrapper, MusicCardContainer } from "./style";
import MusicCard from "../MusicCard";

class UserContent extends Component {
  goTo = (route) => {
    this.props.history.push(route);
  };

  render() {
    const musicMock = {
      name: "música teste",
      album: "album teste",
      artist: "artista teste"
    };

    const musicsFromFirebase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
      (music) => musicMock
    );

    const MusicCardRender = musicsFromFirebase.map((text, index) => (
      <MusicCard name = {musicMock.name}/>
    ));

    return (
      <UserContentWrapper>
        <MusicCardContainer>
            {MusicCardRender}
        </MusicCardContainer>
      </UserContentWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  // currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // goToLandingPage: () => dispatch(push(routes.root)),
    // goToPageLoading: () => dispatch(push(routes.loading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContent);
