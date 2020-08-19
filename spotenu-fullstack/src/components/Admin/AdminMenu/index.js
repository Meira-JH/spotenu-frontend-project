import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { AdminMenuWrapper } from "./style";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import { setContentAction } from "../../../actions/adminActions";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

class AdminMenu extends PureComponent {

  handleItemClick(content){
    this.props.setContent(content)
  }

  render() {

    const contentOptions = ["adminApprove", "bandApprove", "createGenre"]


    const FavListItemMap = [
      "Aprovar Admins",
      "Aprovar Bandas",
      "Criar Gênero Musical",
    ].map((text, index) => (
      <ListItem button key={index} onClick={() => this.handleItemClick(contentOptions[index])}>
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

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  content: state.users.content
});

const mapDispatchToProps = (dispatch) => {
  return {
    setContent: (content) => dispatch(setContentAction(content))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminMenu);