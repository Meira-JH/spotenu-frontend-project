import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  SignUpPageWrapper,
  FormWrapper,
  SignUpTextField,
  SignUpButton,
  FirstBlock,
  SecondBlock,
  SecondTitle,
  SignUpLogo,
  GoToAdminRegistration,
} from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SignUpAction } from "../../actions/usersActions";
import Layout from "../../components/Layout/FirstLayout/FirstLayout";
import { infoValidation } from "../../util/validation";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: {
        accountType: "free",
        email: "",
        name: "",
        nickname: "",
        password: "",
        confirmPassword: "",
        role: "ouvinte",
      },
      showPassword: false,
      showConfirmPassword: false,
    };
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleClickShowConfirmPassword = () => {
    this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      signUp: { ...this.state.signUp, [name]: value },
    });
  };

  handleSubmmit = (event) => {
    event.preventDefault();
    const state = this.state.signUp;
    new infoValidation().signup(
      state.name,
      state.password,
      state.email,
      state.role
    );

    if (this.password === this.confirmPassword) {
      this.props.toSignUp(this.state.signUp);
    }
  };

  render() {
    const signUpFormStructure = [
      {
        name: "name",
        type: "text",
        label: "Insira seu nome",
        required: true,
        pattern: ".{5,}",
        title: "O nome deve conter no mínimo 5 letras",
      },
      {
        name: "email",
        type: "text",
        label: "Insira seu email",
        required: true,
        title: "O email deve ser válido",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      },
      {
        name: "nickname",
        type: "text",
        label: "Insira seu nome de usuário",
        required: true,
        pattern: ".{5,}",
        title: "Seu nome de usuário deve ter no mínimo 5 caracteres",
      },
      {
        name: "password",
        type: this.state.showPassword ? "text" : "password",
        label: "Insira sua senha",
        required: true,
        pattern: ".{6,}",
        title: "A senha deve ter pelo menos 6 caracteres",
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={this.handleClickShowPassword}
              edge="end"
            >
              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      },
      {
        name: "confirmPassword",
        type: this.state.showConfirmPassword ? "text" : "password",
        label: "Repita sua senha",
        required: true,
        pattern: ".{6,}",
        title: "A senha deve ter pelo menos 6 caracteres",
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={this.handleClickShowConfirmPassword}
              edge="end"
            >
              {this.state.showConfirmPassword ? (
                <Visibility />
              ) : (
                <VisibilityOff />
              )}
            </IconButton>
          </InputAdornment>
        ),
      },
    ];

    const signUpRenderMap = signUpFormStructure.map((input) => (
      <SignUpTextField
        variant="outlined"
        key={input.name}
        name={input.name}
        type={input.type}
        label={input.label}
        value={this.state.signUp[input.name] || ""}
        required={input.required}
        onChange={this.handleInputChange}
        inputProps={{
          pattern: input.pattern,
          title: input.title,
          endAdornment: input.endAdornment,
        }}
      />
    ));

    return (
      <Fragment>
        <Layout>
          <SignUpPageWrapper>
            <FirstBlock>
              <FormWrapper onSubmit={this.handleSubmmit}>
                <SignUpLogo
                  src={require("../../img/music/logocabecacirculo.png")}
                />

                {signUpRenderMap}

                <SignUpButton type="submit">Cadastrar</SignUpButton>
                <GoToAdminRegistration onClick={this.props.goToSignUpAdminPage}>
                  Seja um Admin
                </GoToAdminRegistration>
              </FormWrapper>
            </FirstBlock>
            <SecondBlock>
              <SecondTitle>
                Faça uma conta e aproveite todas as maravilhas do Spotenu!
              </SecondTitle>
            </SecondBlock>
          </SignUpPageWrapper>
        </Layout>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    goToSignUpAdminPage: () => dispatch(push(routes.registerAdmin)),
    toSignUp: (signUpInfo) => dispatch(SignUpAction(signUpInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpPage);
