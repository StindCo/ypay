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

export default function Main() {
  const [currentPage, setCurrentPage] = useState<any>(0);
  const [numberOfPage, setNumberOfPage] = useState<any>(1);
  const [pageLength, setPageLength] = useState<any>(10);
  const [filterText, setFilterText] = useState<any>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToShow, setUserToShow] = useState({});
  const [isModalForUserToShowOpen, setIsModalForUserToShowOpen] =
    useState(false);
  const [ordersFiltered, setOrdersFiltered] = useState<any>([]);
  const [typeOfUser, setTypeOfUser] = useState<any>("all");

  const [user, setUser] = useState<any>({
    name: "",
    phone: "",
    birthday: "",
    gender: "M",
    email: "",
  });

  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    let clientsWithFilter: any =
      typeOfUser == "all"
        ? orders
        : orders.filter((value: any) => value.user_type == typeOfUser);

    if (filterText == "") {
      let totalPages = Math.ceil(clientsWithFilter.length / pageLength);
      setNumberOfPage(totalPages);
      const startIndex = currentPage * pageLength;
      const endIndex = startIndex + pageLength;
      const subset = clientsWithFilter.slice(startIndex, endIndex);
      setOrdersFiltered(subset);
    } else {
      let value: any = clientsWithFilter.filter(
        (client: any) =>
          client.name.toLowerCase().includes(filterText.toLowerCase()) ||
          client?.email?.toLowerCase()?.includes(filterText.toLowerCase()) ||
          client?.phone_number
            ?.toLowerCase()
            ?.includes(filterText.toLowerCase())
      );

      setOrdersFiltered(value);
    }
  }, [orders, pageLength, currentPage, filterText, typeOfUser]);

  const loadClients = () => {
    getClients().then(({ data }) => {
      setOrders(data.data);
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

        <div className="flex items-center justify-between space-x-8">
          <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-yellow-500">
            <div className="text-lg flex flex-row items-center justify-between">
              <BsPlusLg size={25} />
              <span className="text-lg font-[PoppinsBold]">10 colis</span>
            </div>
            <div className="text-sm text-right mt-3">Non livrés</div>
          </div>
          <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-red-500">
            <div className="text-lg flex flex-row items-center justify-between">
              <BsPlusLg size={25} />
              <span className="text-lg font-[PoppinsBold]">5 commandes</span>
            </div>
            <div className="text-sm text-right mt-3">Non traités</div>
          </div>
          <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-green-600">
            <div className="text-lg flex flex-row items-center justify-end">
              <span className="text-lg font-[PoppinsBold]">10</span>
            </div>
            <div className="text-sm text-right mt-3">Nouveaux clients</div>
          </div>

          <div className="w-2/6 h-32 p-8 rounded-lg text-zinc-50 shadow-xl  bg-cyan-500">
            <div className="text-lg flex flex-row items-center justify-end">
              {/* <BsPlusLg size={25} /> */}
              <span className="text-lg font-[PoppinsBold]">10 $</span>
            </div>
            <div className="text-xs text-right mt-3">
              de revenu moyen par client
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
