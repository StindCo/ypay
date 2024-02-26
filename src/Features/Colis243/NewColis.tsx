import { AiOutlineLogout } from "react-icons/ai";
import { BsArrowRight, BsPlusLg, BsStar, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import profil from "../../assets/images/profil.jpeg";
import { useEffect, useState } from "react";

type Props = {
  propStyle: any;
  type: string;
};

export default function NewColis() {
  const [currentPage, setCurrentPage] = useState<any>(0);
  const [numberOfPage, setNumberOfPage] = useState<any>(1);
  const [pageLength, setPageLength] = useState<any>(10);
  const [filterText, setFilterText] = useState<any>("");
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [warehousesFilter, setWarehousesFilter] = useState<any>([]);

  const [warehouses, setWarehouses] = useState<any>([]);

  useEffect(() => {
    if (filterText == "") {
      let totalPages = Math.ceil(warehouses.length / pageLength);
      setNumberOfPage(totalPages);
      const startIndex = currentPage * pageLength;
      const endIndex = startIndex + pageLength;
      const subset = warehouses.slice(startIndex, endIndex);
      setWarehousesFilter(subset);
    } else {
      let value: any = warehouses.filter(
        (fournisseur: any) =>
          fournisseur.name.toLowerCase().includes(filterText) ||
          fournisseur.description.toLowerCase().includes(filterText) ||
          fournisseur.adresse.toLowerCase().includes(filterText)
      );
      setWarehousesFilter(value);
    }
  }, [warehouses, pageLength, currentPage, filterText]);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-row items-center justify-between mt-3 mb-8">
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

        <div className="w-full flex items-start pl-1 space-x-5 h-full justify-between">
          <div className="w-2/6  bg-slate-900 text-white shadow-md rounded-lg h-full p-5">
            <div className="text-lg uppercase py-1">Ajouter un paquet </div>
            <div className="form-control my-5">
              <input
                type="text"
                placeholder="Nom de l'article"
                className={
                  "input bg-slate-900 input-sm py-2 border-white input-bordered"
                }
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Lien vers l'article"
                className={
                  "input bg-slate-900 border-white input-sm py-2 input-bordered"
                }
              />
            </div>

            <div className="form-control my-2">
              <label className="label">
                <span className="label-text text-white">Quantité</span>
              </label>
              <input
                type="text"
                placeholder="Quantité"
                className={
                  "input bg-slate-900 border-white input-sm py-2 input-bordered"
                }
              />
            </div>

            <div className="form-control my-2">
              <label className="label">
                <span className="label-text text-white">Prix unitaire</span>
              </label>
              <input
                type="text"
                placeholder="prix unitaire"
                className={
                  "input bg-slate-900 border-white input-sm py-2 input-bordered"
                }
              />
              <span className="label-text text-end pt-1 text-xs text-white">
                Utilisez la virgule pour les valeurs décimals
              </span>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Dévise</span>
              </label>
              <select
                className={
                  "select bg-slate-900 border-white select-sm select-bordered"
                }
              >
                <option>USD</option>
                <option>EURO</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <textarea
                placeholder="une description"
                className={"textarea bg-slate-900 border-white"}
              ></textarea>
            </div>

            <div className="flex items-center justify-between mt-3">
              <button className="px-3 py-2 bg-green-500 rounded-sm text-white hover:bg-green-700 flex items-center space-x-3">
                Ajouter au panier
              </button>
              <button className="btn btn-error btn-sm">Annuler</button>
            </div>
          </div>
          <div className="w-4/6 space-y-2">
            <div className="border-2 p-3 h-[400px] border-green-400 font-[PoppinsBold]">
              <div className="bg-zinc-50  h-full shadow-md border-l">
                <div className="p-6"> Mes paquets </div>
                <table className="table w-full ">
                  <thead>
                    <tr>
                      <th>Nom de l'article</th>
                      <th>lien</th>
                      <th>Quantité</th>
                      <th>Prix unitaire</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="text-xl mb-2">Passer la commande</div>
              <div className="flex items-center justify-between">
                <div className="">Prix total net </div>
                <div className="text-xl font-[PoppinsBold]"> 0 $</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="">Livraison + frais de commission </div>
                <div className="text-xl font-[PoppinsBold]"> 0 $</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="">Prix total brut </div>
                <div className="text-xl font-[PoppinsBold]"> 0 $</div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <button className="px-3 py-2 w-full rounded-md bg-green-500 text-center text-white hover:bg-green-700 space-x-3">
                  Soumission de la reception de mes colis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
