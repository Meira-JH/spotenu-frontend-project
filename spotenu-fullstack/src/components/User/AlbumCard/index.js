import React from "react";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ImgMusic from "../../../img/music/music.png";
import Delete from "@material-ui/icons/DeleteForever";
import { deleteAlbumAction } from "../../../actions/bandActions";
import {
  Title,
  Band,
  Card,
  CardActions,
  IconButton,
  CardMedia,
  CardContent,
} from "./style";

function AlbumCard(props) {

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
        <Title>Album: {props.name}</Title>
        <Band> {props.artist} </Band>
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toDeleteAlbum: (albumId, albumName, artistId) =>
    dispatch(deleteAlbumAction(albumId, albumName, artistId)),
  };
};

export default connect(null, mapDispatchToProps)(AlbumCard);
