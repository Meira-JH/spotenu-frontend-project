import React from "react";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ImgMusic from "../../../img/music/music.png";
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
import { getAlbumsMusicAction } from "../../../actions/usersActions";

function AlbumCard(props) {

  function handleItem(albumId) {
    console.log("id do album",albumId)
    const render = "albumsMusic"
    props.getAlbumsMusic(albumId, render);
  }

  return (
    <Card
    onClick={() => handleItem(props.albumId)}
    >
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
    getAlbumsMusic: (genre, render) => dispatch(getAlbumsMusicAction(genre, render))
  };
};

export default connect(null, mapDispatchToProps)(AlbumCard);
