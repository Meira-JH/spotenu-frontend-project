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
    const render = "albumsByGenre"
    props.getAlbumsByGenre(genre, render);
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
    getAlbumsByGenre: (genre, render) => dispatch(getAlbumsByGenreAction(genre, render))
  };
};

export default connect(null, mapDispatchToProps)(GenreCard);
