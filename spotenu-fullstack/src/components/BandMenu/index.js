import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { BandMenuWrapper } from "./style";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import { setContentAction } from "../../actions/bandActions";

class BandMenu extends PureComponent {

  handleItemClick(content){
    this.props.setContent(content)
  }


  render() {

    const contentOptions = ["bandMusics", "bandAlbums", "createAlbum", "createMusic"]

    const MenuListItemMap = [
      "Músicas da banda",
      "Albuns da banda",
      "Criar álbum",
      "Criar música"
    ].map((text, index) => (
      <ListItem button key={index} onClick={() => this.handleItemClick(contentOptions[index])}>
        <ListItemIcon key={index}>
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
            {MenuListItemMap}
        </List>
      </BandMenuWrapper>
      );
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  content: state.users.content
});

const mapDispatchToProps = (dispatch) => {
  return {
    setContent: (content) => dispatch(setContentAction(content))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandMenu);