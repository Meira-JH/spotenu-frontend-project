import React, { Component } from "react";
import { connect } from "react-redux";
import { AccountMenuWrapper } from "./style";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import { setContentAction } from "../../../actions/usersActions";

class AccountMenu extends Component {


  handleItemClick(content){
    this.props.toSetContent(content)
  }

  render() {

    const contentOptions = ["musics", "genres"]

    const GeneralListItemMap = ["Músicas", "Gêneros"].map(
      (text, index) => (
        <ListItem button key={index} onClick={() => this.handleItemClick(contentOptions[index])}>
        <ListItemIcon>
            {index % 2 === 0 ? <MusicNoteIcon /> : <MusicVideoIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      )
    );

    const FavListItemMap = [
      "Minhas Músicas",
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

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  content: state.users.content
});

const mapDispatchToProps = (dispatch) => {
  return {
    toSetContent: (content) => dispatch(setContentAction(content))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu);