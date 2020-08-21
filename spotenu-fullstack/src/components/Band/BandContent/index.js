import React, { Component } from "react";
import { connect } from "react-redux";
import { BandContentWrapper } from "./style";
import {
  createAlbumAction,
  createMusicAction,
  getBandMusicsAction,
} from "../../../actions/bandActions";
import BandAlbums from "../BandAlbums";
import BandMusics from "../BandMusics";
import Musics from "../../User/Musics";
import {
  getMusicsAction,
  getGenresAction,
} from "../../../actions/usersActions";
import Genres from "../../User/Genres";
import CreateAlbum from "../CreateAlbum";
import CreateMusic from "../CreateMusic";

class BandContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createAlbumSuccess: false,
      createMusicSuccess: false,
      album: {
        artist: this.props.currentUser.name,
        artistId: this.props.currentUserId,
        genre: "",
        name: "",
      },
      music: {
        artist: this.props.currentUser.name,
        artistId: this.props.currentUserId,
        name: "",
        album: "",
      },
    };
  }

  render() {
    function contentRender(contentPage) {
      switch (contentPage) {
        case "musics":
          return <Musics />;
        case "genres":
          return <Genres />;
        case "bandMusics":
          return <BandMusics />;
        case "bandAlbums":
          return <BandAlbums />;
        case "createAlbum":
          return <CreateAlbum />;
        case "createMusic":
          return <CreateMusic />;

        default:
          return <Musics />;
      }
    }

    return (
      <BandContentWrapper>
        {contentRender(this.props.content)}
      </BandContentWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  currentUserId: state.users.currentUserId,
  content: state.users.content,
  bandAlbums: state.bands.bandAlbums,
  genres: state.users.genres,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMusics: () => dispatch(getMusicsAction()),
    getGenres: () => dispatch(getGenresAction()),
    getBandMusics: (userId) => dispatch(getBandMusicsAction(userId)),
    toCreateAlbum: (albumInfo) => dispatch(createAlbumAction(albumInfo)),
    toCreateMusic: (musicInfo) => dispatch(createMusicAction(musicInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandContent);
