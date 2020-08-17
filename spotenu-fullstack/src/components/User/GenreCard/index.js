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


function GenreCard(props) {

  return (
    <Card>
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
  };
};

export default connect(null, mapDispatchToProps)(GenreCard);
