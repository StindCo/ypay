import { AiOutlineLogout } from "react-icons/ai";
import { BsArrowRight, BsBook, BsPlusLg, BsStar, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import profil from "../../assets/images/profil.jpg";
import { useEffect, useState } from "react";
import { BsBagPlus } from "react-icons/bs";
import { addNotAppUser, getClients } from "../../shared/fetchers/client";
import { TbTruckDelivery } from "react-icons/tb";

type Props = {
  propStyle: any;
  type: string;
};

const typesOfUser = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Customer",
    value: "customer",
  },
  {
    label: "Utilisateur no-app",
    value: "customer_no_app",
  },
];

export default function Client() {
  const [currentPage, setCurrentPage] = useState<any>(0);
  const [numberOfPage, setNumberOfPage] = useState<any>(1);
  const [pageLength, setPageLength] = useState<any>(10);
  const [filterText, setFilterText] = useState<any>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToShow, setUserToShow] = useState<any>({});
  const [isModalForUserToShowOpen, setIsModalForUserToShowOpen] =
    useState(false);
  const [clientsFiltered, setClientsFiltered] = useState<any>([]);
  const [typeOfUser, setTypeOfUser] = useState<any>("all");

  const [user, setUser] = useState<any>({
    name: "",
    phone: "",
    birthday: "",
    gender: "M",
    email: "",
  });

  const [clients, setClients] = useState<any>([]);

  const showClient = (client: any) => {
    setUserToShow(client);
    setIsModalForUserToShowOpen(true);
  };

  const createANotAppClient = () => {
    addNotAppUser(user).then((response) => {
      loadClients();
      setIsModalOpen(false);
      setUser({
        name: "",
        phone: "",
        birthday: "",
        gender: "M",
        email: "",
      });
    });
  };

  useEffect(() => {
    let clientsWithFilter: any =
      typeOfUser == "all"
        ? clients
        : clients.filter((value: any) => value.user_type == typeOfUser);

    if (filterText == "") {
      let totalPages = Math.ceil(clientsWithFilter.length / pageLength);
      setNumberOfPage(totalPages);
      const startIndex = currentPage * pageLength;
      const endIndex = startIndex + pageLength;
      const subset = clientsWithFilter.slice(startIndex, endIndex);
      setClientsFiltered(subset);
    } else {
      let value: any = clientsWithFilter.filter(
        (client: any) =>
          client.name.toLowerCase().includes(filterText.toLowerCase()) ||
          client?.email?.toLowerCase()?.includes(filterText.toLowerCase()) ||
          client?.phone_number
            ?.toLowerCase()
            ?.includes(filterText.toLowerCase())
      );

      setClientsFiltered(value);
    }
  }, [clients, pageLength, currentPage, filterText, typeOfUser]);

  const loadClients = () => {
    getClients().then(({ data }) => {
      setClients(data.data);
    });
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-row items-center justify-between mt-3 mb-10">
          <div className="dropdown dropdown-end">
            <div className="flex items-center space-x-3 cursor-pointer">
              <span className="bg-slate-200 p-3 px-6 rounded-lg">
                {" "}
                {`EURO () -> USD ($) :  1.11`}
              </span>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <span className="underline">Mon compte</span>
              <div className="border p-1 rounded-full ">
                <img src={profil} className="w-[40px] rounded-full h-[40px]" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">
                  <AiOutlineLogout /> Se déconnecter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex items-center pl-1 justify-between">
          <div className="text-2xl font-[PoppinsBold]">Gestion des clients</div>
        </div>

        <div className="w-full flex flex-row my-8 items-center justify-between">
          <div className="flex items-center w-3/5  space-x-4">
            <select
              onChange={(e) => setPageLength(parseInt(e.target.value))}
              className="select select-sm"
            >
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="500">500</option>
            </select>
            <div className="">
              <input
                onChange={(e) => setFilterText(e.target.value)}
                type="text"
                placeholder="Rechercher un client"
                className="input input-sm input-bordered w-full"
              />
            </div>
            <select
              onChange={(e) => setTypeOfUser(e.target.value)}
              className="select select-bordered select-sm"
            >
              {typesOfUser.map((value, index: any) => (
                <option key={index} value={value.value}>
                  {value.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-green-500 rounded-lg text-white hover:bg-green-700 flex items-center space-x-3"
            >
              <BsPlusLg size={15} />
              <span>Ajouter un client </span>
            </div>
          </div>
        </div>
        <div className="overflow-hidden  overflow-y-scroll">
          <table className="table table-zebra w-full ">
            <thead>
              <tr>
                <th>#</th>
                <th>Nom complet</th>
                <th>Email</th>
                <th>Tél</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clientsFiltered.map((value: any, index: number) => (
                <tr key={Math.random()}>
                  <th>{index + 1}</th>
                  <th className="underline cursor-pointer select-none font-[PoppinsBold] ">
                    <div> {value?.name} </div>
                  </th>
                  <th>{value?.email}</th>
                  <th>{value?.phone_number}</th>
                  <th className="">
                    <div className="space-x-3 items-center flex">
                      <span
                        onClick={() => showClient(value)}
                        className="btn-xs btn-primary rounded-lg btn text-sm cursor-pointer"
                      >
                        Voir
                      </span>
                      {value?.user_type == "customer_no_app" && (
                        <>
                          <span
                            data-tip="Créer une commande Ypay"
                            className="tooltip underline cursor-pointer"
                          >
                            <BsBagPlus className="text-blue-700" />
                          </span>
                          <span
                            data-tip="Créer une commande colis243"
                            className="tooltip underline cursor-pointer"
                          >
                            <TbTruckDelivery
                              size={20}
                              className="text-orange-500"
                            />
                          </span>
                        </>
                      )}
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="join mx-auto mt-5 flex items-center justify-center rounded-lg space-x-2">
            <button
              disabled={currentPage == 0}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`join-item btn-sm rounded-lg px-5 btn btn-outline`}
            >
              prev
            </button>
            {Array(numberOfPage)
              .fill(0)
              .map((_, index: number) => (
                <button
                  key={Math.random()}
                  onClick={() => setCurrentPage(index)}
                  className={`join-item  btn-sm rounded-lg px-5 btn ${
                    currentPage != index && "btn-outline"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage + 1 == numberOfPage}
              className={`join-item btn-sm rounded-lg px-5 btn btn-outline`}
            >
              next
            </button>
          </div>

          <div className="mt-5 bg-slate-900 p-3 text-white rounded text-right">
            totals:
            <span className="ml-5 font-[PoppinsBold]">
              {clientsFiltered.length} / {clients.length} clients
            </span>
          </div>
        </div>
      </div>
      <dialog
        className={`w-full  h-full modal ${isModalOpen ? "modal-open" : ""}`}
      >
        <div className="bg-zinc-50 absolute top-24 px-6 pt-2 text-lg rounded-lg w-2/4">
          <div className="flex flex-row border-b py-3  px-2 items-center justify-between">
            <h2>Enregistrement d'un client no-app</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn rounded-full btn-sm btn-error text-white"
            >
              <BsX size={20} />
            </button>
          </div>
          <div className="">
            <div className="py-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nom complet</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setUser((user: any) => ({
                        ...user,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Entrez le nom complet"
                    className={"input input-bordered"}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    placeholder="Numéro de téléphone"
                    type="text"
                    onChange={(e) =>
                      setUser((user: any) => ({
                        ...user,
                        email: e.target.value,
                      }))
                    }
                    className={"input input-bordered"}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date de naissance</span>
                  </label>
                  <input
                    type="date"
                    onChange={(e) =>
                      setUser((user: any) => ({
                        ...user,
                        birthday: e.target.value,
                      }))
                    }
                    placeholder="Entrez le nom complet"
                    className={"input input-bordered"}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Numéro tél</span>
                  </label>
                  <input
                    placeholder="Numéro de téléphone"
                    type="text"
                    onChange={(e) =>
                      setUser((user: any) => ({
                        ...user,
                        phone: e.target.value,
                      }))
                    }
                    className={"input input-bordered"}
                  />
                </div>
              </div>

              <div className="mt-3">
                <div className="form-control ">
                  <span className="label-text">Genre</span>
                  <div className="space-x-5 items-center text-sm flex mt-5">
                    <input
                      onChange={(e) =>
                        setUser((user: any) => ({
                          ...user,
                          gender: "M",
                        }))
                      }
                      type="radio"
                      name="radio-1"
                      className="radio"
                      checked
                    />
                    <label>Homme</label>
                    <input
                      onChange={(e) =>
                        setUser((user: any) => ({
                          ...user,
                          gender: "F",
                        }))
                      }
                      type="radio"
                      name="radio-1"
                      className="radio"
                    />
                    <label>Femme</label>
                  </div>
                </div>
              </div>

              <div className="w-64">
                <button
                  onClick={() => createANotAppClient()}
                  className="py-3 btn mt-5 w-full rounded-md  "
                  type="submit"
                >
                  Enregistrer
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </dialog>

      <dialog
        className={`w-full  h-full modal ${
          isModalForUserToShowOpen ? "modal-open" : ""
        }`}
      >
        <div className="bg-zinc-50 px-6 pt-2 text-lg rounded-lg w-2/5">
          <div className="flex flex-row border-b py-3  px-2 items-center justify-between">
            <h2>Présentation du client</h2>
            <button
              onClick={() => setIsModalForUserToShowOpen(false)}
              className="btn rounded-full btn-sm btn-error text-white"
            >
              <BsX size={20} />
            </button>
          </div>
          <div className="flex items-center justify-around py-8">
            <div>
              <div className="p-1 mx-auto">
                <img
                  src={profil}
                  className="w-[150px] mx-auto  rounded-full h-[150px]"
                />
              </div>
            </div>
            <div className="w-1/2 text-sm space-y-4">
              <div className="grid grid-cols-2 text-sm">
                <div className="font-[PoppinsBold] text-sm">Nom:</div>
                <div>{userToShow?.name}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-[PoppinsBold] text-sm">Email:</div>
                <div>{userToShow?.email}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-[PoppinsBold] text-sm">Tél:</div>
                <div>{userToShow?.phone_number}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="font-[PoppinsBold] text-sm">
                  Date de naissance:
                </div>
                <div>{userToShow?.birthday}</div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
