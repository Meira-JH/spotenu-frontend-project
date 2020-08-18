import React from "react";
import { connect } from "react-redux";
import { GenresContainer } from "./style";
import {
  getGenresAction,
  getAlbumsByGenreAction,
  setAlbumsByGenre,
} from "../../../actions/usersActions";
import GenreCard from "../GenreCard";
import AlbumCard from "../../User/AlbumCard";

class Genres extends React.Component {

  componentDidMount() {
    this.props.getGenres();
    this.props.setAlbumsByGenre()
  }

  render() {
    console.log("musicby gender props", this.props.albumsByGenre)
    const genresContentRender = this.props.genres.map((genre, index) => (
      <GenreCard
        genre={genre.data.genre}
        key={index}
      />
    ));

    const albumsByGenreRender = this.props.albumsByGenre ? this.props.albumsByGenre.map((album, index) => (
      <AlbumCard
        name={album.data.name}
        artist={album.data.artist}
        artistId={album.data.artistId}
        key={index}
        albumId={album.id}
      />
    )) : null;

    return (
      <GenresContainer>
        {this.props.albumsByGenre ?  albumsByGenreRender : genresContentRender }
      </GenresContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  genres: state.users.genres,
  musics: state.users.musics,
  currentUserId: state.users.setCurrentUserId,
  albumsByGenre: state.users.albumsByGenre,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getGenres: () => dispatch(getGenresAction()),
    getAlbumsByGenre: (genre) => dispatch(getAlbumsByGenreAction(genre)),
    setAlbumsByGenre: () => dispatch(setAlbumsByGenre(undefined)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
