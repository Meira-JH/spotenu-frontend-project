import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { SignUpPageWrapper, FormWrapper, SignUpTextField, SignUpButton } from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
    };
  }


  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmmit = (event) => {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
    } else {
      // this.props.signUp(this.state);
      this.props.goToLandingPage();
    }
  };

  render() {

const signUpFormStructure = [
  {
    name: "name",
    type: "text",
    label: "Insira seu nome",
    required: true,
    pattern: "[A-Za-z ãé]{5,}",
    title: "O nome deve conter no mínimo 5 letras",
  },
  {
    name: "email",
    type: "text",
    label: "Insira seu email",
    required: true,
    pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/",
    title: "O email deve ser válido",
  },
  {
    name: "username",
    type: "text",
    label: "Insira seu nome de usuário",
    required: true,
    pattern: "{5,}",
    title: "Seu nome de usuário deve ter no mínimo 5 caracteres",
  },
  {
    name: "password",
    type: this.showPassword ? "text" : "password",
    label: "Insira sua senha",
    required: true,
    pattern: "{6,}",
    title: "A senha deve ter pelo menos 6 caracteres",
  },
  {
    name: "confirmPassword",
    type: this.showPassword ? "text" : "password",
    label: "Repita sua senha",
    required: true,
    pattern: "{6,}",
    title: "A senha deve ter pelo menos 6 caracteres",
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={this.handleClickShowPassword}
          edge="end"
        >
          {this.showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  },
];

const signUpMap = signUpFormStructure.map((input) => (
  <div key={input.name}>
    <SignUpTextField
      id={Date.now()}
      name={input.name}
      type={input.type}
      label={input.label}
      value={this.state[input.name] || ""}
      required={input.required}
      onChange={this.handleInputChange}
      inputProps={{
        pattern: input.pattern,
        title: input.title,
        endAdornment: input.endAdornment,
      }}
    />
  </div>
))
    return (
      <SignUpPageWrapper>
        <FormWrapper onSubmit={this.handleSubmmit}>
          {signUpMap}
          <SignUpButton type="submit">Cadastrar</SignUpButton>
        </FormWrapper>
      </SignUpPageWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpPage);
