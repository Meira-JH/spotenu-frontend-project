import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { LoginPageWrapper, FormWrapper } from "./style";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

class LoginPage extends Component {
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
      this.props.goToLoginPage();
    }
  };

  render() {
    const loginFormStructure = [
      {
        name: "email",
        type: "text",
        label: "Insira seu email ou nome de usuário",
        required: true,
        pattern: "{6,}",
        title: "O email/nome de usuário deve ser válido",
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
    
    const loginMap = loginFormStructure.map((input) => (
      <div key={input.name}>
        <TextField
          id={Date.now()}
          name={input.name}
          type={input.type}
          label={input.label}
          value={this.state.form[input.name] || ""}
          required={input.required}
          onChange={this.handleInputChange}
          inputProps={{
            pattern: input.pattern,
            title: input.title,
            endAdornment: input.endAdornment,
          }}
        />
      </div>
    ));

    return (
      <LoginPageWrapper>
        <FormWrapper onSubmit={this.handleSubmmit}>
          {loginMap}

          <Button type="submit">Cadastrar</Button>
        </FormWrapper>
      </LoginPageWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
