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
  FirstBlock,
  SecondBlock,
  SecondTitle,
  Warning,
} from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import { LoginAction, setError } from "../../actions/usersActions";
import Layout from "../../components/Layout/FirstLayout/FirstLayout";
import Typography from "@material-ui/core/Typography";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: "",
        password: "",
      },
      showPassword: false,
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      if (this.props.currentUser.role === "ouvinte") {
        this.props.goToUserPage();
      }
      if (this.props.currentUser.role === "banda") {
        this.props.goToBandPage();
      }
      if (this.props.currentUser.role === "admin") {
        this.props.goToAdminPage();
      }
    }
  }
  componentDidUpdate() {
    if (this.props.currentUser) {
      if (this.props.currentUser.role === "ouvinte") {
        this.props.goToUserPage();
      }
      if (this.props.currentUser.role === "banda") {
        this.props.goToBandPage();
      }
      if (this.props.currentUser.role === "admin") {
        this.props.goToAdminPage();
      }
    }
  }

  componentWillUnmount(){
    this.props.toSetError()
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      login: { ...this.state.login, [name]: value },
    });
  };

  handleSubmmit = (event) => {
    event.preventDefault();

    this.props.toLogin(this.state.login);
  };

  render() {
    const errorMessages = {
      password: "The password is invalid or the user does not have a password.",
      email:
        "There is no user record corresponding to this identifier. The user may have been deleted.",
    };

    function errorRender(error) {
      switch (error) {
        case errorMessages.password:{
          return <Warning>Email ou senha inválidos</Warning>;
        }
        case errorMessages.email:{
          return <Warning>Email ou senha inválidos</Warning>;
        }
        default:
          return <Warning>Ops, aconteceu algo inesperado</Warning>;
      }
    }

    const LoginFormStructure = [
      {
        name: "email",
        type: "text",
        label: "Insira seu email",
        required: true,
        title: "O email deve ser válido",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
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
    ];

    const LoginRenderMap = LoginFormStructure.map((input) => (
      <LoginTextField
        key={input.name}
        variant="outlined"
        name={input.name}
        type={input.type}
        label={
          <Typography variant={"subtitle2"} display={"inline"}>
            {" "}
            {input.label}{" "}
          </Typography>
        }
        value={this.state.login[input.name] || ""}
        required={input.required}
        onChange={this.handleInputChange}
        inputProps={{
          pattern: input.pattern,
          title: input.title,
        }}
        InputProps={{
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
                <LoginLogo
                  src={require("../../img/music/logocabecacirculo.png")}
                />
                {this.props.error ? errorRender(this.props.error) : ""}

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

const mapStateToProps = (state) => ({
  error: state.users.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    toLogin: (LoginInfo) => dispatch(LoginAction(LoginInfo)),
    toSetError: () => dispatch(setError(undefined)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
