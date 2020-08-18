import React from "react";
import { connect } from "react-redux";
import ImgMusic from "../../../img/music/music.png";
import {
  Title,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "./style";
import {
  getAlbumsByGenreAction,
} from "../../../actions/usersActions";


function GenreCard(props) {


  function handleItem(genre) {
    console.log(genre)
    props.getAlbumsByGenre(genre);
  }
  return (
    <Card
    onClick={() => handleItem(props.genre)}
    >
      <CardActions/>
      <CardMedia src={ImgMusic} />
      <CardContent>
        <Title>{props.genre}</Title>
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbumsByGenre: (genre) => dispatch(getAlbumsByGenreAction(genre))
  };
};

export default connect(null, mapDispatchToProps)(GenreCard);
