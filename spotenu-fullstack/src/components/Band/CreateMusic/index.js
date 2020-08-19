import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  CreateMusicTitle,
  CreateMusicButton,
  CreateMusicSelect,
} from "./style";
import { FormWrapper, CreateMusicTextField } from "./style";
import { Typography, MenuItem } from "@material-ui/core";
import { createMusicAction, getBandAlbumsAction } from "../../../actions/bandActions";

class CreateMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createMusicSuccess: false,
      music: {
        artist: this.props.currentUser.name,
        artistId: this.props.currentUserId,
        name: "",
        album: "",
      },
    };
  }

  componentDidMount(){
    this.props.getBandAlbums(this.props.currentUserId);
  }

  handleInputChangeMusic = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      music: {
        ...this.state.music,
        [name]: value,
      },
    });
  };

  handleSubmmitMusic = (event) => {
    event.preventDefault();
    this.setState({ createMusicSuccess: false });

    console.log(this.state.music);
    this.props.toCreateMusic(this.state.music);
    this.setState({
      ...this.state,
      music: {
        artist: this.props.currentUser.name,
        artistId: this.props.currentUserId,
      },
      createMusicSuccess: true,
    });
  };

  render() {

    const createMusicFormTextField = [
        {
          name: "name",
          type: "text",
          label: "Nome da música",
          required: true,
        },
      ]
   
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
        <CreateMusicSelect
          variant="outlined"
          key="album"
          name="album"
          value={this.state.music["album"] || ""}
          required={true}
          onChange={this.handleInputChangeMusic}
        >
          {this.props.bandAlbums.map((album, index) => (
            <MenuItem key={index} value={album.id}>
              {album.data.name}
            </MenuItem>
          ))}
        </CreateMusicSelect>
        {this.state.createMusicSuccess && (
          <span>Música criada com sucesso!</span>
        )}
        <CreateMusicButton type="submit">Criar Música</CreateMusicButton>
      </FormWrapper>
    );

    return <Fragment>{createMusicRenderMap}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
    currentUser: state.users.currentUser,
    currentUserId: state.users.currentUserId,
    bandAlbums: state.bands.bandAlbums,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toCreateMusic: (musicInfo) => dispatch(createMusicAction(musicInfo)),
    getBandAlbums: (userId) => dispatch(getBandAlbumsAction(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMusic);
