import React from "react";
import { connect } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ImgMusic from "../../../img/music/music.png";
import Delete from "@material-ui/icons/DeleteForever";
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

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: "5vw",
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: " rgb(255, 205, 2)",
//   },
//   favIcon: {
//     width: "1vw",
//     minWidth: "14px",
//   },
//   iconStyle: {
//     width: "1vw",
//   },
//   actionsWrapper: {
//     maxHeight: "15px",
//     justifyContent: "space-between",
//   },
//   cardContentWrapper: {
//     maxHeight: "10px",
//     padding: 10,
//     justifyContent: "flex-start",
//   },
//   music: {
//     fontWeight: 700,
//     maxWidth: "100%",
//   },
//   artist: {
//     fontSize: 14,
//   },
// }));

function MusicCardBand(props) {
  // const classes = useStyles();

  const deleteMusic = () => {
    props.toDeleteMusic(props.musicId, props.albumName, props.artistId);
    console.log(
      "id e nome no musics",
      props.musicId,
      props.albumName,
      props.artistId
    );
  };

  return (
    <Card>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton onClick={deleteMusic}>
          <Delete />
        </IconButton>
      </CardActions>
      <CardMedia src={ImgMusic} />
      <CardContent>
        <Title>{props.name}</Title>
        <Band> {props.artist} </Band>
      </CardContent>
    </Card>
    // <Card className={classes.root}>
    //   <CardActions disableSpacing className={classes.actionsWrapper}>
    //     <IconButton aria-label="add to favorites" className={classes.iconStyle}>
    //       <FavoriteIcon className={classes.favIcon} />
    //     </IconButton>
    //     <IconButton aria-label="share">
    //       <ShareIcon />
    //     </IconButton>
    //     <IconButton aria-label="delete" onClick={deleteMusic}>
    //       <Delete />
    //     </IconButton>
    //   </CardActions>
    //   <CardMedia className={classes.media} image={ImgMusic} />
    //   <CardContent className={classes.cardContentWrapper}>
    //     <Typography className={classes.music}>{props.name}</Typography>
    //     <Typography className={classes.artist}></Typography>
    //   </CardContent>
    // </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toDeleteMusic: (albumId, albumName, artistId) =>
    dispatch(deleteMusicAction(albumId, albumName, artistId)),
  };
};

export default connect(null, mapDispatchToProps)(MusicCardBand);
