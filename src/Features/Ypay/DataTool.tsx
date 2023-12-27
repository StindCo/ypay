import { AiOutlineLogout } from "react-icons/ai";
import { BsArrowRight, BsPlusLg, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import profil from "../../assets/images/profil.jpeg";

type Props = {
  propStyle: any;
  type: string;
};

export default function DataTool() {
  return (
    <>
      <div className="w-full">
        {/* <div className="w-full flex flex-row-reverse items-center justify-between mt-3 mb-16">
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
        <div className=" w-full  rounded-lg">

          <div className="flex overflow-x-scroll pb-10 no-scrollBar">
            <div className="grid grid-cols-5 gap-4">
              <div className=" px-3">
                <div className="w-full h-40 cursor-pointer flex flex-col justify-end  text-right  items-end  max-w-xs overflow-hidden rounded-lg shadow-md bg-green-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    cas des naissances
                  </h1>
                </div>
              </div>


              <div className=" px-3">
                <div className="w-full h-40 cursor-pointer flex flex-col justify-end items-end text-right  max-w-xs overflow-hidden rounded-lg shadow-md bg-gradient-to-t bg-violet-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    cas des decès
                  </h1>
                </div>
              </div>

              <div className=" px-3">
                <div className="w-full h-40 cursor-pointer flex flex-col justify-end items-end text-right  max-w-xs overflow-hidden rounded-lg shadow-md bg-rose-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    les mariages
                  </h1>
                </div>
              </div>

              <div className=" px-3">
                <div className="w-full h-40 cursor-pointer flex flex-col justify-end items-end text-right  max-w-xs overflow-hidden rounded-lg shadow-md bg-indigo-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    les divorces
                  </h1>
                </div>
              </div>

              <div className=" px-3">
                <div className="w-full h-40 cursor-pointer flex flex-col justify-end items-end text-right  max-w-xs overflow-hidden rounded-lg shadow-md bg-red-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h1 className="text-white font-[PoppinsBold] text-md p-8">
                    Enfants
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg mx-4">Quelques indicateurs</p>
          <div className="grid grid-cols-2 h-96 mt-8">
            <Chart />
            <Chart2                                                                                                        />
          </div>
        </div> */}



      </div>
    </>
  );
}
