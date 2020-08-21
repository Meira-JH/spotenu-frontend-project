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
import MusicCard from "../MusicCard";

class Genres extends React.Component {

  componentDidMount() {
    this.props.getGenres();
    this.props.setAlbumsByGenre()
  }

  render() {
    const genresContentRender = this.props.genres.map((genre, index) => (
      <GenreCard
        genre={genre.data.genre}
        key={index}
      />
    ));

    const albumsByGenreRender = this.props.albumsByGenre ? 
    (this.props.albumsByGenre.map((album, index) => (
      <AlbumCard
        name={album.data.name}
        artist={album.data.artist}
        artistId={album.data.artistId}
        key={index}
        albumId={album.id}
      />
    ))
    ) : (
      []
    );

    const albumsMusicRender = this.props.albumsMusic ? 
    (this.props.albumsMusic.map((music, index) => (
      <MusicCard
        name={music.data.name}
        artist={music.data.artist}
        key={index}
      />
    ))
     ) : (
       []
     );

    function renderSwitch (item) {
      switch(item){
        case "albumsByGenre":
          return albumsByGenreRender;
          case "albumsMusic":
            return albumsMusicRender;
          default:
            return genresContentRender
      }

    }

    return (
      <GenresContainer>
        {renderSwitch(this.props.albumRender)}
      </GenresContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  genres: state.users.genres,
  musics: state.users.musics,
  currentUserId: state.users.setCurrentUserId,
  albumsByGenre: state.users.albumsByGenre,
  albumRender: state.users.albumRender,
  albumsMusic: state.users.albumsMusic
});

const mapDispatchToProps = (dispatch) => {
  return {
    getGenres: () => dispatch(getGenresAction()),
    getAlbumsByGenre: (genre) => dispatch(getAlbumsByGenreAction(genre)),
    setAlbumsByGenre: () => dispatch(setAlbumsByGenre(undefined)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
