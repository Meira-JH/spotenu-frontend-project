import React from "react";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ImgMusic from "../../../img/music/music.png";
import {
  Title,
  Band,
  Card,
  CardActions,
  IconButton,
  CardMedia,
  CardContent,
} from "./style";


function MusicCard(props) {

  return (
    <Card>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardMedia src={ImgMusic} />
      <CardContent>
        <Title>{props.name}</Title>
        <Band> {props.artist} </Band>
      </CardContent>
    </Card>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(null, mapDispatchToProps)(MusicCard);
