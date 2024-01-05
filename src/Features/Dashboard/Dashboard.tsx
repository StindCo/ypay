import { useState } from "react";
import { BsHouse } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
// import { fetchOperateurs, fetchSchemas, verifyUser } from "./DashboardFetch";
import { PatternsContext } from "./PatternsContext";
import { FcMoneyTransfer, FcSynchronize } from "react-icons/fc";
import { TbPointFilled, TbQuestionMark, TbTruckDelivery } from "react-icons/tb";
import RecherchePost from "./RecherchePost";
import { MdOutlineManageAccounts } from "react-icons/md";
import FadeIn from "react-fade-in/lib/FadeIn";

type Props = {
  message: any;
  type: string;
};

export default function Dashboard() {
  let navigate = useNavigate();
  let location = useLocation();
  let [patterns, setPatterns] = useState([]);
  let dispatch = useDispatch();
  const [view, setView] = useState("principal");
  const [layout, setLayout] = useState(1);
  const [isNotValided, setIsNotValided] = useState(false);

  return (
    <>
      {!isNotValided && (
        <div
          className={`h-screen w-screen overflow-hidden flex flex-row   ${
            location.pathname == "/dashboard/project" ? "" : "backdrop-blur-sm"
          } `}
        >
          <div className="w-[350px] h-full bg-slate-900 shadow-lg pb-3">
            <div className="w-full">
              <Link to="/home">
                <div className="text-right text-lg flex items-center space-x-1 p-5">
                  <div className=" flex items-center justify-center space-x-3 text-white w-full text-center">
                    <img src={logo} className="w-16" />
                    <span className="font-[PoppinsBold] text-white text-4xl ">
                      Yanda's
                    </span>
                  </div>
                </div>
              </Link>
              <div className="w-full flex flex-col  mt-6 space-y-0">
                <Link
                  to="/home"
                  data-tip="Page d'acceuil"
                  className={`tooltip-right text-gray-400 ${
                    location.pathname == "/home"
                      ? "text-white  bg-gradient-to-r from-green-600 via-green-600 to-green-600"
                      : "text-slate-200 hover:text-gray-300"
                  } w-full ml-[1%] text-md rounded-l-[100px] p-5 pl-8 space-x-5 flex justify-start items-center`}
                >
                  <BsHouse className="text-xl" /> <span>Tableau de bord</span>
                </Link>

                <div
                  onClick={() => setLayout(2)}
                  className={`tooltip-right  ${
                    layout == 2 || location.pathname.includes("/home/ypay")
                      ? "text-white  bg-slate-800"
                      : "text-slate-200 hover:text-gray-300"
                  } w-full ml-[1%] cursor-pointer rounded-l-[100px]  text-md p-5 pl-8 space-x-5 flex justify-start items-center`}
                >
                  <FcMoneyTransfer className="text-xl" />{" "}
                  <span>Ypay & delivery</span>
                </div>
                {layout == 2 && (
                  <FadeIn>
                    <div className="py-3 space-y-2 text-sm pl-10 truncate select-none">
                      <Link to="/home/orders">
                        <div
                          className={`flex text-white ${
                            location.pathname == "/home/orders"
                              ? "text-white  bg-gradient-to-r from-green-600 via-green-600 to-green-600"
                              : "text-slate-200 hover:text-gray-300"
                          } hover:bg-slate-800 flex-row items-center p-3 space-x-2 cursor-pointer rounded-l-3xl`}
                        >
                          <TbPointFilled size={20} />
                          <span className="truncate">Mes commandes</span>
                        </div>
                      </Link>
                      <Link to="/home/new_orders">
                        <div
                          className={`flex ${
                            location.pathname == "/home/new_orders"
                              ? "text-white  bg-gradient-to-r from-green-600 via-green-600 to-green-600"
                              : "text-slate-200 hover:text-gray-300"
                          } text-white hover:bg-slate-800 flex-row items-center p-3 space-x-2 cursor-pointer rounded-l-3xl`}
                        >
                          <TbPointFilled size={20} />
                          <span className="truncate">Nouvelle commande</span>
                        </div>
                      </Link>
                    </div>
                  </FadeIn>
                )}
                <div
                  onClick={() => setLayout(3)}
                  className={`tooltip-right  ${
                    location.pathname.includes("/home/colis243") || layout == 3
                      ? "text-white  bg-slate-800"
                      : "text-slate-200 hover:text-gray-300"
                  } w-full ml-[1%] cursor-pointer  rounded-l-[100px] text-md p-5 pl-8 space-x-5 flex justify-start items-center`}
                >
                  <TbTruckDelivery className="text-xl" /> <span>Colis243</span>
                </div>

                {layout == 3 && (
                  <FadeIn>
                    <div className="py-3 space-y-2 text-sm pl-10 truncate select-none">
                      <div
                        className={`flex text-white hover:bg-slate-800 flex-row items-center p-3 space-x-2 cursor-pointer rounded-l-3xl`}
                      >
                        <TbPointFilled size={20} />
                        <span className="truncate">Mes colis</span>
                      </div>

                      <div
                        className={`flex text-white hover:bg-slate-800 flex-row items-center p-3 space-x-2 cursor-pointer rounded-l-3xl`}
                      >
                        <TbPointFilled size={20} />
                        <span className="truncate">Mes adresses</span>
                      </div>

                      <div
                        className={`flex text-white hover:bg-slate-800 flex-row items-center p-3 space-x-2 cursor-pointer rounded-l-3xl`}
                      >
                        <TbPointFilled size={20} />
                        <span className="truncate">Estimateur de prix</span>
                      </div>
                    </div>
                  </FadeIn>
                )}

                <Link
                  to="/home/profil"
                  data-tip="Page d'acceuil"
                  className={`tooltip-right  ${
                    location.pathname == "/home/mariage"
                      ? "text-white  bg-slate-800"
                      : "text-slate-200 hover:text-gray-300"
                  } w-full ml-[1%]  text-md p-5 pl-8 space-x-5 flex justify-start items-center`}
                >
                  <MdOutlineManageAccounts className="text-xl" />{" "}
                  <span>Profil</span>
                </Link>

                <Link
                  to="/home/support"
                  data-tip="Page d'acceuil"
                  className={`tooltip-right  ${
                    location.pathname == "/home/mariage"
                      ? "text-white  bg-slate-800"
                      : "text-slate-200 hover:text-gray-300"
                  } w-full ml-[1%]  text-md p-5 pl-8 space-x-5 flex justify-start items-center`}
                >
                  <TbQuestionMark className="text-xl" />{" "}
                  <span>Centre d'aide</span>
                </Link>
              </div>
            </div>
          </div>
          <PatternsContext.Provider value={patterns}>
            <div className="w-full h-full  p-4 px-8 overflow-hidden">
              <div className="mx-3 pb-32 h-[100%] overflow-hidden overflow-y-scroll px-5 no-scrollBar ">
                {view != "search" && <Outlet />}
                {view == "search" && (
                  <>
                    <div className="w-full flex items-center justify-between">
                      <p className="text-lg">Recherche ...</p>
                      <p
                        onClick={() => setView("k")}
                        className="text-sm cursor-pointer text-red-600 underline"
                      >
                        Quitter la recherche
                      </p>
                    </div>

                    <RecherchePost text="" />
                  </>
                )}
              </div>
            </div>
          </PatternsContext.Provider>
        </div>
      )}

      {isNotValided && (
        <div className="w-full h-screen flex flex-col justify-center items-center space-y-10">
          <FcSynchronize size={160} className="animate-spin" />
          <p className="text-xl">Votre compte est en attente d'activation.</p>
          <div>Veillez patienter 😇 !!!</div>
        </div>
      )}
    </>
  );
}
