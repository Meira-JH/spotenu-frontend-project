import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Imgalbum from "../../img/music/tabua-capa.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "5vw",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: " rgb(255, 205, 2)",
  },
  favIcon: {
    width: "1vw",
    minWidth: "14px",
  },
  iconStyle: {
    width: "1vw",
  },
  actionsWrapper: {
    maxHeight: "15px",
  },
  cardContentWrapper: {
    maxHeight: "10px",
    padding: 10,
    justifyContent: "flex-start",
  },
  album: {
    fontWeight: 700,
    maxWidth: "100%",
  },
  artist: {
    fontSize: 14,
  },
}));

export default function AlbumCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions disableSpacing className={classes.actionsWrapper}>
        <IconButton aria-label="add to favorites" className={classes.iconStyle}>
          <FavoriteIcon className={classes.favIcon} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardMedia className={classes.media} image={Imgalbum} />
      <CardContent className={classes.cardContentWrapper}>
        <Typography className={classes.album}>{props.name}</Typography>
        <Typography className={classes.artist}>{props.artist}</Typography>
      </CardContent>
    </Card>
  );
}
