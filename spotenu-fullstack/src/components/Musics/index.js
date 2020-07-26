import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
    MusicsContainer
} from "./style";
import { getMusicsAction } from "../../actions/bandActions";
import MusicCard from "../MusicCard";

class Musics extends React.Component {

  componentDidMount() {
    this.props.getMusics()
  }


  render() {

    const musicsContentRender = this.props.musics.map((music, index) => (
          <MusicCard name={music.data.name} artist={music.data.artist} key={index} />
        ))

    return (
        <MusicsContainer>
            {musicsContentRender}
        </MusicsContainer>
    );
  }
}

const mapStateToProps = (state) => ({
    musics: state.bands.musics,
    currentUserId: state.users.setCurrentUserId
})

const mapDispatchToProps = (dispatch) => {
    return {
        getMusics: () => dispatch(getMusicsAction()),
    }
  }
  
export default connect (mapStateToProps, mapDispatchToProps) (Musics);