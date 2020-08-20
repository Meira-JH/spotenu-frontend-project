import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../../router";
import { UserContentWrapper } from "./style";
import { getMusicsAction, getGenresAction } from "../../../actions/usersActions";
import Musics from "../Musics";
import Genres from "../Genres";

class UserContent extends Component {

  render() {

    function contentRender(contentPage) {
      switch (contentPage) {
        case "musics":
          return <Musics />;
        case "genres":
          return <Genres />;

        default:
          return <Musics />;
      }
    }

    return (
      <UserContentWrapper>
            {contentRender(this.props.content)}
      </UserContentWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  currentUserId: state.users.currentUserId,
  musics: state.users.musics,
  content: state.users.content,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    getMusics: () => dispatch(getMusicsAction()),
    getGenres: () => dispatch(getGenresAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContent);
