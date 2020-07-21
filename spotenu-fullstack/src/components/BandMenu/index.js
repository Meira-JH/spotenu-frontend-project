import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { BandMenuWrapper } from "./style";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import StarBorder from '@material-ui/icons/StarBorder';

class BandMenu extends PureComponent {

    // [open, setOpen] = React.useState(true);

    // handleClick = () => {
    //   setOpen(!open);
    // };

  goTo = (route) => {
    this.props.history.push(route);
  };

  render() {

    const FavListItemMap = [
      "Músicas da banda",
      "Albuns da banda",
      "Criar música",
      "Criar álbum"
    ].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>
          {index % 2 === 0 ? <MusicNoteIcon /> : <MusicVideoIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ));

    return (
      <BandMenuWrapper>
        <List
          component="nav"
          anchor="left"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Produções da banda
            </ListSubheader>
          }
        >
            {FavListItemMap}
        </List>
      </BandMenuWrapper>
      );
  }
}

export default withRouter(BandMenu);
