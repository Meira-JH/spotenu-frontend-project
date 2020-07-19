import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../router";
import {
  UserPageWrapper,
  UserTextField,
} from "./style";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import { UserAction } from "../../actions/usersActions";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    });
  };

  render() {
    const UserFormStructure = [
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
              {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      },
    ];

    const UserRenderMap = UserFormStructure.map((input) => (
        <UserTextField
          variant="outlined"
          key={input.name}
          name={input.name}
          type={input.type}
          label={input.label}
          value={this.state.User[input.name] || ""}
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
      <UserPageWrapper>
       
      </UserPageWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToLandingPage: () => dispatch(push(routes.root)),
    goToUserAdminPage: () => dispatch(push(routes.registerAdmin)),
    toUser: (UserInfo) => dispatch(UserAction(UserInfo)),
  };
};

export default connect(null, mapDispatchToProps)(UserPage);
