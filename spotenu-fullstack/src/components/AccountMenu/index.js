import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { AccountMenuWrapper } from "./style";
import firebase from "firebase";
import { Drawer, Card, CardContent, Typography, CardActions, Button, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import StarBorder from '@material-ui/icons/StarBorder';

class AccountMenu extends PureComponent {

    // [open, setOpen] = React.useState(true);

    // handleClick = () => {
    //   setOpen(!open);
    // };

  goTo = (route) => {
    this.props.history.push(route);
  };

  render() {
    const GeneralListItemMap = ["Músicas", "Gêneros", "Playlists"].map(
      (text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <MusicNoteIcon /> : <MusicVideoIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      )
    );

    const FavListItemMap = [
      "Minhas Músicas",
      "Meus Albuns",
      "Minhas Playlists",
    ].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>
          {index % 2 === 0 ? <MusicNoteIcon /> : <MusicVideoIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ));

    return (
      <AccountMenuWrapper>
        <List
          component="nav"
          anchor="left"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Sua conta
            </ListSubheader>
          }
        >
            {GeneralListItemMap}
            {FavListItemMap}
            <ListItemText primary="Inbox" />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
          {/* <Collapse in={open} timeout="auto" unmountOnExit> */}
            <List component="div" disablePadding>
              <ListItem button >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          {/* </Collapse> */}
        </List>
      </AccountMenuWrapper>
      );
  }
}

export default withRouter(AccountMenu);
