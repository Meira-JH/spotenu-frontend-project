import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  LoginPageWrapper,
  FormWrapper,
  LoginTextField,
  LoginButton,
  LoginLogo,
  LoginTitle,
  FirstBlock,
  SecondBlock,
  SecondTitle
} from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import { LoginAction } from "../../actions/usersActions";
import Layout from "../../components/Layout/FirstLayout/FirstLayout";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:{
        email: "",
        password: "",
      },
      showPassword: false,
    };
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      login: { ...this.state.login, [name]: value } 
    });
  };

  handleSubmmit = (event) => {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
    } else {
      this.props.toLogin(this.state.login);
    }
  };

  render() {
    const LoginFormStructure = [
      {
        name: "email",
        type: "text",
        label: "Insira seu email",
        required: true,
        title: "O email deve ser válido",
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
      }
    ];

    const LoginRenderMap = LoginFormStructure.map((input) => (
        <LoginTextField
          key={input.name}
          variant="outlined"
          name={input.name}
          type={input.type}
          label={input.label}
          value={this.state.login[input.name] || ""}
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
      <LoginPageWrapper>
        <FirstBlock>
          <FormWrapper onSubmit={this.handleSubmmit}>
            <LoginLogo src={require('../../img/music/logocabecacirculo.png')}/>
            
            {LoginRenderMap}

            <LoginButton type="submit">Entrar</LoginButton>
          </FormWrapper>
        </FirstBlock>
        <SecondBlock>
          <SecondTitle>
            Acesse o universo da mais distinta música
          </SecondTitle>
        </SecondBlock>
      </LoginPageWrapper>
      </Layout>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    toLogin: (LoginInfo) => dispatch(LoginAction(LoginInfo)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
