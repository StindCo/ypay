import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FadeIn from "react-fade-in/lib/FadeIn";
import logo from "../../assets/images/logo1.png";
import { useState } from "react";
import Toast from "../../shared/components/Toast/Toast";
import { useNavigate } from "react-router-dom";
import { LoginService } from "./LoginService";
import { loginUser, setToken } from "../../shared/reducers/login";
import { BsExclamationCircle } from "react-icons/bs";

type Props = {};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [view, setView] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const [IsErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isFullnameValid, setIsFullnameValid] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateUsername = () => {
    setIsUsernameValid(username != "");
  };

  const validateFullname = () => {
    setIsFullnameValid(fullname != "");
  };

  const validatePassword = () => {
    setIsPasswordValid(password != "");
  };

  const onSubmit = (e: any) => {
    validateUsername();
    validatePassword();

    if (isUsernameValid && isPasswordValid) {
      setIsLoading(true);
      LoginService.login(username, password)
        .then((value: any) => {
          if (value?.message == "ok") {
            let user: any = value?.data?.data?.user[0];
            let token: string = value?.data?.data?.token;


            localStorage.setItem("token", token);

            dispatch(setToken({token}))

            dispatch(loginUser(user));

            navigate("/home");
          }
        })
        .catch((error: any) => {
          setIsError(true);
          setErrorMessage(error?.message);
          e.preventDefault();
        });
      setIsLoading(false);
    }

    e.preventDefault();
  };

  const onRegister = (e: any) => {
    validateUsername();
    validatePassword();
    validateFullname();

    if (isUsernameValid && isPasswordValid && isFullnameValid) {
      LoginService.register(username, password, fullname).then((value: any) => {
        if (value?.message == "ok") {
          let user: any = value?.data?.data?.user[0];
          let token: string = value?.data?.data?.token;

          localStorage.setItem("token", token);

          dispatch(loginUser(user));

          navigate("/home");
        }
      });
    }

    e.preventDefault();
  };

  const toggleMessageError = (text: any) => {
    setErrorMessage(text);
    setIsErrorMessageVisible(true);
    setTimeout(() => {
      setIsErrorMessageVisible(false);
    }, 5000);
  };

  return (
    <>
      {IsErrorMessageVisible && <Toast type="error" message={errorMessage} />}

      <FadeIn className="overflow-hidden">
        <div className=" h-screen overflow-hidden overlflow-y-scroll">
          <div className="w-full  h-full from-slate-900 via-slate-800  to-slate-900 bg-gradient-to-r bg-gradient-from-r flex  justify-between items-center">
            <div className="w-2/4">
              <div className=" flex items-center justify-center space-x-3 text-white w-full text-center">
                <img src={logo} className="w-24" />
                <span className="font-[PoppinsBold] text-white text-7xl ">
                  Yanda's
                </span>
              </div>

              <p className="text-white w-2/4 text-center absolute bottom-20">
                Votre service des frets et livraisons de qualité 🫡
              </p>
            </div>
            {view == "login" && (
              <div className="w-2/4 h-full shadow-lg bg-white border rounded-xl p-8 mx-auto pb-8 flex items-center justify-center">
                <div className="w-4/5 rounded-2xl space-y-5">
                  <div className="p-5 space-y-2">
                    <h2 className="text-2xl font-[PoppinsBold]">
                      Bienvenue chez Yanda'S ! 👋
                    </h2>
                    <p className="text-lg text-slate-700">
                      Veillez vous connectez avant de commencer !
                    </p>
                  </div>
                  {isError && (
                    <div className="flex items-center space-x-5 p-5 text-white bg-red-500 rounded-lg">
                      <BsExclamationCircle size={30} />
                      <div>{errorMessage}</div>
                    </div>
                  )}
                  <div className="px-5">
                    <form
                      method="post"
                      onSubmit={onSubmit}
                      className="space-y-5"
                    >
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Identifiant</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          onChange={(e) => setUsername(e.target.value)}
                          onBlur={() => validateUsername()}
                          className={
                            isUsernameValid
                              ? "input input-bordered"
                              : "input input-bordered input-error"
                          }
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={() => validatePassword()}
                          className={
                            isPasswordValid
                              ? "input input-bordered"
                              : "input input-bordered input-error"
                          }
                        />
                        <label className="text-right">
                          <a
                            href="#"
                            className="label-text-alt link  link-hover"
                          >
                            Mot de passe oublié ?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-8">
                        <button
                          className="py-3 mt-5 hover:bg-green-800 rounded-md  bg-green-700 text-lg text-white"
                          type="submit"
                        >
                          {isLoading
                            ? "Connexion en cours ..."
                            : "Se connecter"}
                        </button>
                      </div>
                      <p className="text-center space-x-5">
                        <span>Vous n'avez pas de compte ?</span>{" "}
                        <a
                          onClick={() => setView("signup")}
                          className="text-green-700 cursor-pointer underline"
                        >
                          Créer un compte
                        </a>{" "}
                      </p>
                      {/* <hr className="w-1/6 mx-auto border-b border-[#030b1d85]" /> */}
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            )}

            {view == "signup" && (
              <div className="w-2/4 h-full shadow-lg bg-white border rounded-xl p-8 mx-auto pb-8 flex items-center justify-center">
                <div className="w-4/5 rounded-2xl">
                  <div className="p-5 space-y-2">
                    <h2 className="text-2xl font-[PoppinsBold]">
                      L'aventure commence ici 🚀 !
                    </h2>
                    <h2 className="text-lg text-slate-800">
                      Commander et Ayez une main mise sur votre commande!{" "}
                    </h2>
                  </div>
                  <div className="px-5 py-5">
                    <form
                      method="post"
                      onSubmit={onRegister}
                      className="space-y-5"
                    >
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Nom complet</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Nom complet"
                          onChange={(e) => setFullname(e.target.value)}
                          onBlur={() => validateFullname()}
                          className={
                            isFullnameValid
                              ? "input input-bordered"
                              : "input input-bordered input-error"
                          }
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Identifiant</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          onChange={(e) => setUsername(e.target.value)}
                          onBlur={() => validateUsername()}
                          className={
                            isUsernameValid
                              ? "input input-bordered"
                              : "input input-bordered input-error"
                          }
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Mot de passe</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={() => validatePassword()}
                          className={
                            isPasswordValid
                              ? "input input-bordered"
                              : "input input-bordered input-error"
                          }
                        />
                      </div>
                      <div className="form-control mt-8">
                        <button
                          className="py-3 mt-9 hover:bg-green-800 rounded-md  bg-green-700 text-lg text-white"
                          type="submit"
                        >
                          Créer un compte
                        </button>
                      </div>
                      <p className="text-center space-x-5">
                        <span>Déjà enregistré(e) ?</span>{" "}
                        <a
                          onClick={() => setView("login")}
                          className="text-green-700 cursor-pointer underline"
                        >
                          Se connecter
                        </a>{" "}
                      </p>
                      {/* <hr className="w-1/6 mx-auto border-b border-[#030b1d85]" /> */}
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
