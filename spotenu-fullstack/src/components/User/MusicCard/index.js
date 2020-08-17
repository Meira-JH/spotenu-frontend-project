import React from "react";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from "@material-ui/icons/Share";
import ImgMusic from "../../../img/music/music.png";
import { deleteMusicAction } from "../../../actions/bandActions";
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

  // const likedMusics = props.likedMusics.map(music => {
  //     if(props.id === music.id){

  //     }
  // })

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

const mapStateToProps = (state) => ({
  // likedMusics: state.users.likedMusics,

})

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicCard);
