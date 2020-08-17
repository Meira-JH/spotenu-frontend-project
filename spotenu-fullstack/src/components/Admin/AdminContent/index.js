import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AdminContentWrapper, MusicCardContainer } from "./style";
import MusicCard from "../../Band/MusicCardBand";

class AdminContent extends Component {
  goTo = (route) => {
    this.props.history.push(route);
  };

  render() {
    const musicMock = {
      nome: "música teste",
      album: "album teste",
    };

    const musicsFromFirebase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
      (music) => musicMock
    );

    const MusicCardRender = musicsFromFirebase.map((text, index) => (
      <MusicCard name = {musicMock.name}/>
    ));

    return (
      <AdminContentWrapper>
        <MusicCardContainer>
            {MusicCardRender}
        </MusicCardContainer>
      </AdminContentWrapper>
    );
  }
}

export default withRouter(AdminContent);
