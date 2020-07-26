import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
    BandMusicsContainer
} from "./style";
import { getBandMusicsAction } from "../../actions/bandActions";
import MusicCard from "../MusicCard";

class BandMusics extends React.Component {

  componentDidMount() {
    this.props.getBandMusics(this.props.currentUserId)
  }


  render() {

    const BandMusicsContentRender = this.props.bandMusics.map((music, index) => (
          <MusicCard name={music.data.name} artist={music.data.artist} key={index} />
        ))

    return (
        <BandMusicsContainer>
            {BandMusicsContentRender}
        </BandMusicsContainer>
    );
  }
}

const mapStateToProps = (state) => ({
    bandMusics: state.bands.bandMusics,
    currentUserId: state.users.currentUserId
})

const mapDispatchToProps = (dispatch) => {
    return {
        getBandMusics: (artistId) => dispatch(getBandMusicsAction(artistId)),
    }
  }
  
export default connect (mapStateToProps, mapDispatchToProps) (BandMusics);