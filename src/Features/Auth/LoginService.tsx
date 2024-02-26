import { useDispatch } from "react-redux";
import { loginUser } from "../../shared/reducers/login";
import { axiosClient } from "../../shared/fetchers/Axios";
import axios from "axios";


export const LoginService: any = {};


LoginService.login = async (username: string, password: string) => {
  try {
    let response: any = await axiosClient().post("/login", {
      email: username,
      password,
    });

    let data:any = response.data;

    return { data , message: "ok" };
  } catch (err: any) {
    let message:string = "";
    if (err?.response?.data?.message == "username-error")
      message  = "Il n'existe aucun compte avec cet identifiant.";
    if (err?.response?.data?.message == "password-error")
      message  = "Le mot de passe saisi est incorrect.";
    if (err?.code == "ERR_NETWORK")
      message  = "Une erreur interne est survenue, veillez recommencer";

      throw new Error(message);
  }

  // let token = await localStorage.get("token");
};

LoginService.register = async (username: string, password: string, fullname:string) => {
  try {
    let response: any = await axiosClient().post("/register", {
      email: username,
      password,
      name: fullname
    });

    let data:any = response.data;

    return { data , message: "ok" };
  } catch (err: any) {
    let message:string = "";
    if (err?.response?.data?.message == "username-error")
      message  = "Il n'existe aucun compte avec cet identifiant.";
    if (err?.response?.data?.message == "password-error")
      message  = "Le mot de passe saisi est incorrect.";
    if (err?.code == "ERR_NETWORK")
      message  = "Une erreur interne est survenue, veillez recommencer";

      throw new Error(message);
  }

  // let token = await localStorage.get("token");
};

LoginService.updatePassword = function (
  username: any,
  oldPassword: string,
  newPassword: string
) {};

LoginService.logout = function () {};


