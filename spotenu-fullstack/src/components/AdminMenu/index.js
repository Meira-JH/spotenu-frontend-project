import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { AdminMenuWrapper } from "./style";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

class AdminMenu extends PureComponent {

  
  goTo = (route) => {
    this.props.history.push(route);
  };

  render() {

    const FavListItemMap = [
      "Aprovar músicos",
      "Aprovar admins",
      "Aprovar bandas",
      "Criar gênero musical",
    ].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>
          {index % 2 === 0 ? <MusicNoteIcon /> : <MusicVideoIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ));

    return (
      <AdminMenuWrapper>
        <List
          component="nav"
          anchor="left"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menu Admin
            </ListSubheader>
          }
        >
            {FavListItemMap}
        </List>
      </AdminMenuWrapper>
      );
  }
}

export default withRouter(AdminMenu);
