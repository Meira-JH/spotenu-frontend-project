import validateEmail from "./emailValidate";
import { validatePassword } from "./validatePassword";

export class infoValidation {
  async signup( name, password, email, role) {
      console.log(name, password, email, role)
    if (!name || name.length < 5) {
      throw new Error("Nome inválido", 400);
    }
    const isEmail = validateEmail(email);
    if (!isEmail) {
      throw new Error("Email inválido!", 412);
    }

    const isPassword = validatePassword(password);
    if (!isPassword) {
      throw new Error("Senha inválida!", 412);
    }

    // const newHash = await this.hashManager.createHash(password);

    // await this.userDataBase.signup(id, name, newHash, email, device, role);
  }

  async login(email, password) {
    const isEmail = validateEmail(email);
    if (!isEmail) {
      throw new Error("Email inválido!");
    }

    // const user = await this.userDataBase.getUserByEmail(email);

    // const hashCompare = await this.hashManager.compare(password, user.password);

    // if (!hashCompare) {
    //   throw new CustomError("Invalid password", 400);
    // }

    // return { id: user.id, role: user.role };
  }
}
