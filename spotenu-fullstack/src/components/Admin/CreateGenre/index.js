import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  CreateGenreTitle,
  CreateGenreTextField,
  CreateGenreButton,
  FormWrapper
} from "./style";
import { Typography } from "@material-ui/core";
import { createGenreAction } from "../../../actions/adminActions";

class CreateGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: {
          genre: ""
      }
  }
}

  handleInputChangeGenre = (event) => {
    const { name, value } = event.target;
    this.setState({
        genre:{
            [name]: value,
        }
    });
  };

  handleSubmmitGenre = (event) => {
    event.preventDefault();

    this.props.toCreateGenre(this.state.genre);
    this.setState({
        genre: "",
    });
  };

  render() {

    const createGenreFormTextField = [
        {
          name: "genre",
          type: "text",
          label: "Nome do gênero",
          required: true,
        },
      ]
   
    const createGenreRenderMap = (
      <FormWrapper onSubmit={this.handleSubmmitGenre}>
        <CreateGenreTitle>Criar Gênero</CreateGenreTitle>
        {createGenreFormTextField.map((input, index) => (
          <CreateGenreTextField
            variant="outlined"
            key={index}
            name={input.name}
            type={input.type}
            label={
              <Typography variant={"subtitle2"} display={"inline"}>
                {input.label}
              </Typography>
            }
            value={this.state.genre[input.name] || ""}
            required={input.required}
            onChange={this.handleInputChangeGenre}
          />
        ))}
        {this.props.createGenre && (
          <span>Gênero criado com sucesso!</span>
        )}
        <CreateGenreButton type="submit">Criar Gênero</CreateGenreButton>
      </FormWrapper>
    );

    return <Fragment>{createGenreRenderMap}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
    currentUser: state.users.currentUser,
    currentUserId: state.users.currentUserId,
    createGenre: state.admins.createGenre
});

const mapDispatchToProps = (dispatch) => {
  return {
    toCreateGenre: (musicInfo) => dispatch(createGenreAction(musicInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGenre);
