import "reactflow/dist/style.css";
import profil from "../../assets/images/profil.jpeg";



import { BsPlusLg, BsStar, BsX } from "react-icons/bs";
import { useState, useRef } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Colis243() {
  const [width, setWidth] = useState<any>(0);
  const viewRef = useRef<any>(null);
  const [focusView, setFocusView] = useState(2);
  const [projetToEdit, setProjetToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
     <FadeIn className="overflow-hidden">
      {/* <div className="h-full  w-full" onClick={(e) => { }}>

        <div className="w-full flex flex-row items-center justify-between mt-3 mb-16">
          <div>

            <button onClick={() => setIsModalOpen(true)} className="btn  btn-outline rounded-lg space-x-3">
              <BsPlusLg size={15} />
              <span>
                Déclarer un mariage </span></button>
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
          <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-red-500">
            <div className="text-lg flex flex-row items-center justify-between">
              <BsPlusLg size={25} />
              <span className="text-lg">
                10 mariages
              </span>
            </div>
            <div className="text-sm text-right mt-3">cette semaine</div>
          </div>

          <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-yellow-500">
            <div className="text-lg flex flex-row items-center justify-between">
              <BsPlusLg size={25} />
              <span className="text-lg">
                40 mariages
              </span>
            </div>
            <div className="text-sm text-right mt-3">avec contentieux</div>
          </div>
          <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-cyan-500">
            <div className="text-lg flex flex-row items-center justify-between">
              <BsPlusLg size={25} />
              <span className="text-lg">
                70 mariages
              </span>
            </div>
            <div className="text-xs text-right mt-3">par rapport à la semaine dernière</div>
          </div>
          <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-green-600">
            <div className="text-lg flex flex-row items-center justify-between">
              <BsPlusLg size={25} />
              <span className="text-lg">
                18 divorces
              </span>
            </div>
            <div className="text-sm text-right mt-3">déclarés</div>
          </div>

        </div>

        <div className="overflow-x-auto mt-14">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div> */}
     </FadeIn>
      <dialog className={`w-full  h-full modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="bg-zinc-50 px-6 pt-2 text-lg rounded-lg w-2/4">
          <div className="flex flex-row border-b py-3  px-2 items-center justify-between">
            <h2>Enregistrement d'un mariage</h2>
            <button onClick={() => setIsModalOpen(false)} className="btn rounded-full btn-sm btn-error text-white">
              <BsX size={20} />
            </button>
          </div>
          <div className="h-64">

          </div>
        </div>
      </dialog>
    </>
  );

}
