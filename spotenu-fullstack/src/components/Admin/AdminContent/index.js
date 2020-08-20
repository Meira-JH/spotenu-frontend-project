import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AdminContentWrapper,
} from "./style";
import Musics from "../../User/Musics";
import {
  getMusicsAction,
  getGenresAction,
} from "../../../actions/usersActions";
import Genres from "../../User/Genres";
import ApproveAdmins from "../ApproveAdmins";
import ApproveBands from "../ApproveBands";
import CreateGenre from "../CreateGenre";

class AdminContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createGenre: false,
      genre: ""
  }
}

  render() {

    function contentRender(contentPage) {
      switch (contentPage) {
        case "musics":
          return <Musics />;
        case "genres":
          return <Genres />;
        case "adminApprove":
          return <ApproveAdmins />;
        case "bandApprove":
          return <ApproveBands />;
        // case "adminGenres":
        //   return <AdminGenres />;
        case "createGenre":
          return <CreateGenre />;
        default:
          return <Musics />;
      }
    }

    return (
      <AdminContentWrapper>
        {contentRender(this.props.content)}
      </AdminContentWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  currentUserId: state.users.currentUserId,
  content: state.users.content,
  genres: state.users.genres,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMusics: () => dispatch(getMusicsAction()),
    getGenres: () => dispatch(getGenresAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContent);
