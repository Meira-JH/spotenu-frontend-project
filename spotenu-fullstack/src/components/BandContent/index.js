import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  BandContentWrapper,
  MusicCardContainer,
  CreateAlbumTitle,
  CreateAlbumButton,
  BandAlbumsContainer,
} from "./style";
import MusicCard from "../MusicCard";
import { FormWrapper, CreateAlbumTextField } from "./style";
import { Typography } from "@material-ui/core";

class BandContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {},
      showPassword: false,
      showConfirmPassword: false,
    };
  }
  goTo = (route) => {
    this.props.history.push(route);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      album: { ...this.state.album, [name]: value },
    });
  };

  handleSubmmit = (event) => {
    event.preventDefault();

    console.log(this.state.album);
    // this.props.toCreateAlbum(this.state.album);
  };

  render() {
    const musicMock = {
      name: "música teste",
      album: "album teste",
    };

    const albumMock = {
      name: "album name",
      genre: "genero musical",
    };

    const musicsFromFirebase = [1, 2, 3, 4, 5, 6].map((music) => musicMock);

    const albumsFromFirebase = [1, 2, 3, 4, 5, 6].map((music) => albumMock);

    const createAlbumFormStructure = [
      {
        name: "name",
        type: "text",
        label: "Nome do álbum",
        required: true,
      },
      {
        name: "genre",
        type: "text",
        label: "Gênero(s) musical(is)",
        required: true,
      },
    ];

    const createAlbumRenderMap = (
      <FormWrapper onSubmit={this.handleSubmmit}>
        <CreateAlbumTitle>Criar Album</CreateAlbumTitle>
        {createAlbumFormStructure.map((input) => (
          <CreateAlbumTextField
            variant="outlined"
            key={input.name}
            name={input.name}
            type={input.type}
            label={
              <Typography variant={"subtitle2"} display={"inline"}>
                {" "}
                {input.label}{" "}
              </Typography>
            }
            value={this.state.album[input.name] || ""}
            required={input.required}
            onChange={this.handleInputChange}
          />
        ))}
        <CreateAlbumButton type="submit">Criar Album</CreateAlbumButton>
      </FormWrapper>
    );

    const musicContentRender = (
      <MusicCardContainer>
        {musicsFromFirebase.map((text, index) => (
          <MusicCard name={musicMock.name} key={index} />
        ))}
      </MusicCardContainer>
    );
    const bandAlbumsContentRender = (
      <BandAlbumsContainer>
        {albumsFromFirebase.map((text, index) => (
          <MusicCard name={albumMock.name} key={index} />
        ))}
      </BandAlbumsContainer>
    );
    const createAlbumsContentRender = createAlbumRenderMap;

    function contentRender(contentPage) {
      switch (contentPage) {
        case "music":
          return musicContentRender;
        case "bandAlbum":
          return bandAlbumsContentRender;
        case "createAlbum":
          return createAlbumsContentRender;

        default:
          return musicContentRender;
      }
    }

    return (
      <BandContentWrapper>
        {contentRender(this.props.content)}
      </BandContentWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  content: state.bands.content,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BandContent);
