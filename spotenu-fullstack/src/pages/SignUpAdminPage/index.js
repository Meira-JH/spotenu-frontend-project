import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  SignUpAdminPageWrapper,
  FormWrapper,
  SignUpAdminTextField,
  SignUpAdminButton,
  FirstBlock,
  SecondBlock,
  SecondTitle,
  SignUpAdminLogo,
  Warning
} from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SignUpAdminAction } from "../../actions/adminActions";
import Layout from "../../components/Layout/FirstLayout/FirstLayout";
import { Typography } from "@material-ui/core";
import { setError } from "../../actions/usersActions";

class SignUpAdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpAdmin: {
        approved: false,
        email: "",
        name: "",
        nickname: "",
        password: "",
        confirmPassword: "",
        role: "admin",
      },
      showPassword: false,
      showConfirmPassword: false,
      passwordCompare: true
    };
  }

  componentWillUnmount(){
    this.props.toSetError()
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
      signUpAdmin: { ...this.state.signUpAdmin, [name]: value },
    });
  };

  handleSubmmit = (event) => {
    event.preventDefault();

    if (this.state.password === this.state.confirmPassword) {
      this.props.toSignUpAdmin(this.state.signUpAdmin);
    } else {
      this.setState({ passwordCompare: false });
    }
  };

  render() {
    const signUpAdminFormStructure = [
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
        title: "O email deve ser válido",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
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
        pattern: ".{10,}",
        title: "A senha deve ter pelo menos 10 caracteres",
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
        pattern: ".{10,}",
        title: "A senha deve ter pelo menos 10 caracteres",
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

    const signUpAdminRenderMap = signUpAdminFormStructure.map((input) => (
      <SignUpAdminTextField
        variant="outlined"
        key={input.name}
        name={input.name}
        type={input.type}
        label={
          <Typography variant={"subtitle2"} display={"inline"}> {input.label} </Typography>
        }        
        value={this.state.signUpAdmin[input.name] || ""}
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
          <SignUpAdminPageWrapper>
            <FirstBlock>
              <FormWrapper onSubmit={this.handleSubmmit}>
                <SignUpAdminLogo
                  src={require("../../img/music/logocabecacirculo.png")}
                />
                {this.props.error ? (
                  <Warning>Houve um problema ao cadastrar</Warning>
                ) : (
                  ""
                )}
                {this.state.passwordCompare ? (
                  ""
                ) : (
                  <Warning>As senhas não são iguais</Warning>
                )}

                {signUpAdminRenderMap}

                <SignUpAdminButton type="submit">
                  Cadastrar Administrador
                </SignUpAdminButton>
              </FormWrapper>
            </FirstBlock>
            <SecondBlock>
              <SecondTitle>Seja parte da equipe Spotenu!</SecondTitle>
            </SecondBlock>
          </SignUpAdminPageWrapper>
        </Layout>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toSignUpAdmin: (signUpAdminInfo) =>
      dispatch(SignUpAdminAction(signUpAdminInfo)),
      toSetError: () => dispatch(setError(undefined)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpAdminPage);
