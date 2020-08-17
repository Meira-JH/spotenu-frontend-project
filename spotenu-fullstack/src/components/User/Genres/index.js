import React from "react";
import { connect } from "react-redux";
import {
    GenresContainer
} from "./style";
import { getGenresAction } from "../../../actions/usersActions";
import GenreCard from "../GenreCard";

class Genres extends React.Component {

    compoentnDidMount(){
        this.props.getGenres();
      }


  render() {
    console.log("genres genres",this.props.genres)

    const genresContentRender = this.props.genres.map((genre, index) => (
          <GenreCard genre={genre.data.genre} key={index} />
        ))

    return (
        <GenresContainer>
            {genresContentRender}
        </GenresContainer>
    );
  }
}

const mapStateToProps = (state) => ({
    genres: state.users.genres,
    musics: state.users.musics,
    currentUserId: state.users.setCurrentUserId
})

const mapDispatchToProps = (dispatch) => {
    return {
        getGenres: () => dispatch(getGenresAction()),
    }
  }
  
export default connect (mapStateToProps, mapDispatchToProps) (Genres);