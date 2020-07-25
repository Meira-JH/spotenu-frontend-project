import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
    BandAlbumsContainer
} from "./style";
import { getBandAlbumsAction } from "../../actions/bandActions";
import AlbumCard from "../AlbumCard";

class BandAlbums extends React.Component {

  componentDidMount() {
    this.props.getBandAlbums()
  }


  render() {

    const bandAlbumsContentRender = this.props.bandAlbums.map((album, index) => (
          <AlbumCard name={album.name} artist={album.artist} key={index} />
        ))

    return (
        <BandAlbumsContainer>
            {bandAlbumsContentRender}
        </BandAlbumsContainer>
    );
  }
}

const mapStateToProps = (state) => ({
    bandAlbums: state.bands.bandAlbums
})

const mapDispatchToProps = (dispatch) => {
    return {
        getBandAlbums: () => dispatch(getBandAlbumsAction()),
    }
  }
  
export default connect (mapStateToProps, mapDispatchToProps) (BandAlbums);