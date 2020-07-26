import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BandContentWrapper,
  CreateAlbumTitle,
  CreateAlbumButton,
  CreateMusicTextField,
  CreateMusicTitle,
  CreateMusicButton,
  CreateAlbumSelect
} from "./style";
import { FormWrapper, CreateAlbumTextField } from "./style";
import { Typography, MenuItem } from "@material-ui/core";
import { createAlbumAction, createMusicAction, getBandAlbumsAction } from '../../actions/bandActions'
import BandAlbums from "../BandAlbums";
import BandMusics from "../BandMusics";
import Musics from "../Musics";

class BandContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {
        artist: this.props.currentUser.name,
        artistId: this.props.currentUserId
      },
      music: {
        artist: this.props.currentUser.name,
        artistId: this.props.currentUserId
      },

    };
  }

  componentDidMount() {
    this.props.getBandAlbums(this.props.currentUserId)
  }

  handleInputChangeAlbum = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      album: { 
        ...this.state.album, 
        [name]: value },
    });
  };
  handleInputChangeMusic = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      music: { 
        ...this.state.music, 
        [name]: value },
    });
  };

  handleSubmmitAlbum = (event) => {
    event.preventDefault();

    console.log(this.state.album);
    this.props.toCreateAlbum(this.state.album);
    this.setState({
      ...this.state,
      album: {
        artist: this.props.currentUser,
        artistId: this.props.currentUserId
      },
    });
  };

  handleSubmmitMusic = (event) => {
    event.preventDefault();

    console.log(this.state.music);
    this.props.toCreateMusic(this.state.music);
    this.setState({
      ...this.state,
      music: {
        artist: this.props.currentUser,
        artistId: this.props.currentUserId
      },
    });
  };

  render() {

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

    const createMusicFormTextField = [
      {
        name: "name",
        type: "text",
        label: "Nome da música",
        required: true,
      }
    ];

    const createAlbumRenderMap = (
      <FormWrapper onSubmit={this.handleSubmmitAlbum}>
        <CreateAlbumTitle>Criar Album</CreateAlbumTitle>
        {createAlbumFormStructure.map((input) => (
          <CreateAlbumTextField
            variant="outlined"
            key={input.name}
            name={input.name}
            type={input.type}
            label={
              <Typography variant={"subtitle2"} display={"inline"}>
                {input.label}
              </Typography>
            }
            value={this.state.album[input.name] || ""}
            required={input.required}
            onChange={this.handleInputChangeAlbum}
          />
        ))}
        <CreateAlbumButton type="submit">Criar Album</CreateAlbumButton>
      </FormWrapper>
    );
    
    const createMusicRenderMap = (
      <FormWrapper onSubmit={this.handleSubmmitMusic}>
        <CreateMusicTitle>Criar Música</CreateMusicTitle>
        {createMusicFormTextField.map((input, index) => (
          <CreateMusicTextField
            variant="outlined"
            key={index}
            name={input.name}
            type={input.type}
            label={
              <Typography variant={"subtitle2"} display={"inline"}>
                {input.label}
              </Typography>
            }
            value={this.state.music[input.name] || ""}
            required={input.required}
            onChange={this.handleInputChangeMusic}
          />
        ))}
          <CreateAlbumSelect 
            variant="outlined"
            key="album"
            name="album"
            value={this.state.music["album"] || ""}
            required={true}
            onChange={this.handleInputChangeMusic}          
          >
            {this.props.bandAlbums.map((album, index) =>(
              <MenuItem key={index} value={album.name}>{album.name}</MenuItem>
            ))}
          </CreateAlbumSelect>
        <CreateMusicButton type="submit">Criar Música</CreateMusicButton>
      </FormWrapper>
    );

          
    function contentRender(contentPage) {
      switch (contentPage) {
        case "musics":
          return <Musics />;
        case "bandMusics":
          return <BandMusics />;
        case "bandAlbums":
          return <BandAlbums />;
        case "createAlbum":
          return createAlbumRenderMap;
        case "createMusic":
          return createMusicRenderMap;

        default:
          return <Musics />;
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
  currentUserId: state.users.currentUserId,
  content: state.users.content,
  bandAlbums: state.bands.bandAlbums
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBandAlbums: (userId) => dispatch(getBandAlbumsAction(userId)),
    toCreateAlbum: (albumInfo) => dispatch(createAlbumAction(albumInfo)),
    toCreateMusic: (musicInfo) => dispatch(createMusicAction(musicInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandContent);
