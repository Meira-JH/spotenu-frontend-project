import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  CreateAlbumTitle,
  CreateAlbumButton,
  CreateAlbumSelect,
} from "./style";
import { FormWrapper, CreateAlbumTextField } from "./style";
import { Typography, MenuItem } from "@material-ui/core";
import { createAlbumAction } from "../../../actions/bandActions";

class CreateAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createAlbumSuccess: false,
      album: {
        artist: this.props.currentUser.name,
        artistId: this.props.currentUserId,
        genre: "",
        name: "",
      },
    };
  }

  handleInputChangeAlbum = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      album: {
        ...this.state.album,
        [name]: value,
      },
    });
  };

  handleSubmmitAlbum = (event) => {
    event.preventDefault();
    this.setState({ createAlbumSuccess: false });

    console.log(this.state.album);
    this.props.toCreateAlbum(this.state.album);
    this.setState({
      ...this.state,
      album: {
        artist: this.props.currentUser.name,
        artistId: this.props.currentUserId,
      },
      createAlbumSuccess: true,
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
        <CreateAlbumSelect
          variant="outlined"
          key="genre"
          name="genre"
          value={this.state.album["genre"] || ""}
          required={true}
          onChange={this.handleInputChangeAlbum}
        >
          {this.props.genres.map((genre, index) => (
            <MenuItem key={index} value={genre.data.genre}>
              {genre.data.genre}
            </MenuItem>
          ))}
        </CreateAlbumSelect>
        {this.state.createAlbumSuccess && (
          <span>Album criado com sucesso!</span>
        )}
        <CreateAlbumButton type="submit">Criar Album</CreateAlbumButton>
      </FormWrapper>
    );

    return <Fragment>{createAlbumRenderMap}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  currentUserId: state.users.currentUserId,
  bandAlbums: state.bands.bandAlbums,
  genres: state.users.genres,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toCreateAlbum: (albumInfo) => dispatch(createAlbumAction(albumInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlbum);
