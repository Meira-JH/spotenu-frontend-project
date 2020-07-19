import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  SignUpBandPageWrapper,
  FormWrapper,
  SignUpBandTextField,
  SignUpBandButton,
  FirstBlock,
  SecondBlock,
  SecondTitle,
  SignUpBandLogo,
} from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SignUpBandAction } from "../../actions/bandActions";
import Layout from "../../components/Layout/FirstLayout";

class SignUpBandPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpBand: {
        approved: false,
        email: "",
        name: "",
        nickname: "",
        description: "",
        password: "",
        confirmPassword: "",
        role: "banda",
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
      signUpBand: { ...this.state.signUpBand, [name]: value },
    });
  };

  handleSubmmit = (event) => {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
    } else {
      this.props.toSignUpBand(this.state.signUpBand);
    }
  };

  render() {
    const SignUpBandFormStructure = [
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
      },
      {
        name: "nickname",
        type: "text",
        label: "Insira seu nome de usuário",
        required: true,
        pattern: "{5,}",
        title: "Seu nome de usuário deve ter no mínimo 5 caracteres",
      },
      {
        name: "description",
        type: "text",
        label: "Descreva o estilo da sua banda",
        required: true,
        pattern: "{15,}",
        title: "Seu nome de usuário deve ter no mínimo 5 caracteres",
      },
      {
        name: "password",
        type: this.state.showPassword ? "text" : "password",
        label: "Insira sua senha",
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
        pattern: "{6,}",
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

    const SignUpBandRenderMap = SignUpBandFormStructure.map((input) => (
      <SignUpBandTextField
        variant="outlined"
        key={input.name}
        name={input.name}
        type={input.type}
        label={input.label}
        value={this.state.signUpBand[input.name] || ""}
        required={input.required}
        onChange={this.handleInputChange}
        InputProps={{
          pattern: input.pattern,
          title: input.title,
          endAdornment: input.endAdornment,
        }}
      />
    ));

    return (
      <Fragment>
        <Layout>
          <SignUpBandPageWrapper>
            <FirstBlock>
              <FormWrapper onSubmit={this.handleSubmmit}>
                <SignUpBandLogo
                  src={require("../../img/music/logocabecacirculo.png")}
                />

                {SignUpBandRenderMap}

                <SignUpBandButton type="submit">
                  Cadastrar Banda
                </SignUpBandButton>
              </FormWrapper>
            </FirstBlock>
            <SecondBlock>
              <SecondTitle>
                Nos ajude a irradiar a melhor arte! Cadastre sua banda!
              </SecondTitle>
            </SecondBlock>
          </SignUpBandPageWrapper>
        </Layout>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    toSignUpBand: (SignUpBandInfo) =>
      dispatch(SignUpBandAction(SignUpBandInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpBandPage);
