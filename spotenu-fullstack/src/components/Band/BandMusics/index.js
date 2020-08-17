import React from "react";
import { connect } from "react-redux";
import { BandMusicsContainer } from "./style";
import { getBandMusicsAction } from "../../../actions/bandActions";
import MusicCardBand from "../MusicCardBand";

class BandMusics extends React.Component {
  componentDidMount() {
    this.props.getBandMusics(this.props.currentUserId);
  }

  render() {
    const BandMusicsContentRender = this.props.bandMusics.map(
      (music, index) => (
        <MusicCardBand
          name={music.data.name}
          artist={music.data.artist}
          artistId={music.data.artistId}
          albumName={music.data.album}
          key={index}
          musicId={music.id}
        />
      )
    );

    return <BandMusicsContainer>{BandMusicsContentRender}</BandMusicsContainer>;
  }
}

const mapStateToProps = (state) => ({
  bandMusics: state.bands.bandMusics,
  currentUserId: state.users.currentUserId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBandMusics: (artistId) => dispatch(getBandMusicsAction(artistId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandMusics);
