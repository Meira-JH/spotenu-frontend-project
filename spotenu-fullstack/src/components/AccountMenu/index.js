import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { AccountMenuWrapper } from "./style";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

class AccountMenu extends PureComponent {


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
        </List>
      </AccountMenuWrapper>
      );
  }
}

export default withRouter(AccountMenu);
