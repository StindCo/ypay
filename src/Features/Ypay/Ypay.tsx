import { AiOutlineLogout } from "react-icons/ai";
import { BsArrowRight, BsPlusLg, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import profil from "../../assets/images/profil.jpeg";
import { useEffect, useState } from "react";

type Props = {
  propStyle: any;
  type: string;
};

export default function Ypay() {
  const [currentPage, setCurrentPage] = useState<any>(0);
  const [numberOfPage, setNumberOfPage] = useState<any>(1);
  const [pageLength, setPageLength] = useState<any>(10);
  const [filterText, setFilterText] = useState<any>("");
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
          <div className="text-2xl font-[PoppinsBold]">Mes commandes</div>
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
            <div className="w-full">
              <input
                onChange={(e) => setFilterText(e.target.value)}
                type="text"
                placeholder="Rechercher une commande"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="join rounded-lg space-x-2">
            {Array(numberOfPage)
              .fill(0)
              .map((_, index: number) => (
                <button
                  key={Math.random()}
                  onClick={() => setCurrentPage(index)}
                  className={`join-item rounded-lg px-5 btn ${
                    currentPage != index && "btn-outline"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
          </div>
          <div>
            <Link to="/home/new_orders" className="px-6 py-3 bg-green-500 rounded-lg text-white hover:bg-green-700 flex items-center space-x-3">
              <BsPlusLg size={15} />
              <span>Nouvelle commande </span>
            </Link>
          </div>
        </div>
        <div className="overflow-hidden h-[300px] overflow-y-scroll">
          <table className="table table-zebra w-full ">
            <thead>
              <tr>
                <th>#</th>
                <th>Numéro de la commande</th>
                <th>Date</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {warehousesFilter.map((value: any, index: number) => (
                <tr key={Math.random()}>
                  <th>{index + 1}</th>
                  <th className="underline cursor-pointer select-none font-[PoppinsBold] ">
                    <Link
                      to={
                        "/dashboard/products-manager/warehouses/" +
                        value?.idTech
                      }
                    >
                      {" "}
                      {value?.name}{" "}
                    </Link>
                  </th>
                  <th>{value?.description}</th>
                  <th>{value?.adresse}</th>
                  <th>{value?.responsable?.fullname}</th>
                  <th>0</th>
                  <th>0 $</th>
                  <th>
                    <a
                      onClick={() => {}}
                      className=" cursor-pointer text-xs text-red-600 underline"
                    >
                      Supprimer
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
