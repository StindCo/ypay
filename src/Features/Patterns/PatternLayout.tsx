import { useState, useRef, useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BsPlusLg, BsStar, BsX } from "react-icons/bs";
import "react-reflex/styles.css";
import profil from "../../assets/images/profil.jpeg";

import { Link } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
import axios from "axios";

export default function PatternsLayout() {
  const [width, setWidth] = useState<any>(0);
  const viewRef = useRef<any>(null);
  const [focusView, setFocusView] = useState(2);
  const [projetToEdit, setProjetToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [naissances, setNaissances] = useState([]);

  const [naissance, setNaissance] = useState<any>({
    "numnouvne": "",
    "nomnouvne": "",
    "postnouvne": "",
    "prennouvne": "",
    "genrnouvne": "",
    "datnainouvne": "",
    "linaisnouvne": "",
    "numeregs": "",
    "nummer": "",
    "numper": "",
    "iddeclat": ""
  })

  const onSubmit = (e: any) => {
    axios.post("http://localhost:3000/naissances", naissance).then((data: any) => axios.get("http://localhost:3000/naissances").then(({ data }: any) => setNaissances(data)));
    setIsModalOpen(false);
    e.preventDefault();
  }

  useEffect(() => {
    axios.get("http://localhost:3000/naissances").then(({ data }: any) => setNaissances(data));
  }, [])

  return (
    <>
      <FadeIn className="overflow-hidden">
        {/* <div className="h-full  w-full" onClick={(e) => { }}>

          <div className="w-full flex flex-row items-center justify-between mt-3 mb-16">
            <div>

              <button onClick={() => setIsModalOpen(true)} className="btn  btn-outline rounded-lg space-x-3">
                <BsPlusLg size={15} />
                <span>
                  Déclarer une naissance </span></button>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <span className="underline">Mon compte</span>
                <div className="border p-1 rounded-full ">
                  <img
                    src={profil}
                    className="w-[40px] rounded-full h-[40px]"
                  />
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

          <div className="flex items-center justify-between space-x-24">
            <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-orange-600">
              <div className="text-lg flex flex-row items-center justify-between">
                <BsPlusLg size={25} />
                <span className="text-lg">
                  {naissances.length} naissances
                </span>
              </div>
              <div className="text-sm text-right mt-3">cette semaine</div>
            </div>

            <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-yellow-500">
              <div className="text-lg flex flex-row items-center justify-between">
                <BsPlusLg size={25} />
                <span className="text-lg">
                  32 naissances
                </span>
              </div>
              <div className="text-sm text-right mt-3">garcons</div>
            </div>
            <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-indigo-500">
              <div className="text-lg flex flex-row items-center justify-between">
                <BsPlusLg size={25} />
                <span className="text-lg">
                  32 naissances
                </span>
              </div>
              <div className="text-xs text-right mt-3">par rapport à la semaine dernière</div>
            </div>
            <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-green-600">
              <div className="text-lg flex flex-row items-center justify-between">
                <BsPlusLg size={25} />
                <span className="text-lg">
                  40 naissances
                </span>
              </div>
              <div className="text-sm text-right mt-3">filles</div>
            </div>

          </div>

          <div className="overflow-x-auto mt-14">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>N° Naissance</th>
                  <th>Nom complet</th>
                  <th>Genre</th>
                  <th>date</th>
                  <th>Lieu</th>
                  <th>N° Père</th>
                  <th>N° Mère</th>
                  <th>Id déclarant</th>
                </tr>
              </thead>
              <tbody>
                {naissances.reverse().map((value: any, index: number) => (
                  <tr key={Math.random()}>
                    <th>{index + 1}</th>
                    <td>{value.numnouvne}</td>
                    <td>{value.nomnouvne} {value.postnouvne} {value.prennouvne}</td>
                    <td>{value.genrnouvne}</td>
                    <td>{value.datnainouvne}</td>
                    <td>{value.linaisnouvne}</td>
                    <td>{value.numper}</td>
                    <td>{value.nummer}</td>
                    <td>{value.iddeclat}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div> */}
      </FadeIn>
      <dialog className={`w-full  h-full modal modal-top ${isModalOpen ? "modal-open" : ""}`}>
        <div className="bg-zinc-50  modal-top  px-6 pt-2 text-lg rounded-lg w-3/5">
          <div className="flex flex-row border-b py-3  px-2 items-center justify-between">
            <h2>Déclaration d'une naissance</h2>
            <button onClick={() => setIsModalOpen(false)} className="btn rounded-full btn-sm btn-error text-white">
              <BsX size={20} />
            </button>
          </div>
          <div className="">
            <form
              method="post"
              onSubmit={onSubmit}
              className="space-y-5 p-3"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Numéro nouveau-né</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setNaissance({ ...naissance, ...{ numnouvne: e.target.value } })}
                  className={
                    "input input-bordered"
                  }
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Prénom</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setNaissance({ ...naissance, ...{ prennouvne: e.target.value } })}

                    className={
                      "input input-bordered"
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nom</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ nomnouvne: e.target.value } })}

                    type="text"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PostNom</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ postnouvne: e.target.value } })}

                    type="text"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Genre</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ genrnouvne: e.target.value } })}

                    type="text"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date de naissance</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ datnainouvne: e.target.value } })}

                    type="date"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Lieu de naissance</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ linaisnouvne: e.target.value } })}
                    type="text"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">N° Enregistrements</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ numeregs: e.target.value } })}

                    type="text"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>

              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">numéro du père</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ numper: e.target.value } })}

                    type="text"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">numéro de la mère</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ nummer: e.target.value } })}

                    type="text"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Id du déclarant</span>
                  </label>
                  <input
                    onChange={(e) => setNaissance({ ...naissance, ...{ iddeclat: e.target.value } })}

                    type="text"
                    className={
                      "input input-bordered"
                    }
                  />
                </div>



              </div>
              <div className="w-64">
                <button
                  className="py-3 btn mt-5 w-full rounded-md  "
                  type="submit"
                >
                  Enregistrer
                </button>
              </div>
              <br />

            </form>
          </div>
        </div>
      </dialog>
    </>
  );

}
